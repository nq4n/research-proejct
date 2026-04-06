// Lesson access configuration.
// Keep this file separate from lesson-config.js so storage access can change
// without editing the lesson content settings.
//
// Current setup:
// 1. lesson-system-config.json lives in the project root
// 2. This file points every page to that shared JSON
// 3. With no Cloudflare base URL, the app loads the JSON locally
//
// Cloudflare R2 later:
// 1. Keep the same remoteConfigPath values
// 2. Add either customDomain or publicBaseUrl
// 3. Upload the same JSON file to the bucket
// 4. Optional: add manifestPath if you will publish a lesson-access manifest

window.LESSON_ACCESS_CONFIG = {
    enabled: true,
    provider: "cloudflare-r2",
    strategy: "local-first",
    fetchTimeoutMs: 6000,

    cloudflare: {
        publicBaseUrl: "",
        customDomain: "",
        bucketName: "",
        accountId: "",
        basePrefix: "virtual-lab",
        configPrefix: "",
        assetPrefix: "",
        manifestPath: ""
    },

    pages: {
        home: {
            remoteConfigPath: "lesson-system-config.json",
            assetPrefix: ""
        },
        intro: {
            remoteConfigPath: "lesson-system-config.json",
            assetPrefix: ""
        },
        hardware: {
            remoteConfigPath: "lesson-system-config.json",
            assetPrefix: ""
        },
        software: {
            remoteConfigPath: "lesson-system-config.json",
            assetPrefix: ""
        },
        security: {
            remoteConfigPath: "lesson-system-config.json",
            assetPrefix: ""
        },
        practice: {
            remoteConfigPath: "lesson-system-config.json",
            assetPrefix: ""
        }
    }
};
