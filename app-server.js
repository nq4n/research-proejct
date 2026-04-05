const fs = require("fs");
const http = require("http");
const path = require("path");

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".fbx": "application/octet-stream",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8"
};

function resolveRequestPath(rootDir, requestUrl) {
  const rawPath = requestUrl === "/" ? "/index.html" : decodeURIComponent(requestUrl.split("?")[0]);
  const cleanedPath = rawPath.replace(/^\/+/, "");
  const candidatePath = path.normalize(path.join(rootDir, cleanedPath));
  const relativePath = path.relative(rootDir, candidatePath);

  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    return null;
  }

  return candidatePath;
}

function sendResponse(response, statusCode, body, contentType = "text/plain; charset=utf-8") {
  response.writeHead(statusCode, {
    "Content-Type": contentType,
    "Cache-Control": "no-store"
  });
  response.end(body);
}

function createAppServer(rootDir) {
  return new Promise((resolve, reject) => {
    const server = http.createServer((request, response) => {
      const resolvedPath = resolveRequestPath(rootDir, request.url || "/");

      if (!resolvedPath) {
        sendResponse(response, 403, "Forbidden");
        return;
      }

      fs.stat(resolvedPath, (statError, stats) => {
        if (statError || !stats.isFile()) {
          sendResponse(response, 404, "Not Found");
          return;
        }

        const extension = path.extname(resolvedPath).toLowerCase();
        const contentType = MIME_TYPES[extension] || "application/octet-stream";
        const stream = fs.createReadStream(resolvedPath);

        response.writeHead(200, {
          "Content-Type": contentType,
          "Cache-Control": "no-store"
        });

        stream.on("error", () => {
          if (!response.headersSent) {
            sendResponse(response, 500, "Unable to read file");
            return;
          }

          response.destroy();
        });

        stream.pipe(response);
      });
    });

    server.on("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        reject(new Error("Unable to determine local server address."));
        return;
      }

      resolve({
        server,
        url: `http://127.0.0.1:${address.port}/index.html`
      });
    });
  });
}

module.exports = {
  createAppServer
};
