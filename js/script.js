const VISITED_PAGES_KEY = "pc_maintenance_lab_visited_pages";
const PAGE_ROUTE_MAP = {
    home: "index.html",
    intro: "intro.html",
    hardware: "hardware.html",
    software: "software.html",
    security: "data-protection.html"
};

const MODEL_FOCUS_PRESETS = {
    overview: {
        title: "نظرة عامة",
        text: "ابدأ هنا لتثبيت شكل الهيكل ومواقع التهوية واللوحة الأم ومزود الطاقة قبل الانتقال إلى أي قرار صيانة.",
        points: [
            "الفهم العام يسبق لمس القطع أو اقتراح الاستبدال.",
            "هذه الزاوية تربط أسماء الدرس بشكل حقيقي داخل هيكل واحد.",
            "استخدمها أولاً ثم انتقل إلى المنطقة التي يظهر فيها الخطر."
        ],
        position: [180, 120, 180],
        target: [0, 45, 0]
    },
    airflow: {
        title: "مسار الهواء",
        text: "ركز هنا على الفتحات والمراوح والطريق الذي يسلكه الهواء داخل الجهاز، لأن الغبار يسبب مشكلة حرارية قبل أن يبدو العطل واضحاً.",
        points: [
            "سد الفتحات أو تراكم الغبار يرفع الحرارة بسرعة.",
            "تنظيم الداخل يحسن التهوية ولا يجعل المراوح تعمل تحت ضغط دائم.",
            "هذه الزاوية تدعم فكرة الحرارة والغبار من المحور الأول."
        ],
        position: [235, 85, 70],
        target: [0, 38, 0]
    },
    power: {
        title: "منطقة الطاقة",
        text: "هذه الزاوية تربط مزود الطاقة بفكرة الانطفاء المفاجئ والتذبذب الكهربائي والحاجة إلى الوقاية عبر منظم أو UPS.",
        points: [
            "الانقطاع المفاجئ يقود أولاً إلى فحص مسار الطاقة لا إلى تنظيف الملفات.",
            "مزود الطاقة جزء حاسم في استقرار التشغيل وسلامة المكونات.",
            "الوقاية الكهربائية تقلل الخطر قبل أن يتحول إلى عطل مادي."
        ],
        position: [-190, 100, 155],
        target: [0, 42, 0]
    },
    upgrade: {
        title: "منطقة الترقية",
        text: "هنا تظهر المنطقة التي ترتبط باللوحة الأم والذاكرة والمنافذ، لذلك تبدأ الترقية الصحيحة من التوافق لا من شراء قطعة أقوى فقط.",
        points: [
            "افحص توافق القطعة مع اللوحة والمنافذ والطاقة قبل التركيب.",
            "ارتدِ سواراً مضاداً للكهرباء الساكنة قبل التعامل مع القطع.",
            "الترقية الجيدة تعالج الحاجة الفعلية ولا تكون قراراً عشوائياً."
        ],
        position: [85, 150, 130],
        target: [0, 68, 0]
    }
};

const DEFAULT_SITE_CONFIG = {
    global: {
        motion: {
            revealDistancePx: 18,
            revealDurationMs: 450,
            staggerStepMs: 70,
            svgSpeedMultiplier: 1,
            viewerPulseMs: 480,
            modelSweepMs: 720
        }
    },
    pages: {
        hardware: {
            visibleSections: {
                "hardware-factors": true,
                "hardware-model-lab": true,
                "hardware-visuals": true,
                "hardware-check": true,
                "hardware-next-step": true
            },
            modelLab: {
                autoRotateSpeed: 0.0022,
                bobAmount: 2.2,
                bobSpeed: 0.0015,
                focusTransitionMs: 760,
                focusPulseMs: 480
            },
            focusPresets: MODEL_FOCUS_PRESETS
        }
    }
};

function isPlainObject(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
}

function mergeDeep(baseValue, overrideValue) {
    if (Array.isArray(baseValue) || Array.isArray(overrideValue)) {
        return Array.isArray(overrideValue) ? [...overrideValue] : Array.isArray(baseValue) ? [...baseValue] : overrideValue;
    }

    if (isPlainObject(baseValue) && isPlainObject(overrideValue)) {
        const merged = { ...baseValue };

        Object.keys(overrideValue).forEach((key) => {
            merged[key] = mergeDeep(baseValue[key], overrideValue[key]);
        });

        return merged;
    }

    return overrideValue ?? baseValue;
}

const SITE_CONFIG = mergeDeep(DEFAULT_SITE_CONFIG, window.LESSON_CONFIG || {});

function getPageConfig(pageId = document.body?.dataset.page) {
    if (!pageId) {
        return {};
    }

    return SITE_CONFIG.pages?.[pageId] || {};
}

function getMotionConfig() {
    return SITE_CONFIG.global?.motion || {};
}

function getHardwareFocusPresets() {
    return getPageConfig("hardware").focusPresets || MODEL_FOCUS_PRESETS;
}

const INTRO_SIMULATION_MODES = {
    preventive: {
        label: "الوقاية",
        modeLabel: "وضع الوقاية",
        title: "الجهاز يعمل لكن مؤشرات الخطر بدأت تظهر",
        text: "في هذا الوضع لا يوجد عطل مباشر بعد، لكن الحرارة والغبار يرسلان إشارات مبكرة بأن الصيانة الوقائية مطلوبة الآن لا لاحقاً.",
        tone: "warning",
        feedbackTitle: "كيف تعمل المحاكاة؟",
        feedbackText: "اختر إجراءً وقائياً لترى كيف يمنع العطل قبل أن يظهر للمستخدم.",
        alerts: [
            "غبار خفيف قرب المروحة",
            "الحرارة أعلى من الطبيعي",
            "لا يوجد توقف فعلي حتى الآن"
        ],
        metrics: [
            {
                id: "heat",
                label: "الحرارة",
                value: 68,
                direction: "lower",
                note: "انخفاضها يعني أن الضغط الحراري تحت السيطرة."
            },
            {
                id: "airflow",
                label: "تدفق الهواء",
                value: 52,
                direction: "higher",
                note: "ارتفاعه يساعد الجهاز على العمل بثبات أطول."
            },
            {
                id: "stability",
                label: "الاستقرار",
                value: 81,
                direction: "higher",
                note: "الاستقرار جيد حالياً لكنه سيتراجع مع الإهمال."
            },
            {
                id: "dust",
                label: "تراكم الغبار",
                value: 61,
                direction: "lower",
                note: "كلما انخفض هذا المؤشر كان مسار الهواء أوضح."
            }
        ],
        actions: [
            {
                id: "clean-fans",
                label: "تنظيف المراوح",
                description: "إزالة الغبار من نقطة الخطر الأولى قبل أن يختنق الهواء.",
                effects: {
                    heat: -20,
                    airflow: 18,
                    stability: 7,
                    dust: -26
                },
                alerts: [
                    "تم فتح مسار الهواء",
                    "انخفض الغبار حول المراوح",
                    "المؤشر الحراري عاد للمنطقة الآمنة"
                ],
                feedbackTitle: "نتيجة الإجراء الوقائي",
                feedbackText: "تنظيف المراوح خفّض الحرارة ورفع كفاءة التهوية لأن السبب تمت معالجته قبل أن يصبح عطلاً.",
                resultTone: "good"
            },
            {
                id: "organize-case",
                label: "تنظيم الكابلات",
                description: "تحسين مسار الهواء وتقليل الفوضى داخل الهيكل.",
                effects: {
                    heat: -9,
                    airflow: 15,
                    stability: 6,
                    dust: -6
                },
                alerts: [
                    "الكابلات لم تعد تسد مجرى الهواء",
                    "حركة الهواء أصبحت أكثر سلاسة",
                    "الخطر الحراري انخفض جزئياً"
                ],
                feedbackTitle: "تنظيم داخلي أفضل",
                feedbackText: "هذا الإجراء لا يصلح كل شيء وحده، لكنه يرفع التهوية ويمنع تراكم مشكلة أكبر لاحقاً.",
                resultTone: "warning"
            },
            {
                id: "schedule-check",
                label: "جدولة فحص دوري",
                description: "تحويل الوقاية من رد فعل مؤقت إلى عادة صيانة منتظمة.",
                effects: {
                    heat: -6,
                    airflow: 6,
                    stability: 12,
                    dust: -4
                },
                alerts: [
                    "تم تثبيت روتين متابعة",
                    "فرصة تجاهل المؤشرات انخفضت",
                    "الاستقرار المستقبلي أصبح أعلى"
                ],
                feedbackTitle: "وقاية منظمة",
                feedbackText: "جدولة المتابعة لا تنظف الجهاز فوراً، لكنها تمنع العودة إلى الإهمال وتزيد استقرار العمل على المدى الطويل.",
                resultTone: "warning"
            }
        ]
    },
    corrective: {
        label: "العلاج",
        modeLabel: "وضع العلاج",
        title: "العطل أصبح ظاهراً ويؤثر على أداء الجهاز",
        text: "هنا لم تعد الوقاية كافية. المستخدم يلاحظ بطئاً أو تجمداً أو رسائل خطأ، لذلك يجب تنفيذ معالجة مباشرة تعيد الجهاز إلى حالة مستقرة.",
        tone: "critical",
        feedbackTitle: "كيف تعمل المحاكاة؟",
        feedbackText: "جرّب إجراءً علاجياً لترى كيف يخف الضغط وتعود مؤشرات العمل تدريجياً.",
        alerts: [
            "استجابة النظام بطيئة",
            "تجمّد متكرر أثناء العمل",
            "يوجد عطل واضح للمستخدم"
        ],
        metrics: [
            {
                id: "response",
                label: "سرعة الاستجابة",
                value: 34,
                direction: "higher",
                note: "كلما ارتفع هذا المؤشر شعر المستخدم بتحسن مباشر."
            },
            {
                id: "stability",
                label: "استقرار التشغيل",
                value: 28,
                direction: "higher",
                note: "الاستقرار المنخفض يعني أن المشكلة ما زالت تعود."
            },
            {
                id: "heat",
                label: "الحرارة",
                value: 79,
                direction: "lower",
                note: "الحرارة المرتفعة هنا أحد أعراض الضغط الزائد."
            },
            {
                id: "errors",
                label: "حمل الأخطاء",
                value: 72,
                direction: "lower",
                note: "كلما انخفض هذا المؤشر قلّ تكرار الرسائل والتوقفات."
            }
        ],
        actions: [
            {
                id: "reduce-load",
                label: "إيقاف الحمل الزائد",
                description: "تقليل البرامج أو العمليات التي تدفع الجهاز إلى حافة التوقف.",
                effects: {
                    response: 18,
                    stability: 12,
                    heat: -11,
                    errors: -8
                },
                alerts: [
                    "تم خفض الضغط المباشر على الجهاز",
                    "الاستجابة تحسنت جزئياً",
                    "ما زال السبب الأساسي يحتاج متابعة"
                ],
                feedbackTitle: "تحسن أولي",
                feedbackText: "خفض الحمل أعاد بعض الاستقرار فوراً، لكنه خطوة علاجية أولى لا تكفي وحدها إذا كان السبب البنيوي ما زال موجوداً.",
                resultTone: "warning"
            },
            {
                id: "remove-cause",
                label: "إزالة السبب المباشر",
                description: "حذف التطبيق أو العامل الذي تسبب في التعطل المتكرر.",
                effects: {
                    response: 27,
                    stability: 24,
                    heat: -6,
                    errors: -24
                },
                alerts: [
                    "العامل المسبب للعطل تم عزله",
                    "تكرار الأخطاء انخفض بوضوح",
                    "الاستقرار عاد إلى مستوى مقبول"
                ],
                feedbackTitle: "علاج السبب لا العرض",
                feedbackText: "الفرق هنا جوهري: الجهاز لم يتحسن لأننا أخفينا العطل، بل لأننا أزلنا المصدر الذي كان يسببه.",
                resultTone: "good"
            },
            {
                id: "repair-system",
                label: "فحص وإصلاح ملفات النظام",
                description: "معالجة الخلل الذي يبقي الأعطال متكررة حتى بعد إعادة التشغيل.",
                effects: {
                    response: 14,
                    stability: 21,
                    heat: -4,
                    errors: -19
                },
                alerts: [
                    "تم إصلاح جزء من الخلل البرمجي",
                    "الأعطال المتكررة تراجعت",
                    "الجهاز يحتاج مراقبة بعد الإصلاح"
                ],
                feedbackTitle: "إصلاح جذري جزئي",
                feedbackText: "فحص ملفات النظام يرفع الاستقرار ويقلل الأخطاء، وهو مناسب عندما يكون الخلل متكرراً حتى بعد تخفيف الحمل.",
                resultTone: "warning"
            }
        ]
    },
    diagnosis: {
        label: "التشخيص",
        modeLabel: "وضع التشخيص",
        title: "القرار ما زال غير محسوم ويحتاج أدلة",
        text: "في هذا الوضع الخطأ الأكبر هو التسرع. المطلوب هو جمع مؤشرات صحيحة ثم تضييق الاحتمالات قبل شراء قطعة أو تنفيذ إصلاح عشوائي.",
        tone: "analysis",
        feedbackTitle: "كيف تعمل المحاكاة؟",
        feedbackText: "اختر خطوة تشخيصية لترى كيف يزداد وضوح المشكلة وتنخفض فوضى الاحتمالات.",
        alerts: [
            "السبب غير مؤكد بعد",
            "التسرع قد يضيع الوقت والمال",
            "يجب جمع مؤشرات قبل اتخاذ القرار"
        ],
        metrics: [
            {
                id: "clarity",
                label: "وضوح الأعراض",
                value: 36,
                direction: "higher",
                note: "كلما ارتفع هذا المؤشر أصبح الوصف أقرب للسبب الحقيقي."
            },
            {
                id: "confidence",
                label: "ثقة القرار",
                value: 24,
                direction: "higher",
                note: "يرتفع عندما تتحول الملاحظة إلى دليل يمكن اختباره."
            },
            {
                id: "noise",
                label: "فوضى الاحتمالات",
                value: 74,
                direction: "lower",
                note: "الانخفاض هنا يعني أنك تستبعد الفرضيات غير المهمة."
            },
            {
                id: "rush",
                label: "خطر التسرع",
                value: 68,
                direction: "lower",
                note: "كلما انخفض أصبح قرار الإصلاح أكثر عقلانية."
            }
        ],
        actions: [
            {
                id: "record-symptoms",
                label: "تسجيل العرض بدقة",
                description: "تحويل الشكوى العامة إلى ملاحظة يمكن تتبعها واختبارها.",
                effects: {
                    clarity: 22,
                    confidence: 10,
                    noise: -12,
                    rush: -8
                },
                alerts: [
                    "الوصف أصبح أدق من مجرد كلمة بطيء",
                    "بعض الفرضيات الضعيفة سقطت",
                    "التشخيص أصبح أقرب للمنهجية"
                ],
                feedbackTitle: "من الملاحظة إلى الدليل",
                feedbackText: "عندما تصف العرض بدقة، فأنت لا تضيف كلاماً أكثر فقط، بل تقلل دائرة الاحتمالات التي ستضيع وقت الفحص.",
                resultTone: "analysis"
            },
            {
                id: "isolate-variables",
                label: "عزل السبب المحتمل",
                description: "استبعاد التغييرات والعوامل المحيطة لاختبار فرضية واحدة في كل مرة.",
                effects: {
                    clarity: 8,
                    confidence: 21,
                    noise: -20,
                    rush: -12
                },
                alerts: [
                    "تم تقليل عدد الفرضيات المفتوحة",
                    "الاختبار صار مركزاً على سبب واحد",
                    "إمكانية الخطأ في القرار انخفضت"
                ],
                feedbackTitle: "تضييق دائرة الاحتمال",
                feedbackText: "عزل المتغيرات يمنع خلط الأسباب معاً، ولذلك ترتفع ثقة القرار حتى لو لم يتم الإصلاح بعد.",
                resultTone: "analysis"
            },
            {
                id: "run-safe-test",
                label: "تنفيذ اختبار آمن",
                description: "تشغيل خطوة اختبارية لا تغيّر الجهاز جذرياً لكنها تكشف مصدر المشكلة.",
                effects: {
                    clarity: 14,
                    confidence: 26,
                    noise: -22,
                    rush: -19
                },
                alerts: [
                    "نتيجة الاختبار وجهت القرار",
                    "المشكلة أصبحت قابلة للتصنيف",
                    "قرار الإصلاح صار مبنياً على دليل"
                ],
                feedbackTitle: "تشخيص مكتمل تقريباً",
                feedbackText: "الاختبار الآمن لا يصلح العطل مباشرة، لكنه يرفع جودة القرار بشكل واضح لأن الخطوة التالية تصبح مبنية على دليل لا على تخمين.",
                resultTone: "good"
            }
        ]
    }
};

function clampMetricValue(value) {
    return Math.max(0, Math.min(100, value));
}

function createIntroSimulationState(modeId) {
    const mode = INTRO_SIMULATION_MODES[modeId];

    return {
        modeId,
        tone: mode.tone,
        alerts: [...mode.alerts],
        appliedActions: [],
        feedbackTitle: mode.feedbackTitle,
        feedbackText: mode.feedbackText,
        metrics: mode.metrics.map((metric) => ({ ...metric }))
    };
}

function getMetricHealth(metric) {
    return metric.direction === "lower" ? 100 - metric.value : metric.value;
}

function getMetricTone(metric) {
    const health = getMetricHealth(metric);

    if (health >= 75) {
        return "good";
    }

    if (health >= 45) {
        return "warning";
    }

    return "critical";
}

function loadVisitedPages() {
    try {
        const raw = localStorage.getItem(VISITED_PAGES_KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        return [];
    }
}

function saveVisitedPages(pages) {
    localStorage.setItem(VISITED_PAGES_KEY, JSON.stringify(pages));
}

function setupNavigation() {
    const nav = document.querySelector(".main-nav");
    const toggle = document.querySelector(".nav-toggle");
    const pageId = document.body.dataset.page;
    const currentRoute = PAGE_ROUTE_MAP[pageId];

    if (nav && currentRoute) {
        nav.querySelectorAll("a").forEach((link) => {
            const href = link.getAttribute("href");
            link.classList.toggle("is-active", href === currentRoute);
        });
    }

    if (!nav || !toggle) {
        return;
    }

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
}

function markVisitedPage() {
    const pageId = document.body.dataset.page;

    if (!pageId) {
        return;
    }

    const visited = new Set(loadVisitedPages());
    visited.add(pageId);
    saveVisitedPages([...visited]);

    document.querySelectorAll("[data-topic-link]").forEach((card) => {
        const topicId = card.dataset.topicLink;
        const state = card.querySelector(".topic-state");
        const wasVisited = visited.has(topicId);

        card.classList.toggle("is-visited", wasVisited);

        if (state && wasVisited) {
            state.textContent = "تمت الزيارة";
        }
    });
}

function setupSwitchGroup(groupSelector, triggerSelector, panelSelector, triggerAttr) {
    document.querySelectorAll(groupSelector).forEach((group) => {
        const triggers = group.querySelectorAll(triggerSelector);
        const panels = group.querySelectorAll(panelSelector);

        triggers.forEach((trigger) => {
            trigger.addEventListener("click", () => {
                const targetId = trigger.dataset[triggerAttr];

                triggers.forEach((item) => {
                    item.classList.toggle("is-active", item === trigger);
                });

                panels.forEach((panel) => {
                    panel.classList.toggle("is-active", panel.id === targetId);
                });
            });
        });
    });
}

function setupAnswers() {
    document.querySelectorAll(".quiz-card").forEach((quizCard) => {
        const buttons = quizCard.querySelectorAll("[data-answer]");
        const feedback = quizCard.querySelector(".answer-feedback");

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const isCorrect = button.dataset.correct === "true";
                const message = button.dataset.feedback || "";

                buttons.forEach((item) => {
                    item.classList.remove("is-correct", "is-wrong");
                });

                button.classList.add(isCorrect ? "is-correct" : "is-wrong");

                if (feedback) {
                    feedback.hidden = false;
                    feedback.textContent = message;
                }
            });
        });
    });
}

function evaluatePasswordStrength(password) {
    let score = 0;

    if (password.length >= 8) {
        score += 25;
    }

    if (password.length >= 12) {
        score += 20;
    }

    if (/[a-zA-Z]/.test(password) && /\d/.test(password)) {
        score += 20;
    }

    if (/[!@#$%^&*()_\-+=[\]{};:'"\\|,.<>/?]/.test(password)) {
        score += 20;
    }

    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
        score += 15;
    }

    const normalized = password.toLowerCase();
    const weakPattern = ["123", "password", "admin", "school", "qwerty"].some((item) => normalized.includes(item));

    if (weakPattern) {
        score = Math.max(0, score - 25);
    }

    return Math.min(100, score);
}

function setupPasswordMeter() {
    const input = document.getElementById("password-input");
    const fill = document.getElementById("password-strength-fill");
    const label = document.getElementById("password-strength-label");
    const text = document.getElementById("password-strength-text");

    if (!input || !fill || !label || !text) {
        return;
    }

    const render = () => {
        const score = evaluatePasswordStrength(input.value);
        fill.style.width = `${score}%`;

        if (!input.value) {
            label.textContent = "لم يبدأ التقييم بعد";
            text.textContent = "جرّب كلمة أطول وأكثر تنوعاً لترى كيف يتغير المقياس.";
            return;
        }

        if (score >= 80) {
            label.textContent = "قوية";
            text.textContent = "هذه الصيغة أقوى لأنها طويلة ومتنوعة وأصعب في التخمين.";
            return;
        }

        if (score >= 55) {
            label.textContent = "متوسطة";
            text.textContent = "ما زالت تحتاج طولاً أو تنوعاً أكبر حتى تصبح أكثر أماناً.";
            return;
        }

        label.textContent = "ضعيفة";
        text.textContent = "هذه الصيغة سهلة التخمين أو قصيرة أكثر من اللازم.";
    };

    input.addEventListener("input", render);
    render();
}

function setElementContent(id, value, useMarkup = false) {
    if (typeof value !== "string") {
        return;
    }

    const element = document.getElementById(id);

    if (!element) {
        return;
    }

    if (useMarkup) {
        element.innerHTML = value;
        return;
    }

    element.textContent = value;
}

function setLinkContent(id, label, href) {
    const element = document.getElementById(id);

    if (!element) {
        return;
    }

    if (typeof label === "string") {
        element.textContent = label;
    }

    if (typeof href === "string" && href) {
        element.setAttribute("href", href);
    }
}

function setSectionVisibility(sectionId, isVisible) {
    const section = document.getElementById(sectionId);

    if (!section || typeof isVisible !== "boolean") {
        return;
    }

    section.hidden = !isVisible;
}

function applyMotionConfig() {
    const motion = getMotionConfig();
    const root = document.documentElement;
    const speedMultiplier = Math.max(0.4, Number(motion.svgSpeedMultiplier) || 1);
    const viewerPulseMs = Math.max(240, Number(motion.viewerPulseMs) || 480);
    const modelSweepMs = Math.max(320, Number(motion.modelSweepMs) || 720);

    root.style.setProperty("--reveal-distance", `${Math.max(0, Number(motion.revealDistancePx) || 18)}px`);
    root.style.setProperty("--reveal-duration", `${Math.max(180, Number(motion.revealDurationMs) || 450)}ms`);
    root.style.setProperty("--viewer-pulse-duration", `${viewerPulseMs}ms`);
    root.style.setProperty("--model-sweep-duration", `${modelSweepMs}ms`);
    root.style.setProperty("--svg-dash-duration", `${(7 / speedMultiplier).toFixed(2)}s`);
    root.style.setProperty("--svg-danger-dash-duration", `${(4.6 / speedMultiplier).toFixed(2)}s`);
    root.style.setProperty("--svg-pulse-duration", `${(2.4 / speedMultiplier).toFixed(2)}s`);
    root.style.setProperty("--svg-ring-duration", `${(3 / speedMultiplier).toFixed(2)}s`);
    root.style.setProperty("--svg-float-duration", `${(3.4 / speedMultiplier).toFixed(2)}s`);
    root.style.setProperty("--svg-float-slow-duration", `${(4.8 / speedMultiplier).toFixed(2)}s`);
    root.style.setProperty("--svg-float-fast-duration", `${(3.8 / speedMultiplier).toFixed(2)}s`);
    root.style.setProperty("--svg-blink-duration", `${(1.8 / speedMultiplier).toFixed(2)}s`);
    root.style.setProperty("--svg-bar-duration", `${(3.8 / speedMultiplier).toFixed(2)}s`);
    root.style.setProperty("--svg-spin-slow-duration", `${(6 / speedMultiplier).toFixed(2)}s`);
    root.style.setProperty("--svg-spin-fast-duration", `${(3.8 / speedMultiplier).toFixed(2)}s`);
}

function setupHardwarePageConfig() {
    const config = getPageConfig("hardware");
    const hero = config.hero || {};
    const modelLab = config.modelLab || {};
    const tabs = config.visualTabs || {};
    const focusPresets = getHardwareFocusPresets();

    Object.entries(config.visibleSections || {}).forEach(([sectionId, isVisible]) => {
        setSectionVisibility(sectionId, isVisible);
    });

    setElementContent("hardware-hero-title", hero.title);
    setElementContent("hardware-hero-description", hero.description);
    setLinkContent("hardware-hero-primary", hero.primaryActionLabel, hero.primaryActionTarget);
    setLinkContent("hardware-hero-secondary", hero.secondaryActionLabel, hero.secondaryActionTarget);

    setElementContent("hardware-model-eyebrow", modelLab.eyebrow);
    setElementContent("hardware-model-title", modelLab.title);
    setElementContent("hardware-model-description", modelLab.description, true);
    setElementContent("hardware-model-overlay-title", modelLab.overlayTitle);
    setElementContent("hardware-model-overlay-hint", modelLab.overlayHint);

    setElementContent("hardware-tab-heat", tabs.heat);
    setElementContent("hardware-tab-power", tabs.power);
    setElementContent("hardware-tab-upgrade", tabs.upgrade);
    setElementContent("hardware-tab-disk", tabs.disk);

    Object.entries(focusPresets).forEach(([focusId, preset]) => {
        const button = document.querySelector(`[data-model-focus="${focusId}"]`);

        if (button && typeof preset.buttonLabel === "string") {
            button.textContent = preset.buttonLabel;
        }
    });
}

function setupPageConfig() {
    applyMotionConfig();

    if (document.body?.dataset.page === "hardware") {
        setupHardwarePageConfig();
    }
}

function setupRevealAnimation() {
    const items = document.querySelectorAll("[data-reveal]");
    const motion = getMotionConfig();
    const staggerStep = Math.max(0, Number(motion.staggerStepMs) || 70);

    if (!items.length) {
        return;
    }

    items.forEach((item, index) => {
        item.style.setProperty("--reveal-delay", `${index * staggerStep}ms`);
    });

    if (typeof IntersectionObserver === "undefined") {
        items.forEach((item) => item.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("is-visible");
            entry.target.style.removeProperty("--reveal-delay");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    items.forEach((item) => observer.observe(item));
}

function setupIntroSimulation() {
    const root = document.querySelector("[data-intro-simulation]");
    const modeContainer = document.getElementById("intro-sim-modes");
    const actionContainer = document.getElementById("intro-sim-actions");
    const metricContainer = document.getElementById("intro-sim-metrics");
    const feedback = document.getElementById("intro-sim-feedback");
    const modeLabel = document.getElementById("intro-sim-mode-label");
    const title = document.getElementById("intro-sim-title");
    const text = document.getElementById("intro-sim-text");
    const alerts = document.getElementById("intro-sim-alerts");

    if (!root || !modeContainer || !actionContainer || !metricContainer || !feedback || !modeLabel || !title || !text || !alerts) {
        return;
    }

    let currentState = createIntroSimulationState("preventive");

    const render = () => {
        const mode = INTRO_SIMULATION_MODES[currentState.modeId];

        root.dataset.simTone = currentState.tone;
        modeLabel.textContent = mode.modeLabel;
        title.textContent = mode.title;
        text.textContent = mode.text;

        alerts.innerHTML = currentState.alerts
            .map((item) => `<span class="sim-alert">${item}</span>`)
            .join("");

        modeContainer.innerHTML = Object.entries(INTRO_SIMULATION_MODES)
            .map(([modeId, item]) => `
                <button class="sim-mode-btn ${modeId === currentState.modeId ? "is-active" : ""}" type="button" data-intro-mode="${modeId}">
                    ${item.label}
                </button>
            `)
            .join("");

        metricContainer.innerHTML = currentState.metrics
            .map((metric) => `
                <article class="sim-metric-card">
                    <header>
                        <span>${metric.label}</span>
                        <strong>${metric.value}%</strong>
                    </header>
                    <div class="sim-bar">
                        <span class="sim-fill is-${getMetricTone(metric)}" style="width: ${metric.value}%"></span>
                    </div>
                    <p class="sim-metric-note">${metric.note}</p>
                </article>
            `)
            .join("");

        actionContainer.innerHTML = mode.actions
            .map((action) => {
                const isUsed = currentState.appliedActions.includes(action.id);

                return `
                    <button class="sim-action-btn" type="button" data-intro-action="${action.id}" ${isUsed ? "disabled" : ""}>
                        <strong>${action.label}</strong>
                        <span>${action.description}</span>
                    </button>
                `;
            })
            .join("");

        feedback.innerHTML = `
            <strong>${currentState.feedbackTitle}</strong>
            <p>${currentState.feedbackText}</p>
        `;
    };

    modeContainer.addEventListener("click", (event) => {
        const button = event.target.closest("[data-intro-mode]");

        if (!button) {
            return;
        }

        const modeId = button.dataset.introMode;

        if (!INTRO_SIMULATION_MODES[modeId] || modeId === currentState.modeId) {
            return;
        }

        currentState = createIntroSimulationState(modeId);
        render();
    });

    actionContainer.addEventListener("click", (event) => {
        const button = event.target.closest("[data-intro-action]");

        if (!button || button.disabled) {
            return;
        }

        const mode = INTRO_SIMULATION_MODES[currentState.modeId];
        const action = mode.actions.find((item) => item.id === button.dataset.introAction);

        if (!action) {
            return;
        }

        currentState = {
            ...currentState,
            tone: action.resultTone ?? currentState.tone,
            alerts: action.alerts?.length ? [...action.alerts] : currentState.alerts,
            appliedActions: [...currentState.appliedActions, action.id],
            feedbackTitle: action.feedbackTitle,
            feedbackText: action.feedbackText,
            metrics: currentState.metrics.map((metric) => ({
                ...metric,
                value: clampMetricValue(metric.value + (action.effects[metric.id] ?? 0))
            }))
        };

        render();
    });

    render();
}

function setViewerFocusContent(focusId) {
    const presets = getHardwareFocusPresets();
    const preset = presets[focusId] ?? presets.overview ?? MODEL_FOCUS_PRESETS.overview;
    const title = document.getElementById("viewer-focus-title");
    const text = document.getElementById("viewer-focus-text");
    const points = document.getElementById("viewer-focus-points");

    if (title) {
        title.textContent = preset.title;
    }

    if (text) {
        text.textContent = preset.text;
    }

    if (points) {
        const pointList = Array.isArray(preset.points) ? preset.points : [];

        points.innerHTML = pointList
            .map((point) => `<div class="mini-point">${point}</div>`)
            .join("");
    }
}

async function setupModelViewer() {
    const mount = document.querySelector("[data-model-viewer]");
    const stage = mount?.closest(".model-stage");
    const infoCard = document.querySelector(".viewer-info");
    const modelConfig = getPageConfig("hardware").modelLab || {};
    const focusPresets = getHardwareFocusPresets();
    const motionConfig = getMotionConfig();
    const focusPulseMs = Math.max(240, Number(modelConfig.focusPulseMs) || Number(motionConfig.viewerPulseMs) || 480);
    let focusPulseTimeout = 0;

    if (!mount) {
        return;
    }

    mount.innerHTML = `<div class="viewer-loading">جارٍ تحميل النموذج ثلاثي الأبعاد...</div>`;
    setViewerFocusContent("overview");

    const triggerFocusFeedback = () => {
        if (!stage || !infoCard) {
            return;
        }

        window.clearTimeout(focusPulseTimeout);
        stage.classList.remove("is-focus-shifting");
        infoCard.classList.remove("is-refreshing");
        void stage.offsetWidth;
        stage.classList.add("is-focus-shifting");
        infoCard.classList.add("is-refreshing");

        focusPulseTimeout = window.setTimeout(() => {
            stage.classList.remove("is-focus-shifting");
            infoCard.classList.remove("is-refreshing");
        }, focusPulseMs);
    };

    try {
        const THREE = await import("https://esm.sh/three@0.164.1");
        const { OrbitControls } = await import("https://esm.sh/three@0.164.1/examples/jsm/controls/OrbitControls.js");
        const { FBXLoader } = await import("https://esm.sh/three@0.164.1/examples/jsm/loaders/FBXLoader.js");

        mount.innerHTML = "";

        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#eef5fb");

        const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 3000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        const autoRotateSpeed = Math.max(0, Number(modelConfig.autoRotateSpeed) || 0.0022);
        const bobAmount = Math.max(0, Number(modelConfig.bobAmount) || 2.2);
        const bobSpeed = Math.max(0.0004, Number(modelConfig.bobSpeed) || 0.0015);
        const focusTransitionMs = Math.max(240, Number(modelConfig.focusTransitionMs) || 760);
        const prefersReducedMotion = window.matchMedia
            ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
            : false;
        let focusTransition = null;

        renderer.setPixelRatio(window.devicePixelRatio || 1);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        mount.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.08;
        controls.minDistance = 120;
        controls.maxDistance = 420;

        scene.add(new THREE.AmbientLight("#ffffff", 1.4));

        const keyLight = new THREE.DirectionalLight("#ffffff", 1.2);
        keyLight.position.set(180, 240, 120);
        scene.add(keyLight);

        const fillLight = new THREE.DirectionalLight("#c9e4ff", 0.85);
        fillLight.position.set(-180, 120, -120);
        scene.add(fillLight);

        const grid = new THREE.GridHelper(320, 18, "#c8d8ea", "#e4edf6");
        grid.position.y = -4;
        scene.add(grid);

        const loader = new FBXLoader();
        const model = await loader.loadAsync("models/PC.fbx");
        const initialBox = new THREE.Box3().setFromObject(model);
        const size = initialBox.getSize(new THREE.Vector3());
        const maxSize = Math.max(size.x, size.y, size.z) || 1;
        const scale = 160 / maxSize;

        model.scale.setScalar(scale);

        const scaledBox = new THREE.Box3().setFromObject(model);
        const center = scaledBox.getCenter(new THREE.Vector3());
        model.position.sub(center);
        model.position.y -= scaledBox.min.y - 2;

        scene.add(model);
        const baseModelY = model.position.y;

        const applyFocus = (focusId, immediate = false) => {
            const preset = focusPresets[focusId] ?? focusPresets.overview ?? MODEL_FOCUS_PRESETS.overview;
            const position = Array.isArray(preset.position) ? preset.position : [180, 120, 180];
            const target = Array.isArray(preset.target) ? preset.target : [0, 45, 0];
            const nextPosition = new THREE.Vector3(position[0], position[1], position[2]);
            const nextTarget = new THREE.Vector3(target[0], target[1], target[2]);

            setViewerFocusContent(focusId);
            triggerFocusFeedback();

            if (immediate || prefersReducedMotion) {
                camera.position.copy(nextPosition);
                controls.target.copy(nextTarget);
                controls.update();
                focusTransition = null;
                return;
            }

            focusTransition = {
                startTime: performance.now(),
                duration: focusTransitionMs,
                fromPosition: camera.position.clone(),
                fromTarget: controls.target.clone(),
                toPosition: nextPosition,
                toTarget: nextTarget
            };
        };

        const resize = () => {
            const width = mount.clientWidth;
            const height = Math.max(mount.clientHeight, 540);

            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        resize();
        applyFocus("overview", true);

        const animate = (now = performance.now()) => {
            requestAnimationFrame(animate);

            if (focusTransition) {
                const progress = Math.min(1, (now - focusTransition.startTime) / focusTransition.duration);
                const easedProgress = 1 - Math.pow(1 - progress, 3);

                camera.position.lerpVectors(focusTransition.fromPosition, focusTransition.toPosition, easedProgress);
                controls.target.lerpVectors(focusTransition.fromTarget, focusTransition.toTarget, easedProgress);

                if (progress >= 1) {
                    focusTransition = null;
                }
            }

            if (!prefersReducedMotion) {
                model.rotation.y += autoRotateSpeed;
                model.position.y = baseModelY + Math.sin(now * bobSpeed) * bobAmount;
            }

            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        if (typeof ResizeObserver !== "undefined") {
            const observer = new ResizeObserver(resize);
            observer.observe(mount);
        } else {
            window.addEventListener("resize", resize);
        }

        document.querySelectorAll("[data-model-focus]").forEach((button) => {
            button.addEventListener("click", () => {
                const focusId = button.dataset.modelFocus;

                document.querySelectorAll("[data-model-focus]").forEach((item) => {
                    item.classList.toggle("is-active", item === button);
                });

                applyFocus(focusId);
            });
        });
    } catch (error) {
        mount.innerHTML = `
            <div class="viewer-loading">
                تعذر تحميل النموذج ثلاثي الأبعاد حالياً.
            </div>
        `;
    }
}

function startApp() {
    setupPageConfig();
    setupNavigation();
    markVisitedPage();
    setupSwitchGroup("[data-scenario-group]", "[data-scenario-target]", ".scenario-panel", "scenarioTarget");
    setupSwitchGroup("[data-visual-group]", "[data-visual-target]", ".visual-panel", "visualTarget");
    setupAnswers();
    setupIntroSimulation();
    setupPasswordMeter();
    setupRevealAnimation();
    setupModelViewer();
}

startApp();
