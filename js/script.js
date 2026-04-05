const VISITED_PAGES_KEY = "pc_maintenance_lab_visited_pages";
const PAGE_ROUTE_MAP = {
    home: "index.html",
    intro: "intro.html",
    hardware: "hardware.html",
    software: "software.html",
    security: "data-protection.html",
    practice: "practice-lab.html"
};

const DEFAULT_HARDWARE_ASSEMBLY_LAB = {
    introTitle: "ابدأ بتجميع الجهاز من الهيكل حتى بطاقة الشاشة",
    introText: "كل خطوة تقرّبك من فهم الجهاز كمنظومة مترابطة. اسحب القطعة إلى الإطار المتوهج المطابق لشكل موضعها، ثم راقب كيف تتحول إلى جزء فعلي داخل النموذج.",
    feedbackTitle: "كيف يعمل المختبر؟",
    feedbackText: "اسحب القطعة الصحيحة إلى الإطار المتوهج المطابق لشكلها، وكل تركيب صحيح سيكشف القطعة ويضيف بطاقة تعلّم جديدة إلى السجل الجانبي.",
    completeTitle: "اكتمل التجميع الأساسي",
    completeText: "جمعت الهيكل واللوحة الأم والطاقة والذاكرة وبطاقة الشاشة داخل نموذج واحد. الآن صار شكل الجهاز مرتبطاً بخطوات الصيانة والترقية لا بأسماء معزولة.",
    selectHint: "على الشاشات اللمسية اختر القطعة أولاً ثم اضغط على الإطار المتوهج المطابق لشكل موضعها داخل النموذج.",
    steps: [
        {
            id: "case",
            label: "الهيكل",
            inventoryLabel: "هيكل الجهاز",
            meshNames: ["Case / Chassis"],
            dropLabel: "ثبّت الهيكل أولاً",
            instruction: "ابدأ بالهيكل لأنه الإطار الذي يحمي بقية القطع وينظم مسار الهواء داخل الجهاز.",
            successText: "تم تثبيت الهيكل. الآن أصبح لديك إطار واضح تستقبل بداخله اللوحة الأم وبقية المكونات.",
            facts: [
                "الهيكل يحمي القطع الداخلية ويحدد مسار التهوية.",
                "اختيار هيكل مناسب يساعد على خفض الحرارة وتنظيم الكابلات.",
                "أي قرار صيانة يبدأ بفهم شكل الهيكل والوصول الآمن إلى الداخل."
            ],
            concept: "case-def",
            color: "#3a7bd5",
            position: [180, 120, 180],
            target: [0, 45, 0]
        },
        {
            id: "motherboard",
            label: "اللوحة الأم",
            inventoryLabel: "اللوحة الأم",
            meshNames: ["Motherboard"],
            dropLabel: "ضع اللوحة الأم في موضعها",
            instruction: "ثبّت اللوحة الأم لأنها نقطة الربط بين المعالج والذاكرة والطاقة والمنافذ الداخلية.",
            successText: "تم تثبيت اللوحة الأم في قلب الجهاز. من هنا تبدأ بقية القطع في الارتباط ببعضها بشكل منطقي.",
            facts: [
                "اللوحة الأم تربط جميع المكونات وتحدد منافذ التوسعة والتوافق.",
                "أي ترقية ناجحة تعتمد على معرفة نوع اللوحة والمنافذ المتاحة فيها.",
                "فحص اللوحة الأم خطوة أساسية قبل شراء RAM أو GPU جديد."
            ],
            concept: "motherboard-def",
            color: "#2ecc71",
            position: [130, 105, 165],
            target: [0, 54, 0]
        },
        {
            id: "psu",
            label: "مزود الطاقة",
            inventoryLabel: "مزود الطاقة",
            meshNames: ["Power Supply Unit"],
            dropLabel: "اربط مزود الطاقة بمكانه",
            instruction: "أضف مزود الطاقة الآن لأن استقرار التشغيل يبدأ من مصدر الطاقة المناسب لكل القطع.",
            successText: "تم تركيب مزود الطاقة. وهذا يربط خطوة التجميع مباشرة بفكرة الحماية من الانقطاع والتذبذب الكهربائي.",
            facts: [
                "مزود الطاقة يوزع الكهرباء على كل القطع الداخلية.",
                "قدرة غير كافية أو غير مستقرة قد تسبب انطفاءً مفاجئاً أو تلفاً تدريجياً.",
                "الحماية عبر UPS أو منظم فولتية تقلل مخاطر الأعطال الكهربائية."
            ],
            concept: "psu-def",
            color: "#e74c3c",
            position: [-190, 100, 155],
            target: [0, 42, 0]
        },
        {
            id: "ram",
            label: "الذاكرة RAM",
            inventoryLabel: "ذواكر RAM",
            meshNames: ["RAM Sticks", "RAM Sticks.001"],
            dropLabel: "ركّب الذواكر في الشقوق الصحيحة",
            instruction: "ثبّت الذواكر بعد ذلك، لأنها مسؤولة عن سرعة تعدد المهام وسلاسة التشغيل.",
            successText: "تم تركيب الذواكر معاً كوحدة تعليمية واحدة، وهذا يوضح أن الترقية الجيدة تعتمد على التوافق قبل السعة فقط.",
            facts: [
                "زيادة RAM تحسن تعدد المهام لكنها يجب أن توافق اللوحة الأم.",
                "عدم التوافق في النوع أو السرعة قد يمنع الإقلاع أو يسبب عدم استقرار.",
                "التعامل مع الذواكر يجب أن يتم بحذر ومع حماية من الكهرباء الساكنة."
            ],
            concept: "ram-def",
            color: "#34495e",
            position: [105, 150, 130],
            target: [0, 68, 0]
        },
        {
            id: "gpu",
            label: "بطاقة الشاشة",
            inventoryLabel: "بطاقة الشاشة GPU",
            meshNames: ["GPU"],
            dropLabel: "أدخل بطاقة الشاشة في المنفذ الصحيح",
            instruction: "اختم التجميع ببطاقة الشاشة لأنها مثال واضح على أن كل ترقية يجب أن تراجع المنفذ والطاقة والحجم المتاح داخل الهيكل.",
            successText: "تم تركيب بطاقة الشاشة. هكذا يكتمل خط التجميع الأساسي من الهيكل إلى قرار الترقية المدروس.",
            facts: [
                "بطاقة الشاشة تحتاج منفذ توسعة مناسباً وطاقة كافية من PSU.",
                "ليست كل ترقية رسومية مناسبة لكل هيكل أو لوحة أم.",
                "قرار الترقية الصحيح يعالج حاجة فعلية ولا يعتمد على القوة النظرية فقط."
            ],
            concept: "upgrade-decision",
            color: "#2c3e50",
            position: [170, 118, 80],
            target: [0, 58, 0]
        }
    ]
};

const CONCEPT_POPUPS = {
    "maintenance-def": {
        icon: "🔧",
        title: "ما هي الصيانة؟",
        text: "الصيانة هي مجموعة إجراءات منظمة تحافظ على الحاسوب في حالة عمل جيدة، تحسن أداءه، وتساعد على علاج مشكلاته عند الحاجة. تشمل العتاد (القطع المادية) والبرمجيات (نظام التشغيل والتطبيقات).",
        tags: ["إجراءات وقائية", "تحسين الأداء", "علاج المشكلات"]
    },
    "preventive-maintenance": {
        icon: "🛡️",
        title: "الصيانة الوقائية",
        text: "إجراءات دورية تمنع الخطأ قبل ظهوره. أمثلة: تنظيف الجهاز، فحص الفيروسات، تحديث النظام، والنسخ الاحتياطي المنتظم. هدفها منع المشكلة قبل حدوثها.",
        tags: ["منع الأعطال", "فحص دوري", "تنظيف"]
    },
    "corrective-maintenance": {
        icon: "🔨",
        title: "الصيانة العلاجية",
        text: "تبدأ بعد ظهور الخلل وتهدف إلى تشخيص السبب ثم اختيار الحل المناسب. الفرق الجوهري: نعالج السبب لا الأعراض فقط.",
        tags: ["تشخيص", "علاج السبب", "حل المشكلات"]
    },
    "heat-factor": {
        icon: "🌡️",
        title: "الحرارة وتأثيرها",
        text: "ترتفع الحرارة بسبب الغبار أو سد فتحات التهوية. الأعراض: بطء الجهاز، توقف مفاجئ، صوت مروحة عالٍ. الحل يبدأ من إزالة السبب لا تجاهل العرض.",
        tags: ["تهوية", "غبار", "أعراض حرارية"]
    },
    "humidity-factor": {
        icon: "💧",
        title: "الرطوبة",
        text: "البيئة غير المعتدلة تؤثر في سلامة الدوائر والأجزاء الحساسة. يجب وضع الجهاز في مكان مناسب وجاف لتجنب التلف.",
        tags: ["بيئة جافة", "حماية الدوائر"]
    },
    "dust-factor": {
        icon: "🌫️",
        title: "الغبار",
        text: "يتراكم داخل الهيكل وحول الفتحات فيعيق الهواء ويرفع الحرارة. استخدم بخاخ الهواء المضغوط أو قاعدة تبرع عند الحاجة.",
        tags: ["تنظيف", "هواء مضغوط", "تهوية"]
    },
    "magnetic-factor": {
        icon: "🧲",
        title: "القوى المغناطيسية",
        text: "وجود مصادر مغناطيسية قوية قرب الجهاز أو وسائط التخزين ليس آمناً، خصوصاً عند التعامل مع بيانات مهمة.",
        tags: ["حماية البيانات", "تخزين آمن"]
    },
    "power-safety": {
        icon: "⚡",
        title: "الطاقة الآمنة",
        text: "مزود الطاقة يغذي جميع المكونات. تعطله يسبب اهتزاز الشاشة أو انطفاء الجهاز. استخدم منظم فولتية أو UPS للحماية.",
        tags: ["UPS", "منظم فولتية", "مزود طاقة"]
    },
    "upgrade-decision": {
        icon: "⬆️",
        title: "قرار الترقية",
        text: "أفضل ترقية تعالج الحاجة وتناسب الجهاز. افحص التوافق مع اللوحة الأم والمنافذ والطاقة قبل الشراء. ارتدِ سواراً مضاداً للكهرباء الساكنة.",
        tags: ["توافق", "لوحة أم", "سلامة"]
    },
    "disk-maintenance": {
        icon: "💾",
        title: "صيانة الأقراص",
        text: "تشمل Defragmentation (إعادة تنظيم الملفات)، Disk Cleanup (حذف غير المهم)، وأدوات مثل CCleaner. الهدف: مساحة أفضل وأداء أسرع.",
        tags: ["تجزئة", "تنظيف", "تنظيم"]
    },
    "software-license": {
        icon: "📜",
        title: "رخصة البرمجيات",
        text: "وثيقة قانونية تمنح حق الاستخدام وتحدد الشروط. أنواعها: الملكية العامة (حرية كاملة)، الحرة ومفتوحة المصدر (تعديل الشفرة)، والتجارية (استخدام مقابل رسوم).",
        tags: ["قانوني", "ملكية فكرية", "أنواع الرخص"]
    },
    "restore-point": {
        icon: "🔄",
        title: "نقطة الاستعادة",
        text: "شبكة أمان تسجل حالة النظام قبل التغييرات الكبيرة. أنشئها قبل التحديث أو تثبيت التعريفات. المسار: Control Panel → System Protection.",
        tags: ["System Protection", "رجوع آمن", "قبل التحديث"]
    },
    "case-def": {
        icon: "🖥️",
        title: "هيكل الجهاز",
        text: "الهيكل (Case) يحمي المكونات الداخلية ويوفر التهوية. اختيار هيكل جيد يحسن airflow ويخفض الحرارة.",
        tags: ["هيكل", "تبريد", "تهوية"]
    },
    "motherboard-def": {
        icon: "🔌",
        title: "اللوحة الأم",
        text: "اللوحة الأم (Motherboard) توصل جميع القطع ببعضها. تتضمن شرائح وإضافات ومنافذ مختلفة.",
        tags: ["لوحة أم", "معالج", "ذاكرة"]
    },
    "cooling-def": {
        icon: "❄️",
        title: "نظام التبريد",
        text: "يختلف بينair cooling و water cooling. المراوح تسحب الهواء الساخن خارج الهيكل.",
        tags: ["مروحة", "مشتت", "حرارة"]
    },
    "airflow-def": {
        icon: "💨",
        title: "تدفق الهواء",
        text: "تدفق الهواء الصحيح يدخل من الأمام ويخرج من الخلف. الفتحات المسدودة ترفع الحرارة بشكل كبير.",
        tags: ["تهوية", "غبار", "حرارة"]
    },
    "psu-def": {
        icon: "⚡",
        title: "مزود الطاقة",
        text: "مزود الطاقة (PSU) يحول التيار المتردد إلى مستمر ويوزعه على المكونات. قدرة كافية ضرورية للاستقرار.",
        tags: ["طاقة", "فولت", "واط"]
    },
    "power-def": {
        icon: "🔋",
        title: "الطاقة الكهربائية",
        text: "استقرار الطاقة يمنع إعادة التشغيل المفاجئ. استخدام UPS يحمي من انقطاع الكهرباء.",
        tags: ["UPS", "استقرار", "حماية"]
    },
    "ram-def": {
        icon: "📊",
        title: "الذاكرة RAM",
        text: "الذاكرة العشوائية تخزن البيانات مؤقتاً للتشغيل السريع. مزيد من RAM يعني أداء أفضل.",
        tags: ["ذاكرة", "سعة", "أداء"]
    },
    "performance-tips": {
        icon: "🚀",
        title: "تحسين الكفاءة",
        text: "حدّث عبر Windows Update، راجع عناصر الإقلاع في Task Manager، واحذف التطبيقات غير المستخدمة عبر Uninstall a program.",
        tags: ["تحديث", "إقلاع", "إزالة تطبيقات"]
    },
    "system-security": {
        icon: "🔒",
        title: "أمن النظام",
        text: "يعني حماية الخصوصية وتقييد الدخول إلى الجهاز أو الحساب. يمكن استخدام كلمة مرور أو وسائل حيوية مثل البصمة والوجه.",
        tags: ["خصوصية", "تقييد الدخول", "مصادقة"]
    },
    "password-setup": {
        icon: "🔑",
        title: "إعداد كلمة المرور",
        text: "المسار: Settings → Accounts → Sign-in Options. أضف تلميحاً يساعد على التذكر من غير كشف كلمة المرور نفسها.",
        tags: ["Settings", "Accounts", "تلميح"]
    },
    "backup-strategy": {
        icon: "☁️",
        title: "النسخ الاحتياطي",
        text: "اجمع بين نسخة محلية (قرص خارجي، File History) ونسخة سحابية (Google Drive، OneDrive، Dropbox). نسختان في مكانين أفضل من واحدة.",
        tags: ["محلي", "سحابي", "File History"]
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
                autoRotateSpeed: 0.005,
                bobAmount: 1.5,
                bobSpeed: 0.0015,
                focusTransitionMs: 760,
                focusPulseMs: 480
            },
            assemblyLab: DEFAULT_HARDWARE_ASSEMBLY_LAB
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
    if (!pageId) return {};
    return SITE_CONFIG.pages?.[pageId] || {};
}

function getMotionConfig() {
    return SITE_CONFIG.global?.motion || {};
}

function getHardwareAssemblyConfig() {
    return getPageConfig("hardware").assemblyLab || DEFAULT_HARDWARE_ASSEMBLY_LAB;
}

// Legacy compatibility for the retired focus-based viewer.
const MODEL_FOCUS_PRESETS = {
    overview: {
        title: "",
        text: "",
        points: []
    }
};

function getHardwareFocusPresets() {
    return MODEL_FOCUS_PRESETS;
}

function normalizeMeshName(name = "") {
    return String(name)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, " ")
        .trim();
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
        alerts: ["غبار خفيف قرب المروحة", "الحرارة أعلى من الطبيعي", "لا يوجد توقف فعلي حتى الآن"],
        metrics: [
            { id: "heat", label: "الحرارة", value: 68, direction: "lower", note: "انخفاضها يعني أن الضغط الحراري تحت السيطرة." },
            { id: "airflow", label: "تدفق الهواء", value: 52, direction: "higher", note: "ارتفاعه يساعد الجهاز على العمل بثبات أطول." },
            { id: "stability", label: "الاستقرار", value: 81, direction: "higher", note: "الاستقرار جيد حالياً لكنه سيتراجع مع الإهمال." },
            { id: "dust", label: "تراكم الغبار", value: 61, direction: "lower", note: "كلما انخفض هذا المؤشر كان مسار الهواء أوضح." }
        ],
        actions: [
            {
                id: "clean-fans", label: "تنظيف المراوح", description: "إزالة الغبار من نقطة الخطر الأولى قبل أن يختنق الهواء.",
                effects: { heat: -20, airflow: 18, stability: 7, dust: -26 },
                alerts: ["تم فتح مسار الهواء", "انخفض الغبار حول المراوح", "المؤشر الحراري عاد للمنطقة الآمنة"],
                feedbackTitle: "نتيجة الإجراء الوقائي",
                feedbackText: "تنظيف المراوح خفّض الحرارة ورفع كفاءة التهوية لأن السبب تمت معالجته قبل أن يصبح عطلاً.",
                resultTone: "good"
            },
            {
                id: "organize-case", label: "تنظيم الكابلات", description: "تحسين مسار الهواء وتقليل الفوضى داخل الهيكل.",
                effects: { heat: -9, airflow: 15, stability: 6, dust: -6 },
                alerts: ["الكابلات لم تعد تسد مجرى الهواء", "حركة الهواء أصبحت أكثر سلاسة", "الخطر الحراري انخفض جزئياً"],
                feedbackTitle: "تنظيم داخلي أفضل",
                feedbackText: "هذا الإجراء لا يصلح كل شيء وحده، لكنه يرفع التهوية ويمنع تراكم مشكلة أكبر لاحقاً.",
                resultTone: "warning"
            },
            {
                id: "schedule-check", label: "جدولة فحص دوري", description: "تحويل الوقاية من رد فعل مؤقت إلى عادة صيانة منتظمة.",
                effects: { heat: -6, airflow: 6, stability: 12, dust: -4 },
                alerts: ["تم تثبيت روتين متابعة", "فرصة تجاهل المؤشرات انخفضت", "الاستقرار المستقبلي أصبح أعلى"],
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
        alerts: ["استجابة النظام بطيئة", "تجمّد متكرر أثناء العمل", "يوجد عطل واضح للمستخدم"],
        metrics: [
            { id: "response", label: "سرعة الاستجابة", value: 34, direction: "higher", note: "كلما ارتفع هذا المؤشر شعر المستخدم بتحسن مباشر." },
            { id: "stability", label: "استقرار التشغيل", value: 28, direction: "higher", note: "الاستقرار المنخفض يعني أن المشكلة ما زالت تعود." },
            { id: "heat", label: "الحرارة", value: 79, direction: "lower", note: "الحرارة المرتفعة هنا أحد أعراض الضغط الزائد." },
            { id: "errors", label: "حمل الأخطاء", value: 72, direction: "lower", note: "كلما انخفض هذا المؤشر قلّ تكرار الرسائل والتوقفات." }
        ],
        actions: [
            {
                id: "reduce-load", label: "إيقاف الحمل الزائد", description: "تقليل البرامج أو العمليات التي تدفع الجهاز إلى حافة التوقف.",
                effects: { response: 18, stability: 12, heat: -11, errors: -8 },
                alerts: ["تم خفض الضغط المباشر على الجهاز", "الاستجابة تحسنت جزئياً", "ما زال السبب الأساسي يحتاج متابعة"],
                feedbackTitle: "تحسن أولي",
                feedbackText: "خفض الحمل أعاد بعض الاستقرار فوراً، لكنه خطوة علاجية أولى لا تكفي وحدها إذا كان السبب البنيوي ما زال موجوداً.",
                resultTone: "warning"
            },
            {
                id: "remove-cause", label: "إزالة السبب المباشر", description: "حذف التطبيق أو العامل الذي تسبب في التعطل المتكرر.",
                effects: { response: 27, stability: 24, heat: -6, errors: -24 },
                alerts: ["العامل المسبب للعطل تم عزله", "تكرار الأخطاء انخفض بوضوح", "الاستقرار عاد إلى مستوى مقبول"],
                feedbackTitle: "علاج السبب لا العرض",
                feedbackText: "الفرق هنا جوهري: الجهاز لم يتحسن لأننا أخفينا العطل، بل لأننا أزلنا المصدر الذي كان يسببه.",
                resultTone: "good"
            },
            {
                id: "repair-system", label: "فحص وإصلاح ملفات النظام", description: "معالجة الخلل الذي يبقي الأعطال متكررة حتى بعد إعادة التشغيل.",
                effects: { response: 14, stability: 21, heat: -4, errors: -19 },
                alerts: ["تم إصلاح جزء من الخلل البرمجي", "الأعطال المتكررة تراجعت", "الجهاز يحتاج مراقبة بعد الإصلاح"],
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
        alerts: ["السبب غير مؤكد بعد", "التسرع قد يضيع الوقت والمال", "يجب جمع مؤشرات قبل اتخاذ القرار"],
        metrics: [
            { id: "clarity", label: "وضوح الأعراض", value: 36, direction: "higher", note: "كلما ارتفع هذا المؤشر أصبح الوصف أقرب للسبب الحقيقي." },
            { id: "confidence", label: "ثقة القرار", value: 24, direction: "higher", note: "يرتفع عندما تتحول الملاحظة إلى دليل يمكن اختباره." },
            { id: "noise", label: "فوضى الاحتمالات", value: 74, direction: "lower", note: "الانخفاض هنا يعني أنك تستبعد الفرضيات غير المهمة." },
            { id: "rush", label: "خطر التسرع", value: 68, direction: "lower", note: "كلما انخفض أصبح قرار الإصلاح أكثر عقلانية." }
        ],
        actions: [
            {
                id: "record-symptoms", label: "تسجيل العرض بدقة", description: "تحويل الشكوى العامة إلى ملاحظة يمكن تتبعها واختبارها.",
                effects: { clarity: 22, confidence: 10, noise: -12, rush: -8 },
                alerts: ["الوصف أصبح أدق من مجرد كلمة بطيء", "بعض الفرضيات الضعيفة سقطت", "التشخيص أصبح أقرب للمنهجية"],
                feedbackTitle: "من الملاحظة إلى الدليل",
                feedbackText: "عندما تصف العرض بدقة، فأنت لا تضيف كلاماً أكثر فقط، بل تقلل دائرة الاحتمالات التي ستضيع وقت الفحص.",
                resultTone: "analysis"
            },
            {
                id: "isolate-variables", label: "عزل السبب المحتمل", description: "استبعاد التغييرات والعوامل المحيطة لاختبار فرضية واحدة في كل مرة.",
                effects: { clarity: 8, confidence: 21, noise: -20, rush: -12 },
                alerts: ["تم تقليل عدد الفرضيات المفتوحة", "الاختبار صار مركزاً على سبب واحد", "إمكانية الخطأ في القرار انخفضت"],
                feedbackTitle: "تضييق دائرة الاحتمال",
                feedbackText: "عزل المتغيرات يمنع خلط الأسباب معاً، ولذلك ترتفع ثقة القرار حتى لو لم يتم الإصلاح بعد.",
                resultTone: "analysis"
            },
            {
                id: "run-safe-test", label: "تنفيذ اختبار آمن", description: "تشغيل خطوة اختبارية لا تغيّر الجهاز جذرياً لكنها تكشف مصدر المشكلة.",
                effects: { clarity: 14, confidence: 26, noise: -22, rush: -19 },
                alerts: ["نتيجة الاختبار وجهت القرار", "المشكلة أصبحت قابلة للتصنيف", "قرار الإصلاح صار مبنياً على دليل"],
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
    if (health >= 75) return "good";
    if (health >= 45) return "warning";
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
            const text = link.textContent;
            link.innerHTML = `<span>${text}</span>`;
        });
    }

    if (!nav || !toggle) return;

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.classList.toggle("is-active", isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.classList.remove("is-active");
        });
    });
}

function markVisitedPage() {
    const pageId = document.body.dataset.page;
    if (!pageId) return;

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
                triggers.forEach((item) => item.classList.toggle("is-active", item === trigger));
                panels.forEach((panel) => panel.classList.toggle("is-active", panel.id === targetId));
            });
        });
    });
}

function setupAnswers() {
    document.querySelectorAll(".quiz-card").forEach((quizCard) => {
        const buttons = quizCard.querySelectorAll("[data-answer]");
        const feedback = quizCard.querySelector(".answer-feedback");

        buttons.forEach((button) => {
            const text = button.textContent;
            button.innerHTML = `<span>${text}</span>`;

            button.addEventListener("click", () => {
                const isCorrect = button.dataset.correct === "true";
                const message = button.dataset.feedback || "";

                buttons.forEach((item) => item.classList.remove("is-correct", "is-wrong"));
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
    if (password.length >= 8) score += 25;
    if (password.length >= 12) score += 20;
    if (/[a-zA-Z]/.test(password) && /\d/.test(password)) score += 20;
    if (/[!@#$%^&*()_\-+=[\]{};:'"\\|,.<>/?]/.test(password)) score += 20;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 15;

    const normalized = password.toLowerCase();
    const weakPattern = ["123", "password", "admin", "school", "qwerty"].some((item) => normalized.includes(item));
    if (weakPattern) score = Math.max(0, score - 25);

    return Math.min(100, score);
}

function setupPasswordMeter() {
    const input = document.getElementById("password-input");
    const fill = document.getElementById("password-strength-fill");
    const label = document.getElementById("password-strength-label");
    const text = document.getElementById("password-strength-text");

    if (!input || !fill || !label || !text) return;

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
        } else if (score >= 55) {
            label.textContent = "متوسطة";
            text.textContent = "ما زالت تحتاج طولاً أو تنوعاً أكبر حتى تصبح أكثر أماناً.";
        } else {
            label.textContent = "ضعيفة";
            text.textContent = "هذه الصيغة سهلة التخمين أو قصيرة أكثر من اللازم.";
        }
    };

    input.addEventListener("input", render);
    render();
}

function setElementContent(id, value, useMarkup = false) {
    if (typeof value !== "string") return;
    const element = document.getElementById(id);
    if (!element) return;
    if (useMarkup) {
        element.innerHTML = value;
        return;
    }
    element.textContent = value;
}

function setLinkContent(id, label, href) {
    const element = document.getElementById(id);
    if (!element) return;
    if (typeof label === "string") element.textContent = label;
    if (typeof href === "string" && href) element.setAttribute("href", href);
}

function setSectionVisibility(sectionId, isVisible) {
    const section = document.getElementById(sectionId);
    if (!section || typeof isVisible !== "boolean") return;
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
}

function setupPageConfig() {
    applyMotionConfig();
    if (document.body?.dataset.page === "hardware") setupHardwarePageConfig();
}

function setupRevealAnimation() {
    const items = document.querySelectorAll("[data-reveal]");
    const motion = getMotionConfig();
    const staggerStep = Math.max(0, Number(motion.staggerStepMs) || 70);

    if (!items.length) return;

    items.forEach((item, index) => {
        item.style.setProperty("--reveal-delay", `${index * staggerStep}ms`);
    });

    if (typeof IntersectionObserver === "undefined") {
        items.forEach((item) => item.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
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

    if (!root || !modeContainer || !actionContainer || !metricContainer || !feedback || !modeLabel || !title || !text || !alerts) return;

    let currentState = createIntroSimulationState("preventive");

    const render = () => {
        const mode = INTRO_SIMULATION_MODES[currentState.modeId];

        root.dataset.simTone = currentState.tone;
        modeLabel.textContent = mode.modeLabel;
        title.textContent = mode.title;
        text.textContent = mode.text;

        alerts.innerHTML = currentState.alerts.map((item) => `<span class="sim-alert">${item}</span>`).join("");

        modeContainer.innerHTML = Object.entries(INTRO_SIMULATION_MODES)
            .map(([modeId, item]) => `
                <button class="sim-mode-btn ${modeId === currentState.modeId ? "is-active" : ""}" type="button" data-intro-mode="${modeId}">
                    <span>${item.label}</span>
                </button>
            `).join("");

        metricContainer.innerHTML = currentState.metrics.map((metric) => `
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
        `).join("");

        actionContainer.innerHTML = mode.actions.map((action) => {
            const isUsed = currentState.appliedActions.includes(action.id);
            return `
                <button class="sim-action-btn" type="button" data-intro-action="${action.id}" ${isUsed ? "disabled" : ""}>
                    <strong>${action.label}</strong>
                    <span>${action.description}</span>
                </button>
            `;
        }).join("");

        feedback.innerHTML = `
            <strong>${currentState.feedbackTitle}</strong>
            <p>${currentState.feedbackText}</p>
        `;
    };

    modeContainer.addEventListener("click", (event) => {
        const button = event.target.closest("[data-intro-mode]");
        if (!button) return;
        const modeId = button.dataset.introMode;
        if (!INTRO_SIMULATION_MODES[modeId] || modeId === currentState.modeId) return;
        currentState = createIntroSimulationState(modeId);
        render();
    });

    actionContainer.addEventListener("click", (event) => {
        const button = event.target.closest("[data-intro-action]");
        if (!button || button.disabled) return;
        const mode = INTRO_SIMULATION_MODES[currentState.modeId];
        const action = mode.actions.find((item) => item.id === button.dataset.introAction);
        if (!action) return;

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

function setLegacyViewerFocusContent(focusId) {
    const presets = getHardwareFocusPresets();
    const preset = presets[focusId] ?? presets.overview ?? MODEL_FOCUS_PRESETS.overview;
    const title = document.getElementById("viewer-focus-title");
    const text = document.getElementById("viewer-focus-text");
    const points = document.getElementById("viewer-focus-points");

    if (title) title.textContent = preset.title;
    if (text) text.textContent = preset.text;
    if (points) {
        const pointList = Array.isArray(preset.points) ? preset.points : [];
        points.innerHTML = pointList.map((point) => `<div class="mini-point">${point}</div>`).join("");
    }
}

async function setupLegacyModelViewer() {
    const mount = document.querySelector("[data-model-viewer]");
    
    if (!mount) {
        console.log("No model viewer element found");
        return;
    }

    mount.innerHTML = `<div class="viewer-loading">جارٍ تحميل النموذج ثلاثي الأبعاد...</div>`;
    setLegacyViewerFocusContent("overview");

    const focusPresets = getHardwareFocusPresets();

    try {
        const THREE = await import("three");
        const { OrbitControls } = await import("three/addons/controls/OrbitControls.js");
        const { FBXLoader } = await import("three/addons/loaders/FBXLoader.js");

        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#eef5fb");

        const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio || 1);
        renderer.outputColorSpace = THREE.SRGBColorSpace;

        mount.innerHTML = "";
        mount.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.08;

        scene.add(new THREE.AmbientLight("#ffffff", 1.5));
        const keyLight = new THREE.DirectionalLight("#ffffff", 2);
        keyLight.position.set(100, 200, 150);
        scene.add(keyLight);
        scene.add(new THREE.DirectionalLight("#c9e4ff", 1).translateX(-100).translateY(100).translateZ(-100));

        const grid = new THREE.GridHelper(2000, 20, "#c8d8ea", "#e4edf6");
        scene.add(grid);

        const loader = new FBXLoader();
        console.log("Loading FBX model...");

        let loadingDone = false;
        const model = await new Promise((resolve, reject) => {
            loader.load("models/PC.fbx",
                (obj) => { loadingDone = true; resolve(obj); },
                (prog) => {
                    if (loadingDone) return;
                    const el = mount.querySelector(".viewer-loading");
                    if (el && prog.total > 0) {
                        const pct = Math.round((prog.loaded / prog.total) * 100);
                        el.textContent = `جارٍ تحميل النموذج... ${pct}%`;
                    }
                },
                (error) => {
                    console.error("FBX Load Error:", error);
                    reject(error);
                }
            );
        });

        // Check original materials
        let meshCount = 0;
        let materialsInfo = [];
        
        model.traverse((child) => {
            if (child.isMesh) {
                meshCount++;
                if (child.material) {
                    if (Array.isArray(child.material)) {
                        materialsInfo.push(`Mesh has ${child.material.length} materials`);
                    } else {
                        materialsInfo.push(`Mesh: ${child.material.type || 'Material'}`);
                    }
                }
            }
        });
        console.log("Model loaded - Total meshes:", meshCount);
        console.log("Materials info:", materialsInfo);
        
        console.log("%c=== ALL MESHES IN FBX FILE ===", "color: #3a7bd5; font-size: 16px; font-weight: bold;");
        let meshList = [];
        model.traverse((child) => {
            if (child.isMesh) {
                const pos = new THREE.Vector3();
                child.getWorldPosition(pos);
                const box = new THREE.Box3().setFromObject(child);
                const size = box.getSize(new THREE.Vector3());
                meshList.push({
                    name: child.name || "(unnamed)",
                    position: { x: pos.x.toFixed(1), y: pos.y.toFixed(1), z: pos.z.toFixed(1) },
                    size: { w: size.x.toFixed(1), h: size.y.toFixed(1), d: size.z.toFixed(1) }
                });
            }
        });
        console.table(meshList, ["name", "position", "size"]);
        
        console.log("%c=== COPY-FRIENDLY LIST ===", "color: #2ecc71; font-size: 14px; font-weight: bold;");
        const names = meshList.map(m => m.name);
        console.log(names.join("\n"));

        // Use wrapper group for proper centering
        const wrapper = new THREE.Group();
        wrapper.add(model);
        scene.add(wrapper);

        // Get bounding sphere for camera
        const box = new THREE.Box3().setFromObject(wrapper);
        const sphere = box.getBoundingSphere(new THREE.Sphere());
        let radius = sphere.radius;
        let center = sphere.center;

        console.log("Bounding box:", box.min.x.toFixed(1), box.min.y.toFixed(1), box.min.z.toFixed(1), "to", box.max.x.toFixed(1), box.max.y.toFixed(1), box.max.z.toFixed(1));

        // Handle edge cases
        if (radius === 0 || !isFinite(radius)) {
            radius = 100;
            center = new THREE.Vector3(0, 0, 0);
            console.warn("Invalid bounding sphere, using defaults");
        }

        // Center and normalize the model scale
        const maxDim = Math.max(box.max.x - box.min.x, box.max.y - box.min.y, box.max.z - box.min.z);
        const targetSize = 200;
        const scale = targetSize / maxDim;
        
        // Center horizontally but keep bottom on ground (y=0)
        const width = box.max.x - box.min.x;
        const height = box.max.y - box.min.y;
        const depth = box.max.z - box.min.z;
        
        wrapper.position.set(-width/2, -box.min.y, -depth/2);
        wrapper.scale.setScalar(scale);
        
        // Recalculate after scaling
        const newBox = new THREE.Box3().setFromObject(wrapper);
        const newSphere = newBox.getBoundingSphere(new THREE.Sphere());
        radius = newSphere.radius;
        center = newSphere.center;

        console.log("=== MODEL GEOMETRY ===");
        console.log("Size:", width.toFixed(1), "x", height.toFixed(1), "x", depth.toFixed(1));
        console.log("Scale:", scale.toFixed(4));
        console.log("Scaled height:", (height * scale).toFixed(1));

        // Calculate distance and ensure camera is positioned to see the model
        const dist = radius * 2.5;
        camera.position.set(dist * 0.5, height * scale * 0.5 + 20, dist * 0.7);
        camera.near = Math.max(0.1, radius * 0.001);
        camera.far = Math.max(radius * 10, radius * 100);
        camera.updateProjectionMatrix();
        controls.target.set(0, height * scale * 0.4, 0);
        controls.minDistance = Math.max(0.1, radius * 0.3);
        controls.maxDistance = Math.max(radius * 5, radius * 15);
        controls.update();

        console.log("Camera at:", camera.position, "looking at:", center);

        // Hotspots
        const hotspotGroup = new THREE.Group();
        scene.add(hotspotGroup);
        const hotspotMeshes = [];
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        function createLabelSprite(text, color) {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = 512; canvas.height = 80;
            ctx.clearRect(0, 0, 512, 80);
            ctx.font = "bold 28px Segoe UI, Tahoma, sans-serif";
            ctx.textAlign = "center"; ctx.textBaseline = "middle";
            const m = ctx.measureText(text);
            const bw = Math.min(m.width + 48, 480);
            ctx.fillStyle = "rgba(255,255,255,0.92)";
            ctx.beginPath(); ctx.roundRect((512-bw)/2, 14, bw, 52, 14); ctx.fill();
            ctx.strokeStyle = color; ctx.lineWidth = 3;
            ctx.beginPath(); ctx.roundRect((512-bw)/2, 14, bw, 52, 14); ctx.stroke();
            ctx.fillStyle = color; ctx.fillText(text, 256, 40);
            const tex = new THREE.CanvasTexture(canvas);
            const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
            sprite.scale.set(radius * 0.6, radius * 0.094, 1);
            return sprite;
        }

        function clearHotspots() {
            model.traverse((child) => {
                if (child.isMesh && child.userData.isHighlighted) {
                    if (child.userData.originalMaterial) {
                        child.material = child.userData.originalMaterial;
                    }
                    if (child.userData.originalPosition) {
                        child.position.copy(child.userData.originalPosition);
                    }
                    child.userData.isHighlighted = false;
                    delete child.userData.concept;
                }
            });
            
            while (hotspotGroup.children.length) hotspotGroup.remove(hotspotGroup.children[0]);
            hotspotMeshes.length = 0;
        }

        function updateHotspots(focusId) {
            clearHotspots();
            const preset = focusPresets[focusId];
            if (!preset || !preset.hotspots) return;
            
            const b = new THREE.Box3().setFromObject(wrapper);
            const modelHeight = b.max.y - b.min.y;
            const modelCenter = new THREE.Vector3();
            b.getCenter(modelCenter);
            
            preset.hotspots.forEach((hs, i) => {
                let targetMesh = null;
                
                model.traverse((child) => {
                    if (child.isMesh && child.name === hs.meshName) targetMesh = child;
                });
                if (!targetMesh) {
                    model.traverse((child) => {
                        if (child.isMesh && child.name && child.name.startsWith(hs.meshName)) targetMesh = child;
                    });
                }
                if (!targetMesh) {
                    model.traverse((child) => {
                        if (child.isMesh && child.name && child.name.toLowerCase().includes(hs.meshName.toLowerCase())) targetMesh = child;
                    });
                }
                
                if (!targetMesh) {
                    console.warn(`⚠️ Hotspot "${hs.label}": mesh "${hs.meshName}" not found`);
                    return;
                }
                
                console.log(`✅ Highlighting "${targetMesh.name}" for "${hs.label}"`);
                
                if (!targetMesh.userData.originalMaterial) {
                    targetMesh.userData.originalMaterial = targetMesh.material;
                }
                if (!targetMesh.userData.originalPosition) {
                    targetMesh.userData.originalPosition = targetMesh.position.clone();
                }
                
                // Apply glow
                if (Array.isArray(targetMesh.material)) {
                    targetMesh.material = targetMesh.material.map(mat => {
                        const newMat = mat.clone();
                        newMat.emissive = new THREE.Color(hs.color);
                        newMat.emissiveIntensity = 0.8;
                        return newMat;
                    });
                } else {
                    const newMat = targetMesh.material.clone();
                    newMat.emissive = new THREE.Color(hs.color);
                    newMat.emissiveIntensity = 0.8;
                    targetMesh.material = newMat;
                }
                
                targetMesh.userData.hotspotColor = hs.color;
                targetMesh.userData.isHighlighted = true;
                
                // Move outward (static)
                const meshPos = new THREE.Vector3();
                targetMesh.getWorldPosition(meshPos);
                const direction = meshPos.clone().sub(modelCenter).normalize();
                const plugOutDistance = Math.max(modelHeight, b.max.x - b.min.x, b.max.z - b.min.z) * 0.15;
                targetMesh.position.add(direction.multiplyScalar(plugOutDistance));
                
                // Label
                const labelPos = meshPos.clone().add(direction.multiplyScalar(plugOutDistance));
                const label = createLabelSprite(hs.label, hs.color);
                label.position.copy(labelPos);
                label.position.y += modelHeight * 0.1;
                hotspotGroup.add(label);
                hotspotMeshes.push({ isLabel: true, meshRef: targetMesh, label });
                
                targetMesh.userData.concept = hs.concept;
            });
        }

        let focusTransition = null;
        const focusTransitionMs = 760;
        const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

        function applyFocus(focusId, immediate = false) {
            const preset = focusPresets[focusId] ?? focusPresets.overview;
            const pos = preset?.position || [4, 3, 5];
            const tgt = preset?.target || [0, 0, 0];
            const b = new THREE.Box3().setFromObject(wrapper);
            const c = b.getCenter(new THREE.Vector3());
            const nextPos = new THREE.Vector3(c.x + pos[0], c.y + pos[1], c.z + pos[2]);
            const nextTgt = new THREE.Vector3(c.x + tgt[0], c.y + tgt[1], c.z + tgt[2]);
            setLegacyViewerFocusContent(focusId);
            updateHotspots(focusId);
            
            if (immediate || prefersReducedMotion) {
                camera.position.copy(nextPos); controls.target.copy(nextTgt); controls.update();
                focusTransition = null;
            } else {
                focusTransition = { startTime: performance.now(), duration: focusTransitionMs, fromPosition: camera.position.clone(), fromTarget: controls.target.clone(), toPosition: nextPos, toTarget: nextTgt };
            }
        }

        const resize = () => {
            const w = mount.clientWidth, h = mount.clientHeight;
            if (w > 0 && h > 0) {
                renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
            }
        };
        resize();
        applyFocus("overview", true);

        const animate = (now = performance.now()) => {
            requestAnimationFrame(animate);
            if (focusTransition) {
                const p = Math.min(1, (now - focusTransition.startTime) / focusTransition.duration);
                const e = 1 - Math.pow(1 - p, 3);
                camera.position.lerpVectors(focusTransition.fromPosition, focusTransition.toPosition, e);
                controls.target.lerpVectors(focusTransition.fromTarget, focusTransition.toTarget, e);
                if (p >= 1) focusTransition = null;
            }
            hotspotMeshes.forEach((m) => {
                if (m.isLabel && m.label) {
                    const pulse = Math.sin(now * 0.004) * 0.15 + 0.85;
                    if (m.label.material) m.label.material.opacity = pulse;
                }
            });
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        mount.addEventListener("click", (e) => {
            const rect = mount.getBoundingClientRect();
            mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const highlightedMeshes = [];
            model.traverse((child) => {
                if (child.isMesh && child.userData.concept) highlightedMeshes.push(child);
            });
            const hits = raycaster.intersectObjects(highlightedMeshes, false);
            if (hits.length > 0 && hits[0].object.userData.concept && typeof window.openConceptPopup === "function") {
                window.openConceptPopup(hits[0].object.userData.concept);
            }
        });

        mount.addEventListener("mousemove", (e) => {
            const rect = mount.getBoundingClientRect();
            mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const highlightedMeshes = [];
            model.traverse((child) => {
                if (child.isMesh && child.userData.concept) highlightedMeshes.push(child);
            });
            mount.style.cursor = raycaster.intersectObjects(highlightedMeshes, false).length > 0 ? "pointer" : "grab";
        });

        if (typeof ResizeObserver !== "undefined") { new ResizeObserver(resize).observe(mount); }
        else { window.addEventListener("resize", resize); }

        document.querySelectorAll("[data-model-focus]").forEach((btn) => {
            btn.addEventListener("click", () => {
                document.querySelectorAll("[data-model-focus]").forEach(b => b.classList.toggle("is-active", b === btn));
                applyFocus(btn.dataset.modelFocus);
            });
        });

    } catch (error) {
        console.error("3D viewer error:", error);
        const mount = document.querySelector("[data-model-viewer]");
        if (mount) mount.innerHTML = `<div class="viewer-loading">تعذر تحميل النموذج ثلاثي الأبعاد.<br><small style="color:var(--danger)">${error.message}</small></div>`;
    }
}

function getAssemblyStepNumber(index) {
    return String(index + 1).padStart(2, "0");
}

function getAssemblyPartVisualMarkup(step) {
    const stepId = step?.id || "";

    switch (stepId) {
        case "case":
            return `
                <svg class="assembly-part-svg" viewBox="0 0 96 72" aria-hidden="true">
                    <rect x="22" y="8" width="38" height="56" rx="10" fill="currentColor" opacity="0.16"></rect>
                    <rect x="22" y="8" width="38" height="56" rx="10" fill="none" stroke="currentColor" stroke-width="3"></rect>
                    <circle cx="41" cy="27" r="10" fill="none" stroke="currentColor" stroke-width="3"></circle>
                    <circle cx="41" cy="47" r="10" fill="none" stroke="currentColor" stroke-width="3"></circle>
                    <path d="M64 20 H74 M64 30 H74 M64 40 H74 M64 50 H74" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
                </svg>
            `;
        case "motherboard":
            return `
                <svg class="assembly-part-svg" viewBox="0 0 96 72" aria-hidden="true">
                    <rect x="14" y="12" width="68" height="48" rx="8" fill="currentColor" opacity="0.15"></rect>
                    <rect x="14" y="12" width="68" height="48" rx="8" fill="none" stroke="currentColor" stroke-width="3"></rect>
                    <rect x="24" y="22" width="18" height="18" rx="4" fill="none" stroke="currentColor" stroke-width="3"></rect>
                    <rect x="48" y="22" width="24" height="8" rx="3" fill="currentColor" opacity="0.28"></rect>
                    <rect x="48" y="34" width="24" height="6" rx="3" fill="currentColor" opacity="0.22"></rect>
                    <path d="M24 48 H72" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
                </svg>
            `;
        case "psu":
            return `
                <svg class="assembly-part-svg" viewBox="0 0 96 72" aria-hidden="true">
                    <rect x="18" y="16" width="60" height="40" rx="8" fill="currentColor" opacity="0.15"></rect>
                    <rect x="18" y="16" width="60" height="40" rx="8" fill="none" stroke="currentColor" stroke-width="3"></rect>
                    <circle cx="40" cy="36" r="12" fill="none" stroke="currentColor" stroke-width="3"></circle>
                    <path d="M34 30 L46 42 M46 30 L34 42" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
                    <rect x="58" y="28" width="12" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="3"></rect>
                </svg>
            `;
        case "ram":
            return `
                <svg class="assembly-part-svg" viewBox="0 0 96 72" aria-hidden="true">
                    <rect x="18" y="22" width="24" height="28" rx="6" fill="currentColor" opacity="0.14"></rect>
                    <rect x="18" y="22" width="24" height="28" rx="6" fill="none" stroke="currentColor" stroke-width="3"></rect>
                    <rect x="54" y="18" width="24" height="32" rx="6" fill="currentColor" opacity="0.18"></rect>
                    <rect x="54" y="18" width="24" height="32" rx="6" fill="none" stroke="currentColor" stroke-width="3"></rect>
                    <path d="M22 54 H38 M58 54 H74" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
                </svg>
            `;
        case "gpu":
            return `
                <svg class="assembly-part-svg" viewBox="0 0 96 72" aria-hidden="true">
                    <rect x="12" y="22" width="62" height="28" rx="8" fill="currentColor" opacity="0.14"></rect>
                    <rect x="12" y="22" width="62" height="28" rx="8" fill="none" stroke="currentColor" stroke-width="3"></rect>
                    <circle cx="34" cy="36" r="8" fill="none" stroke="currentColor" stroke-width="3"></circle>
                    <circle cx="56" cy="36" r="8" fill="none" stroke="currentColor" stroke-width="3"></circle>
                    <path d="M78 28 V44 M84 28 V44" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
                </svg>
            `;
        default:
            return `
                <svg class="assembly-part-svg" viewBox="0 0 96 72" aria-hidden="true">
                    <rect x="18" y="16" width="60" height="40" rx="10" fill="currentColor" opacity="0.14"></rect>
                    <rect x="18" y="16" width="60" height="40" rx="10" fill="none" stroke="currentColor" stroke-width="3"></rect>
                </svg>
            `;
    }
}

async function setupModelViewer() {
    const mount = document.querySelector("[data-model-viewer]");
    if (!mount) return;

    const labSection = document.getElementById("hardware-model-lab");
    const targetLayer = document.getElementById("assembly-target-layer");
    const stepper = document.getElementById("assembly-stepper");
    const currentTitle = document.getElementById("assembly-current-title");
    const currentText = document.getElementById("assembly-current-text");
    const feedbackBox = document.getElementById("assembly-feedback");
    const feedbackTitle = document.getElementById("assembly-feedback-title");
    const feedbackText = document.getElementById("assembly-feedback-text");
    const partsList = document.getElementById("assembly-parts-list");
    const learningCards = document.getElementById("assembly-learning-cards");
    const mobileHint = document.getElementById("assembly-mobile-hint");
    const resetStepButton = document.getElementById("assembly-reset-step");
    const resetAllButton = document.getElementById("assembly-reset-all");
    const stageElement = mount.closest(".assembly-stage");
    const fullscreenToggles = Array.from(document.querySelectorAll("[data-assembly-fullscreen-toggle]")).filter((button, index, buttons) => {
        return button instanceof HTMLElement && buttons.indexOf(button) === index;
    });

    if (!targetLayer || !stepper || !currentTitle || !currentText || !feedbackBox || !feedbackTitle || !feedbackText || !partsList || !learningCards) {
        return;
    }

    const labConfig = getHardwareAssemblyConfig();
    const initialFeedback = {
        tone: "info",
        title: labConfig.feedbackTitle || "كيف يعمل المختبر؟",
        text: labConfig.feedbackText || "رتّب القطع بالترتيب، وكل تركيب صحيح سيكشف القطعة ويضيف بطاقة تعلّم جديدة إلى السجل الجانبي."
    };

    if (mobileHint && typeof labConfig.selectHint === "string") mobileHint.textContent = labConfig.selectHint;
    if (resetStepButton && typeof labConfig.resetStepLabel === "string") resetStepButton.textContent = labConfig.resetStepLabel;
    if (resetAllButton && typeof labConfig.resetAllLabel === "string") resetAllButton.textContent = labConfig.resetAllLabel;

    mount.innerHTML = `<div class="viewer-loading">جارٍ تحميل مختبر التجميع ثلاثي الأبعاد...</div>`;
    targetLayer.innerHTML = "";

    let state = {
        currentStepIndex: 0,
        placedParts: new Set(),
        selectedPartId: null,
        collectedCards: [],
        feedbackState: { ...initialFeedback },
        isCompleted: false
    };

    try {
        const THREE = await import("three");
        const { OrbitControls } = await import("three/addons/controls/OrbitControls.js");
        const { FBXLoader } = await import("three/addons/loaders/FBXLoader.js");

        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#eef5fb");

        const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setPixelRatio(window.devicePixelRatio || 1);
        renderer.outputColorSpace = THREE.SRGBColorSpace;

        mount.innerHTML = "";
        mount.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.08;
        controls.enablePan = false;
        controls.rotateSpeed = 0.76;
        controls.zoomSpeed = 0.9;
        controls.minPolarAngle = Math.PI * 0.16;
        controls.maxPolarAngle = Math.PI * 0.54;

        scene.add(new THREE.AmbientLight("#ffffff", 1.5));
        const keyLight = new THREE.DirectionalLight("#ffffff", 2.2);
        keyLight.position.set(120, 220, 180);
        scene.add(keyLight);
        const fillLight = new THREE.DirectionalLight("#c9e4ff", 1.1);
        fillLight.position.set(-120, 140, -120);
        scene.add(fillLight);

        const grid = new THREE.GridHelper(2000, 20, "#c8d8ea", "#e4edf6");
        const gridMaterials = Array.isArray(grid.material) ? grid.material : [grid.material];
        gridMaterials.forEach((material) => {
            material.transparent = true;
            material.opacity = 0.48;
        });
        scene.add(grid);

        const loader = new FBXLoader();
        const model = await new Promise((resolve, reject) => {
            loader.load("models/PC.fbx", resolve, undefined, reject);
        });

        const wrapper = new THREE.Group();
        wrapper.add(model);
        scene.add(wrapper);

        const initialBox = new THREE.Box3().setFromObject(wrapper);
        const width = initialBox.max.x - initialBox.min.x;
        const height = initialBox.max.y - initialBox.min.y;
        const depth = initialBox.max.z - initialBox.min.z;
        const maxDim = Math.max(width, height, depth) || 1;
        const targetSize = 200;
        const scale = targetSize / maxDim;

        wrapper.position.set(-width / 2, -initialBox.min.y, -depth / 2);
        wrapper.scale.setScalar(scale);

        const wrapperBox = new THREE.Box3().setFromObject(wrapper);
        const wrapperSize = wrapperBox.getSize(new THREE.Vector3());
        const wrapperCenter = wrapperBox.getCenter(new THREE.Vector3());
        const wrapperSphere = wrapperBox.getBoundingSphere(new THREE.Sphere());
        const radius = Math.max(wrapperSphere.radius, 1);
        grid.position.y = wrapperBox.min.y - 0.2;

        camera.position.set(wrapperCenter.x + radius * 1.35, wrapperCenter.y + wrapperSize.y * 0.72, wrapperCenter.z + radius * 1.25);
        camera.near = Math.max(0.1, radius * 0.01);
        camera.far = Math.max(radius * 20, 2500);
        camera.updateProjectionMatrix();
        controls.target.set(wrapperCenter.x, wrapperCenter.y + wrapperSize.y * 0.16, wrapperCenter.z);
        controls.minDistance = Math.max(45, radius * 0.45);
        controls.maxDistance = Math.max(520, radius * 6);
        controls.update();

        const allMeshes = [];
        model.traverse((child) => {
            if (!child.isMesh) return;
            child.userData.assemblyOriginalMaterial = child.material;
            child.userData.assemblyOriginalVisible = child.visible;
            allMeshes.push(child);
        });

        const resolveStepMeshes = (step) => {
            const resolved = [];
            const seen = new Set();
            const queries = (Array.isArray(step.meshNames) ? step.meshNames : [])
                .map((name) => normalizeMeshName(name))
                .filter(Boolean);

            allMeshes.forEach((mesh) => {
                const meshName = normalizeMeshName(mesh.name);
                if (!meshName) return;

                const isMatch = queries.some((query) => {
                    return meshName === query || meshName.startsWith(query) || meshName.includes(query) || query.includes(meshName);
                });

                if (isMatch && !seen.has(mesh.uuid)) {
                    seen.add(mesh.uuid);
                    resolved.push(mesh);
                }
            });

            return resolved;
        };

        const steps = (Array.isArray(labConfig.steps) ? labConfig.steps : []).map((step, index) => {
            const meshes = resolveStepMeshes(step);
            if (!meshes.length) return null;

            const box = new THREE.Box3();
            meshes.forEach((mesh) => box.expandByObject(mesh));
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            const anchor = center.clone();
            anchor.y = box.max.y + Math.max(12, size.y * 0.18);

            return {
                ...step,
                index,
                badge: getAssemblyStepNumber(index),
                meshes,
                box: box.clone(),
                center,
                size,
                anchor
            };
        }).filter(Boolean);

        if (!steps.length) {
            throw new Error("تعذر العثور على أجزاء التجميع داخل ملف PC.fbx.");
        }

        const stepById = new Map(steps.map((step) => [step.id, step]));
        const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
        const modelConfig = getPageConfig("hardware").modelLab || {};
        const focusTransitionMs = Math.max(320, Number(modelConfig.focusTransitionMs) || 760);

        let focusTransition = null;
        let activeTargetElement = null;
        let draggedPartId = null;
        let targetTone = "ready";
        let targetResetTimer = null;
        let highlightResetTimer = null;
        let dragPreviewElement = null;
        let pointerDragState = null;
        let suppressPartClickUntil = 0;
        let suppressPartClickId = null;
        let suppressTargetClickUntil = 0;

        const raycaster = new THREE.Raycaster();
        const pointer = new THREE.Vector2();
        const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
        const nowMs = () => (typeof performance !== "undefined" && typeof performance.now === "function" ? performance.now() : Date.now());

        const cloneMaterialWith = (material, mutator) => {
            if (Array.isArray(material)) {
                return material.map((part) => {
                    const clone = part.clone();
                    mutator(clone);
                    return clone;
                });
            }

            const clone = material.clone();
            mutator(clone);
            return clone;
        };

        const getActiveStep = () => state.isCompleted ? null : steps[state.currentStepIndex] || null;
        const setFeedbackState = (tone, title, text) => {
            state.feedbackState = { tone, title, text };
        };
        const setStageDropState = (isReady = false, isOver = false) => {
            if (!stageElement) return;
            stageElement.classList.toggle("is-drop-ready", isReady);
            stageElement.classList.toggle("is-drop-over", isReady && isOver);
        };

        const restoreStepMeshes = (step) => {
            step.meshes.forEach((mesh) => {
                mesh.visible = mesh.userData.assemblyOriginalVisible ?? true;
                mesh.material = mesh.userData.assemblyOriginalMaterial;
                mesh.userData.concept = step.concept;
            });
        };

        const ghostStepMeshes = (step, emphasis = false) => {
            step.meshes.forEach((mesh) => {
                const baseMaterial = mesh.userData.assemblyOriginalMaterial;
                const tintColor = new THREE.Color(step.color || "#cad5df");
                mesh.visible = true;
                mesh.material = cloneMaterialWith(baseMaterial, (mat) => {
                    if ("transparent" in mat) mat.transparent = true;
                    if ("opacity" in mat) mat.opacity = emphasis ? 0.22 : 0.08;
                    if ("depthWrite" in mat) mat.depthWrite = false;
                    if ("color" in mat && mat.color) {
                        const mixed = mat.color.clone().lerp(tintColor, emphasis ? 0.65 : 0.32);
                        mat.color.copy(mixed);
                    }
                    if ("emissive" in mat && mat.emissive) {
                        mat.emissive = tintColor.clone();
                        mat.emissiveIntensity = emphasis ? 0.4 : 0.08;
                    }
                });
                delete mesh.userData.concept;
            });
        };

        const applyAssemblyVisibility = () => {
            const activeStep = getActiveStep();

            steps.forEach((step) => {
                if (state.placedParts.has(step.id)) {
                    restoreStepMeshes(step);
                    return;
                }

                ghostStepMeshes(step, Boolean(activeStep && activeStep.id === step.id));
            });
        };

        const highlightPlacedStep = (step) => {
            if (!step) return;
            if (highlightResetTimer) clearTimeout(highlightResetTimer);

            step.meshes.forEach((mesh) => {
                const baseMaterial = mesh.userData.assemblyOriginalMaterial;
                mesh.material = cloneMaterialWith(baseMaterial, (mat) => {
                    if ("emissive" in mat && mat.emissive) {
                        mat.emissive = new THREE.Color(step.color || "#ffffff");
                        mat.emissiveIntensity = 0.85;
                    }
                });
            });

            highlightResetTimer = window.setTimeout(() => {
                applyAssemblyVisibility();
            }, 900);
        };

        const moveCameraToStep = (step, immediate = false) => {
            if (!step) return;
            const pos = Array.isArray(step.position) ? step.position : [180, 120, 180];
            const configuredTarget = Array.isArray(step.target) ? step.target : [0, 45, 0];
            const baseTarget = (step.center || wrapperCenter).clone();
            const targetLift = Math.max(6, (step.size?.y || 0) * 0.08);
            const targetNudge = new THREE.Vector3(
                (configuredTarget[0] || 0) * 0.1,
                (configuredTarget[1] || 0) * 0.16,
                (configuredTarget[2] || 0) * 0.1
            );
            const nextTarget = baseTarget.add(new THREE.Vector3(0, targetLift, 0)).add(targetNudge);
            const nextPosition = nextTarget.clone().add(new THREE.Vector3(pos[0], pos[1], pos[2]));

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
            const height = mount.clientHeight;
            if (width <= 0 || height <= 0) return;
            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        const projectWorldPoint = (worldPoint) => {
            const projected = worldPoint.clone().project(camera);
            const width = mount.clientWidth;
            const height = mount.clientHeight;
            if (!Number.isFinite(projected.x) || !Number.isFinite(projected.y) || !Number.isFinite(projected.z)) return null;
            return {
                x: (projected.x * 0.5 + 0.5) * width,
                y: (-projected.y * 0.5 + 0.5) * height,
                normalizedX: projected.x,
                normalizedY: projected.y,
                visible: projected.z > -1 && projected.z < 1
            };
        };

        const projectStepBounds = (step) => {
            if (!step?.box) return null;

            const { min, max } = step.box;
            const corners = [
                new THREE.Vector3(min.x, min.y, min.z),
                new THREE.Vector3(min.x, min.y, max.z),
                new THREE.Vector3(min.x, max.y, min.z),
                new THREE.Vector3(min.x, max.y, max.z),
                new THREE.Vector3(max.x, min.y, min.z),
                new THREE.Vector3(max.x, min.y, max.z),
                new THREE.Vector3(max.x, max.y, min.z),
                new THREE.Vector3(max.x, max.y, max.z)
            ];

            const points = corners
                .map((corner) => projectWorldPoint(corner))
                .filter((point) => point && point.visible);

            const centerPoint = projectWorldPoint(step.center || step.anchor);
            if (centerPoint && centerPoint.visible) points.push(centerPoint);
            if (!points.length) return null;

            const widthLimit = mount.clientWidth;
            const heightLimit = mount.clientHeight;
            const rawMinX = Math.min(...points.map((point) => point.x));
            const rawMaxX = Math.max(...points.map((point) => point.x));
            const rawMinY = Math.min(...points.map((point) => point.y));
            const rawMaxY = Math.max(...points.map((point) => point.y));
            const padding = Math.max(14, Math.min(widthLimit, heightLimit) * 0.025);
            const preferredWidth = Math.max(132, rawMaxX - rawMinX + padding * 2);
            const preferredHeight = Math.max(104, rawMaxY - rawMinY + padding * 2);
            const left = clamp(rawMinX - padding, 10, Math.max(10, widthLimit - 134));
            const top = clamp(rawMinY - padding, 10, Math.max(10, heightLimit - 106));
            const width = clamp(preferredWidth, 132, Math.max(132, widthLimit - left - 10));
            const height = clamp(preferredHeight, 104, Math.max(104, heightLimit - top - 10));

            return {
                left,
                top,
                width,
                height
            };
        };

        const updateActiveTargetPosition = () => {
            const activeStep = getActiveStep();
            if (!activeTargetElement || !activeStep) return;

            const bounds = projectStepBounds(activeStep);
            if (!bounds) {
                activeTargetElement.style.opacity = "0";
                return;
            }

            activeTargetElement.style.opacity = "1";
            activeTargetElement.style.left = `${bounds.left}px`;
            activeTargetElement.style.top = `${bounds.top}px`;
            activeTargetElement.style.width = `${bounds.width}px`;
            activeTargetElement.style.height = `${bounds.height}px`;
        };

        const updateFullscreenButton = () => {
            if (!fullscreenToggles.length || !labSection) return;

            const isFullscreen = document.fullscreenElement === labSection || labSection.classList.contains("is-fallback-fullscreen");

            fullscreenToggles.forEach((button) => {
                const enterLabel = button.dataset.enterLabel || "تفعيل ملء الشاشة";
                const exitLabel = button.dataset.exitLabel || "الخروج من ملء الشاشة";
                button.textContent = isFullscreen ? exitLabel : enterLabel;
                button.setAttribute("aria-pressed", isFullscreen ? "true" : "false");
                button.classList.toggle("is-active", isFullscreen);
            });
        };

        const syncImmersiveViewport = () => {
            if (!labSection) return;

            const isNativeFullscreen = document.fullscreenElement === labSection;
            const isFallbackFullscreen = labSection.classList.contains("is-fallback-fullscreen");
            const isFullscreenActive = isNativeFullscreen || isFallbackFullscreen;

            labSection.classList.toggle("is-fullscreen-active", isFullscreenActive);
            document.body.classList.toggle("lab-fullscreen-lock", isFallbackFullscreen);

            updateFullscreenButton();
            resize();
            updateActiveTargetPosition();
        };

        const enterFallbackFullscreen = () => {
            if (!labSection) return;
            labSection.classList.add("is-fallback-fullscreen");
            syncImmersiveViewport();
        };

        const exitFallbackFullscreen = () => {
            if (!labSection) return;
            labSection.classList.remove("is-fallback-fullscreen");
            syncImmersiveViewport();
        };

        const toggleImmersiveViewport = async () => {
            if (!labSection) return;

            const isNativeFullscreen = document.fullscreenElement === labSection;
            const isFallbackFullscreen = labSection.classList.contains("is-fallback-fullscreen");

            try {
                if (isNativeFullscreen) {
                    if (typeof document.exitFullscreen === "function") {
                        await document.exitFullscreen();
                    }
                } else if (isFallbackFullscreen) {
                    exitFallbackFullscreen();
                    return;
                } else if (typeof labSection.requestFullscreen === "function") {
                    await labSection.requestFullscreen();
                } else {
                    enterFallbackFullscreen();
                    return;
                }
            } catch (error) {
                console.warn("Immersive mode failed:", error);
                if (!isNativeFullscreen && !isFallbackFullscreen) {
                    enterFallbackFullscreen();
                    return;
                }
            }

            syncImmersiveViewport();
        };

        const setTargetTone = (tone, duration = 0) => {
            if (targetTone === tone && duration <= 0) return;
            targetTone = tone;
            renderTarget();
            if (targetResetTimer) clearTimeout(targetResetTimer);
            if (duration > 0) {
                targetResetTimer = window.setTimeout(() => {
                    targetTone = "ready";
                    renderTarget();
                }, duration);
            }
        };

        const buildDragPreviewMarkup = (step, label, status) => `
            <span class="assembly-drag-preview-visual" style="color:${step?.color || "#255c75"}">
                ${getAssemblyPartVisualMarkup(step)}
            </span>
            <span class="assembly-drag-preview-copy">
                <strong>${label}</strong>
                <span>${status}</span>
            </span>
        `;

        const ensureDragPreviewElement = () => {
            if (!dragPreviewElement) {
                dragPreviewElement = document.createElement("div");
                dragPreviewElement.className = "assembly-drag-preview";
                document.body.appendChild(dragPreviewElement);
            }
            return dragPreviewElement;
        };

        const setDragPreviewPosition = (clientX, clientY) => {
            if (!dragPreviewElement) return;
            dragPreviewElement.style.left = `${clientX + 18}px`;
            dragPreviewElement.style.top = `${clientY + 18}px`;
        };

        const showDragPreview = (step, label, status, clientX, clientY) => {
            const preview = ensureDragPreviewElement();
            preview.innerHTML = buildDragPreviewMarkup(step, label, status);
            preview.classList.add("is-active");
            setDragPreviewPosition(clientX, clientY);
        };

        const hideDragPreview = () => {
            if (!dragPreviewElement) return;
            dragPreviewElement.classList.remove("is-active");
            dragPreviewElement.style.left = "-9999px";
            dragPreviewElement.style.top = "-9999px";
        };

        const isPointOverActiveTarget = (clientX, clientY) => {
            if (!activeTargetElement) return false;
            const rect = activeTargetElement.getBoundingClientRect();
            const insetX = Math.min(18, rect.width * 0.08);
            const insetY = Math.min(18, rect.height * 0.08);
            return (
                clientX >= rect.left + insetX &&
                clientX <= rect.right - insetX &&
                clientY >= rect.top + insetY &&
                clientY <= rect.bottom - insetY
            );
        };

        const clearPointerDragTracking = () => {
            document.removeEventListener("pointermove", handlePointerDragMove);
            document.removeEventListener("pointerup", handlePointerDragEnd, true);
            document.removeEventListener("pointercancel", handlePointerDragCancel, true);
        };

        const finishPointerDrag = (resetTone = true) => {
            clearPointerDragTracking();
            pointerDragState = null;
            draggedPartId = null;
            controls.enabled = true;
            targetLayer.classList.remove("is-dragging");
            document.body.classList.remove("assembly-drag-lock");
            setStageDropState(false, false);
            hideDragPreview();
            if (resetTone && !state.isCompleted) setTargetTone("ready");
        };

        const handlePointerDragMove = (event) => {
            if (!pointerDragState) return;
            if (pointerDragState.pointerId != null && event.pointerId !== pointerDragState.pointerId) return;

            const deltaX = event.clientX - pointerDragState.startX;
            const deltaY = event.clientY - pointerDragState.startY;
            const distance = Math.hypot(deltaX, deltaY);

            if (!pointerDragState.active) {
                if (distance < 8) return;

                pointerDragState.active = true;
                draggedPartId = pointerDragState.partId;
                state.selectedPartId = pointerDragState.partId;
                controls.enabled = false;
                targetLayer.classList.add("is-dragging");
                document.body.classList.add("assembly-drag-lock");
                setStageDropState(true, false);

                const draggedStep = stepById.get(pointerDragState.partId);
                const label = pointerDragState.label || draggedStep?.inventoryLabel || draggedStep?.label || "قطعة";
                const status = pointerDragState.status || "أفلتها فوق الشكل المطابق";
                showDragPreview(draggedStep, label, status, event.clientX, event.clientY);
                renderUI();
            }

            event.preventDefault();
            setDragPreviewPosition(event.clientX, event.clientY);
            const isOverTarget = isPointOverActiveTarget(event.clientX, event.clientY);
            setStageDropState(true, isOverTarget);
            setTargetTone(isOverTarget ? "over" : "ready");
        };

        const handlePointerDragEnd = (event) => {
            if (!pointerDragState) return;
            if (pointerDragState.pointerId != null && event.pointerId !== pointerDragState.pointerId) return;

            const activeDrag = pointerDragState;
            const wasDragging = activeDrag.active;
            const droppedOnTarget = wasDragging && isPointOverActiveTarget(event.clientX, event.clientY);

            if (!wasDragging) {
                finishPointerDrag(false);
                return;
            }

            event.preventDefault();
            suppressPartClickId = activeDrag.partId;
            suppressPartClickUntil = nowMs() + 280;
            if (droppedOnTarget) suppressTargetClickUntil = nowMs() + 280;

            finishPointerDrag(false);

            if (droppedOnTarget) {
                attemptPlacement(activeDrag.partId);
                return;
            }

            state.selectedPartId = activeDrag.partId;
            setFeedbackState(
                "warning",
                "أفلت القطعة داخل موضعها",
                "يتم تثبيت القطعة فقط عندما تفلتها فوق الإطار المتوهج المطابق لشكل موضعها داخل النموذج."
            );
            setTargetTone("ready");
            renderUI();
        };

        const handlePointerDragCancel = () => {
            if (!pointerDragState) return;
            const activeDrag = pointerDragState;
            finishPointerDrag(false);
            if (activeDrag.active) {
                state.selectedPartId = activeDrag.partId;
                setFeedbackState(
                    "info",
                    "تم إلغاء السحب",
                    "اختر القطعة من جديد ثم اسحبها إلى الإطار المتوهج عندما تكون جاهزًا."
                );
                renderUI();
            }
        };

        const attemptPlacement = (partId) => {
            if (!partId) return;
            const activeStep = getActiveStep();
            if (!activeStep) return;

            const pickedStep = stepById.get(partId);
            if (!pickedStep || state.placedParts.has(partId)) return;

            if (partId !== activeStep.id) {
                state.selectedPartId = partId;
                setFeedbackState(
                    "error",
                    "هذه ليست القطعة الصحيحة لهذه الخطوة",
                    `الإطار المتوهج الحالي مخصص لـ ${activeStep.inventoryLabel || activeStep.label}. اختر القطعة الصحيحة ثم أعد الإسقاط فوق الشكل المطابق.`
                );
                setTargetTone("wrong", 900);
                renderUI();
                return;
            }

            state.placedParts.add(partId);
            state.selectedPartId = null;
            state.collectedCards = Array.from(state.placedParts);

            if (state.currentStepIndex >= steps.length - 1) {
                state.isCompleted = true;
                setFeedbackState(
                    "complete",
                    labConfig.completeTitle || "اكتمل التجميع الأساسي",
                    labConfig.completeText || "أكملت ربط القطع الأساسية داخل النموذج."
                );
            } else {
                state.currentStepIndex += 1;
                setFeedbackState("success", `تم تركيب ${pickedStep.label}`, pickedStep.successText);
            }

            applyAssemblyVisibility();
            moveCameraToStep(state.isCompleted ? pickedStep : getActiveStep());
            renderUI();
            highlightPlacedStep(pickedStep);
        };

        const handleTargetActivation = () => {
            if (nowMs() < suppressTargetClickUntil) {
                suppressTargetClickUntil = 0;
                return;
            }

            const activeStep = getActiveStep();
            if (!activeStep) return;

            if (!state.selectedPartId) {
                setFeedbackState(
                    "info",
                    "اختر قطعة أولاً",
                    `الخطوة الحالية تطلب ${activeStep.inventoryLabel || activeStep.label}. اخترها من لوحة الأجزاء ثم أسقطها فوق الإطار المتوهج المطابق لشكلها أو اضغط عليه.`
                );
                renderUI();
                return;
            }

            attemptPlacement(state.selectedPartId);
        };

        const renderTarget = () => {
            targetLayer.innerHTML = "";
            activeTargetElement = null;

            const activeStep = getActiveStep();
            if (!activeStep) {
                if (state.isCompleted) {
                    targetLayer.innerHTML = `<div class="assembly-target-summary">اكتمل التجميع</div>`;
                }
                return;
            }

            const target = document.createElement("div");
            target.className = `assembly-target is-${targetTone}`;
            target.innerHTML = `
                <button class="assembly-target-button" type="button" data-target-step="${activeStep.id}" aria-label="${activeStep.dropLabel}">
                    <span class="assembly-target-frame"></span>
                    <span class="assembly-target-ghost" aria-hidden="true" style="color:${activeStep.color || "#255c75"}">
                        ${getAssemblyPartVisualMarkup(activeStep)}
                    </span>
                    <span class="assembly-target-chip">
                        <span class="assembly-target-dot"></span>
                        <span class="assembly-target-label">${activeStep.dropLabel}</span>
                    </span>
                </button>
            `;

            targetLayer.appendChild(target);
            activeTargetElement = target;
            bindTargetEvents(target.querySelector(".assembly-target-button"));
            updateActiveTargetPosition();
        };

        const renderLearningCards = () => {
            if (!state.collectedCards.length) {
                learningCards.innerHTML = `
                    <article class="assembly-card is-empty">
                        <strong>لا توجد بطاقات بعد</strong>
                        <p>ابدأ بتركيب أول قطعة حتى يبدأ السجل في جمع المعلومات التعليمية.</p>
                    </article>
                `;
                return;
            }

            const cardsMarkup = state.collectedCards.map((stepId) => {
                const step = stepById.get(stepId);
                if (!step) return "";
                const facts = (Array.isArray(step.facts) ? step.facts : [])
                    .map((fact) => `<div class="assembly-card-point">${fact}</div>`)
                    .join("");

                return `
                    <article class="assembly-card">
                        <span class="assembly-card-tag">${step.badge}</span>
                        <h4>${step.label}</h4>
                        <div class="assembly-card-points">${facts}</div>
                    </article>
                `;
            }).join("");

            const completionCard = state.isCompleted ? `
                <article class="assembly-card is-summary">
                    <span class="assembly-card-tag">تم</span>
                    <h4>${labConfig.completeTitle || "اكتمل التجميع الأساسي"}</h4>
                    <div class="assembly-card-point">${labConfig.completeText || "أصبحت القطع الأساسية مجتمعة في نموذج واحد."}</div>
                </article>
            ` : "";

            learningCards.innerHTML = `${cardsMarkup}${completionCard}`;
        };

        const renderUI = () => {
            const activeStep = getActiveStep();

            stepper.innerHTML = steps.map((step, index) => {
                const classes = [
                    "assembly-step",
                    state.placedParts.has(step.id) ? "is-done" : "",
                    !state.isCompleted && index === state.currentStepIndex ? "is-active" : "",
                    !state.placedParts.has(step.id) && index > state.currentStepIndex ? "is-upcoming" : ""
                ].filter(Boolean).join(" ");

                return `
                    <div class="${classes}">
                        <span class="assembly-step-index">${step.badge}</span>
                        <div class="assembly-step-copy">
                            <strong>${step.label}</strong>
                            <span>${state.placedParts.has(step.id) ? "تم تثبيته" : index === state.currentStepIndex && !state.isCompleted ? "الخطوة الحالية" : "بانتظارك"}</span>
                        </div>
                    </div>
                `;
            }).join("");

            if (state.isCompleted) {
                currentTitle.textContent = labConfig.completeTitle || "اكتمل التجميع الأساسي";
                currentText.textContent = labConfig.completeText || "أكملت ربط القطع الأساسية داخل النموذج.";
            } else if (activeStep) {
                currentTitle.textContent = `${activeStep.badge} • ${activeStep.label}`;
                currentText.textContent = activeStep.instruction || labConfig.introText || "";
            }

            feedbackBox.className = `assembly-feedback is-${state.feedbackState.tone || "info"}`;
            feedbackTitle.textContent = state.feedbackState.title || "";
            feedbackText.textContent = state.feedbackState.text || "";

            partsList.innerHTML = steps.map((step) => {
                const isPlaced = state.placedParts.has(step.id);
                const isSelected = state.selectedPartId === step.id;
                const isCurrent = !state.isCompleted && activeStep && activeStep.id === step.id;
                const statusText = isPlaced ? "تم تركيبه" : isCurrent ? "القطعة المطلوبة الآن" : "قطعة جاهزة";

                return `
                    <button
                        class="assembly-part ${isPlaced ? "is-placed" : ""} ${isCurrent ? "is-current" : ""} ${isSelected ? "is-selected" : ""}"
                        type="button"
                        data-part-id="${step.id}"
                        draggable="false"
                        ${isPlaced ? "disabled" : ""}
                    >
                        <span class="assembly-part-visual" aria-hidden="true" style="color:${step.color || "#255c75"}">
                            ${getAssemblyPartVisualMarkup(step)}
                            <span class="assembly-part-badge">${step.badge}</span>
                        </span>
                        <span class="assembly-part-meta">
                            <strong>${step.inventoryLabel || step.label}</strong>
                            <span>${statusText}</span>
                        </span>
                        <span class="assembly-part-grab">${isPlaced ? "تم" : "اسحب"}</span>
                    </button>
                `;
            }).join("");

            bindPartEvents();
            renderLearningCards();
            renderTarget();
        };
        const bindTargetEvents = (button) => {
            if (!button) return;

            button.addEventListener("click", handleTargetActivation);
        };

        const bindPartEvents = () => {
            partsList.querySelectorAll("[data-part-id]").forEach((button) => {
                if (button.disabled) return;

                button.addEventListener("click", () => {
                    if (button.dataset.partId === suppressPartClickId && nowMs() < suppressPartClickUntil) {
                        suppressPartClickId = null;
                        suppressPartClickUntil = 0;
                        return;
                    }

                    state.selectedPartId = button.dataset.partId;
                    const activeStep = getActiveStep();
                    const selectedStep = stepById.get(state.selectedPartId);

                    if (activeStep && selectedStep && selectedStep.id === activeStep.id) {
                        setFeedbackState("info", "تم اختيار القطعة الصحيحة", `الآن اسحب ${selectedStep.label} إلى الإطار المتوهج المطابق لشكل موضعها أو اضغط عليه لتثبيتها داخل النموذج.`);
                    } else if (activeStep && selectedStep) {
                        setFeedbackState("warning", "تم اختيار قطعة مختلفة", `الخطوة الحالية تخص ${activeStep.label}. يمكنك تجربة الإسقاط فوق الإطار المتوهج لمعرفة لماذا لا يقبلها الشكل الحالي.`);
                    }

                    renderUI();
                });

                button.addEventListener("pointerdown", (event) => {
                    if (event.button !== undefined && event.button !== 0) return;
                    if (event.pointerType === "touch") return;
                    if (pointerDragState) finishPointerDrag(false);

                    const draggedStep = stepById.get(button.dataset.partId);
                    pointerDragState = {
                        partId: button.dataset.partId,
                        pointerId: event.pointerId,
                        startX: event.clientX,
                        startY: event.clientY,
                        active: false,
                        label: button.querySelector("strong")?.textContent?.trim() || draggedStep?.inventoryLabel || draggedStep?.label || "قطعة",
                        status: button.querySelector(".assembly-part-meta span")?.textContent?.trim() || "أفلتها فوق الشكل المطابق"
                    };

                    document.addEventListener("pointermove", handlePointerDragMove);
                    document.addEventListener("pointerup", handlePointerDragEnd, true);
                    document.addEventListener("pointercancel", handlePointerDragCancel, true);
                });

                button.addEventListener("dragstart", (event) => {
                    draggedPartId = button.dataset.partId;
                    state.selectedPartId = draggedPartId;
                    controls.enabled = false;
                    targetLayer.classList.add("is-dragging");
                    setStageDropState(true, false);
                    event.dataTransfer.effectAllowed = "move";
                    event.dataTransfer.setData("text/plain", draggedPartId);

                    const draggedStep = stepById.get(draggedPartId);
                    const label = button.querySelector("strong")?.textContent?.trim() || button.textContent?.trim() || "قطعة";
                    const status = button.querySelector(".assembly-part-meta span")?.textContent?.trim() || "اسقطها على الشكل المطابق";
                    if (!dragPreviewElement) {
                        dragPreviewElement = document.createElement("div");
                        dragPreviewElement.className = "assembly-drag-preview";
                        document.body.appendChild(dragPreviewElement);
                    }
                    dragPreviewElement.innerHTML = `
                        <span class="assembly-drag-preview-visual" style="color:${draggedStep?.color || "#255c75"}">
                            ${getAssemblyPartVisualMarkup(draggedStep)}
                        </span>
                        <span class="assembly-drag-preview-copy">
                            <strong>${label}</strong>
                            <span>${status}</span>
                        </span>
                    `;
                    event.dataTransfer.setDragImage(dragPreviewElement, 44, 28);
                });

                button.addEventListener("dragend", () => {
                    draggedPartId = null;
                    controls.enabled = true;
                    targetLayer.classList.remove("is-dragging");
                    setStageDropState(false, false);
                    if (!state.isCompleted) setTargetTone("ready");
                });
            });
        };

        const resetAttempt = () => {
            if (state.isCompleted) {
                setFeedbackState(
                    "complete",
                    labConfig.completeTitle || "اكتمل التجميع الأساسي",
                    labConfig.completeText || "أكملت ربط القطع الأساسية داخل النموذج."
                );
                renderUI();
                return;
            }

            const activeStep = getActiveStep();
            finishPointerDrag(false);
            state.selectedPartId = null;
            setFeedbackState(
                "info",
                labConfig.feedbackTitle || "أعد المحاولة",
                activeStep?.instruction || labConfig.introText || initialFeedback.text
            );
            setTargetTone("ready");
            renderUI();
        };

        const resetAll = () => {
            state = {
                currentStepIndex: 0,
                placedParts: new Set(),
                selectedPartId: null,
                collectedCards: [],
                feedbackState: { ...initialFeedback },
                isCompleted: false
            };

            finishPointerDrag(false);
            suppressPartClickId = null;
            suppressPartClickUntil = 0;
            suppressTargetClickUntil = 0;
            setStageDropState(false, false);
            setTargetTone("ready");
            applyAssemblyVisibility();
            moveCameraToStep(steps[0], true);
            renderUI();
        };

        resetStepButton?.addEventListener("click", resetAttempt);
        resetAllButton?.addEventListener("click", resetAll);
        fullscreenToggles.forEach((button) => {
            button.addEventListener("click", () => {
                toggleImmersiveViewport();
            });
        });

        document.addEventListener("fullscreenchange", syncImmersiveViewport);
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && labSection?.classList.contains("is-fallback-fullscreen")) {
                exitFallbackFullscreen();
            }
        });

        resize();
        applyAssemblyVisibility();
        moveCameraToStep(steps[0], true);
        syncImmersiveViewport();
        renderUI();
        mount.style.cursor = "grab";

        const getClickableMeshes = () => {
            const clickable = [];
            steps.forEach((step) => {
                if (!state.placedParts.has(step.id)) return;
                clickable.push(...step.meshes);
            });
            return clickable;
        };

        mount.addEventListener("click", (event) => {
            if (draggedPartId) return;
            const rect = mount.getBoundingClientRect();
            pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            raycaster.setFromCamera(pointer, camera);
            const hits = raycaster.intersectObjects(getClickableMeshes(), false);

            if (hits.length > 0) {
                const conceptId = hits[0].object.userData.concept;
                if (conceptId && typeof window.openConceptPopup === "function") {
                    window.openConceptPopup(conceptId);
                }
            }
        });

        mount.addEventListener("mousemove", (event) => {
            if (draggedPartId) {
                mount.style.cursor = "grabbing";
                return;
            }

            const rect = mount.getBoundingClientRect();
            pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            raycaster.setFromCamera(pointer, camera);
            const hits = raycaster.intersectObjects(getClickableMeshes(), false);
            mount.style.cursor = hits.length > 0 ? "pointer" : "grab";
        });

        mount.addEventListener("mouseleave", () => {
            if (!draggedPartId) mount.style.cursor = "grab";
        });

        const animate = (now = performance.now()) => {
            requestAnimationFrame(animate);

            if (focusTransition) {
                const progress = Math.min(1, (now - focusTransition.startTime) / focusTransition.duration);
                const eased = 1 - Math.pow(1 - progress, 3);
                camera.position.lerpVectors(focusTransition.fromPosition, focusTransition.toPosition, eased);
                controls.target.lerpVectors(focusTransition.fromTarget, focusTransition.toTarget, eased);
                if (progress >= 1) focusTransition = null;
            }

            controls.update();
            updateActiveTargetPosition();
            renderer.render(scene, camera);
        };

        animate();

        if (typeof ResizeObserver !== "undefined") {
            new ResizeObserver(() => {
                resize();
                updateActiveTargetPosition();
            }).observe(mount);
        } else {
            window.addEventListener("resize", () => {
                resize();
                updateActiveTargetPosition();
            });
        }
    } catch (error) {
        console.error("3D viewer error:", error);
        mount.innerHTML = `<div class="viewer-loading">تعذر تحميل مختبر التجميع ثلاثي الأبعاد.<br><small style="color:var(--danger)">${error.message}</small></div>`;
    }
}

function setupParticles() {
    const container = document.getElementById("particles-container");
    if (!container) return;

    const prefersReducedMotion = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
    if (prefersReducedMotion) return;

    const colors = ["var(--accent)", "var(--accent-alt)", "var(--good)", "var(--analysis)"];
    const particleCount = 12;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        const size = Math.random() * 6 + 3;
        const colorVar = colors[Math.floor(Math.random() * colors.length)];
        const color = getComputedStyle(document.documentElement).getPropertyValue(colorVar.replace("var(", "").replace(")", "")).trim() || "#255c75";

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            background: ${color};
            animation-duration: ${Math.random() * 20 + 15}s;
            animation-delay: ${Math.random() * 10}s;
        `;
        container.appendChild(particle);
    }
}

function setupProgressBar() {
    const existing = document.querySelector(".progress-bar-container");
    if (existing) return;

    const pageId = document.body?.dataset?.page;
    if (pageId === "home") return;

    const barContainer = document.createElement("div");
    barContainer.className = "progress-bar-container";
    barContainer.innerHTML = `<div class="progress-bar-fill"></div>`;
    document.body.prepend(barContainer);

    const fill = barContainer.querySelector(".progress-bar-fill");
    const sections = document.querySelectorAll("main .section-block, main .hero, main .cta-strip");
    if (!sections.length) return;

    const updateProgress = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        fill.style.width = `${Math.min(100, progress)}%`;
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
}

function setupConceptPopups() {
    const overlay = document.createElement("div");
    overlay.className = "concept-popup-overlay";
    overlay.innerHTML = `
        <div class="concept-popup" role="dialog" aria-modal="true">
            <button class="concept-popup-close" type="button" aria-label="إغلاق">&times;</button>
            <div class="concept-popup-icon"></div>
            <h3></h3>
            <p></p>
            <div class="concept-tags"></div>
        </div>
    `;
    document.body.appendChild(overlay);

    const popup = overlay.querySelector(".concept-popup");
    const closeBtn = overlay.querySelector(".concept-popup-close");
    const iconEl = popup.querySelector(".concept-popup-icon");
    const titleEl = popup.querySelector("h3");
    const textEl = popup.querySelector("p");
    const tagsEl = popup.querySelector(".concept-tags");

    const openPopup = (conceptId) => {
        const concept = CONCEPT_POPUPS[conceptId];
        if (!concept) return;

        iconEl.textContent = concept.icon;
        titleEl.textContent = concept.title;
        textEl.textContent = concept.text;
        tagsEl.innerHTML = concept.tags.map((tag) => `<span class="concept-tag">${tag}</span>`).join("");

        overlay.classList.add("is-active");
        document.body.style.overflow = "hidden";
    };

    const closePopup = () => {
        overlay.classList.remove("is-active");
        document.body.style.overflow = "";
    };

    closeBtn.addEventListener("click", closePopup);
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closePopup();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closePopup();
    });

    document.querySelectorAll("[data-concept]").forEach((trigger) => {
        trigger.addEventListener("click", () => {
            openPopup(trigger.dataset.concept);
        });
    });

    window.openConceptPopup = openPopup;
}

function setupAccordions() {
    document.querySelectorAll("[data-accordion]").forEach((accordion) => {
        accordion.querySelectorAll(".accordion-header").forEach((header) => {
            header.addEventListener("click", () => {
                const item = header.closest(".accordion-item");
                const isOpen = item.classList.contains("is-open");

                accordion.querySelectorAll(".accordion-item").forEach((i) => i.classList.remove("is-open"));

                if (!isOpen) item.classList.add("is-open");
            });
        });
    });
}

function setupButtonRipples() {
    document.querySelectorAll(".button, .sim-action-btn, .answer-grid button").forEach((btn) => {
        btn.addEventListener("click", function(e) {
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement("span");
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                border-radius: 50%;
                background: rgba(255,255,255,0.35);
                transform: scale(0);
                animation: ripple-effect 0.6s ease-out;
                pointer-events: none;
                z-index: 10;
            `;

            this.style.position = "relative";
            this.style.overflow = "hidden";
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    if (!document.getElementById("ripple-style")) {
        const style = document.createElement("style");
        style.id = "ripple-style";
        style.textContent = `@keyframes ripple-effect { to { transform: scale(2.5); opacity: 0; } }`;
        document.head.appendChild(style);
    }
}

function setupCardTilt() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.querySelectorAll(".topic-card, .panel-card, .map-card, .risk-card").forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 25;
            const rotateY = (centerX - x) / 25;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });
}

function setupSVGExplorers() {
    document.querySelectorAll(".visual-panel.is-active .svg-stage, .svg-stage[data-interactive]").forEach(stage => {
        const svg = stage.querySelector("svg");
        if (!svg) return;

        let tooltip = stage.querySelector(".svg-tooltip");
        if (!tooltip) {
            tooltip = document.createElement("div");
            tooltip.className = "svg-tooltip";
            stage.style.position = "relative";
            stage.appendChild(tooltip);
        }

        const interactiveElements = svg.querySelectorAll(".interactive-element");

        interactiveElements.forEach(el => {
            el.addEventListener("mouseenter", (e) => {
                const title = el.dataset.tooltipTitle || "";
                const desc = el.dataset.tooltipDesc || "";
                const concept = el.dataset.concept || "";

                tooltip.innerHTML = `
                    <strong>${title}</strong>
                    <span>${desc}</span>
                    ${concept ? `<span class="tooltip-concept-btn" data-concept="${concept}">شرح المفهوم</span>` : ""}
                `;
                tooltip.classList.add("is-visible");

                tooltip.style.right = `${stage.getBoundingClientRect().right - e.clientX + 16}px`;
                tooltip.style.top = `${e.clientY - stage.getBoundingClientRect().top - 10}px`;
            });

            el.addEventListener("mouseleave", () => {
                tooltip.classList.remove("is-visible");
            });

            el.addEventListener("click", () => {
                const concept = el.dataset.concept;
                if (concept && typeof window.openConceptPopup === "function") {
                    window.openConceptPopup(concept);
                }
            });
        });
    });
}

function setupPlaygroundLab() {
    const container = document.getElementById("playground-container");
    const tabsContainer = document.getElementById("playground-tabs");
    if (!container) return;

    let currentLab = "heat";

    const LABS = {
        heat: {
            title: "مختبر الحرارة والغبار",
            icon: "🌡️",
            description: "أضف غبارًا، أغلق فتحات، نظف المراوح — وشاهد كيف تتغير الحرارة والأداء مباشرة.",
            metrics: [
                { id: "temperature", label: "الحرارة", value: 35, unit: "°C", min: 30, max: 95, good: 50, bad: 75 },
                { id: "airflow", label: "تدفق الهواء", value: 90, unit: "%", min: 0, max: 100, good: 60, bad: 30 },
                { id: "performance", label: "الأداء", value: 95, unit: "%", min: 0, max: 100, good: 70, bad: 40 },
                { id: "dust", label: "الغبار", value: 5, unit: "%", min: 0, max: 100, good: 30, bad: 70 }
            ],
            actions: [
                { id: "add-dust", label: "أضف غبار", icon: "🌫️", desc: "تراكم الغبار يسد فتحات التهوية", effects: { temperature: 15, airflow: -20, performance: -10, dust: 25 }, tip: "الغبار هو العدو الأول للتهوية. كل طبقة غبار ترفع الحرارة بشكل ملحوظ." },
                { id: "block-vents", label: "أغلق فتحات التهوية", icon: "🚫", desc: "سد فتحات الهواء يعيق التبريد", effects: { temperature: 20, airflow: -30, performance: -15, dust: 5 }, tip: "حتى لو كان الجهاز نظيفًا، سد الفتحات يسبب اختناق حراري." },
                { id: "clean-fans", label: "نظف المراوح", icon: "🧹", desc: "إزالة الغبار من المراوح وفتحات التهوية", effects: { temperature: -18, airflow: 25, performance: 12, dust: -30 }, tip: "تنظيف المراوح يعيد الأداء ويخفض الحرارة فورًا." },
                { id: "add-cooling", label: "أضف قاعدة تبريد", icon: "❄️", desc: "قاعدة تبريد خارجية تساعد على التهوية", effects: { temperature: -10, airflow: 15, performance: 8, dust: 0 }, tip: "قاعدة التبريد حل إضافي جيد لكنها لا تغني عن التنظيف الداخلي." },
                { id: "heavy-load", label: "شغّل برنامج ثقيل", icon: "🎮", desc: "تحميل المعالج يرفع الحرارة", effects: { temperature: 12, airflow: 0, performance: -8, dust: 0 }, tip: "البرامج الثقيلة ترفع الحرارة حتى مع تهوية جيدة." },
                { id: "reset", label: "أعد الحالة الطبيعية", icon: "🔄", desc: "إرجاع كل شيء للوضع الطبيعي", effects: { temperature: -100, airflow: 100, performance: 100, dust: -100 }, tip: "ابدأ من جديد وجرّب تسلسلاً مختلفًا." }
            ],
            statusMessages: {
                temperature: (v) => v > 75 ? "⚠️ حرارة خطيرة! الجهاز قد ينطفئ" : v > 55 ? "🌡️ الحرارة مرتفعة — تحتاج تدخل" : "✅ الحرارة طبيعية",
                airflow: (v) => v < 30 ? "🚫 مسار الهواء مسدود" : v < 60 ? "⚠️ تدفق الهواء ضعيف" : "✅ تدفق الهواء جيد",
                performance: (v) => v < 40 ? "🐢 أداء سيء جدًا" : v < 70 ? "⚠️ أداء متراجع" : "✅ أداء ممتاز"
            }
        },
        power: {
            title: "مختبر الطاقة",
            icon: "⚡",
            description: "افصل الكهرباء، أضف UPS، جرّب منظم فولتية — وشاهد كيف يحمي الجهاز.",
            metrics: [
                { id: "power", label: "استقرار الطاقة", value: 100, unit: "%", min: 0, max: 100, good: 70, bad: 30 },
                { id: "dataSafety", label: "سلامة البيانات", value: 100, unit: "%", min: 0, max: 100, good: 70, bad: 30 },
                { id: "hardwareRisk", label: "خطر العتاد", value: 0, unit: "%", min: 0, max: 100, good: 30, bad: 70 },
                { id: "uptime", label: "وقت التشغيل", value: 100, unit: "%", min: 0, max: 100, good: 80, bad: 40 }
            ],
            actions: [
                { id: "power-cut", label: "افصل الكهرباء فجأة", icon: "🔌", desc: "انقطاع مفاجئ للتيار الكهربائي", effects: { power: -60, dataSafety: -30, hardwareRisk: 25, uptime: -40 }, tip: "الانقطاع المفاجئ قد يسبب فقدان بيانات غير محفوظة ويضر بمزود الطاقة." },
                { id: "add-ups", label: "أضف UPS", icon: "🔋", desc: "مزود طاقة غير منقطع يحمي الجهاز", effects: { power: 40, dataSafety: 35, hardwareRisk: -20, uptime: 30 }, tip: "UPS يعطيك وقتًا لحفظ عملك وإغلاق الجهاز بأمان." },
                { id: "voltage-spike", label: "تذبذب الفولتية", icon: "⚡", desc: "ارتفاع وانخفاض مفاجئ في الفولتية", effects: { power: -25, dataSafety: -10, hardwareRisk: 30, uptime: -15 }, tip: "تذبذب الفولتية يدمر القطع الحساسة تدريجيًا." },
                { id: "add-regulator", label: "أضف منظم فولتية", icon: "🛡️", desc: "منظم يحمي من تذبذب الكهرباء", effects: { power: 30, dataSafety: 10, hardwareRisk: -25, uptime: 10 }, tip: "منظم الفولتية يحمي القطع من التلف الكهربائي." },
                { id: "save-work", label: "احفظ عملك", icon: "💾", desc: "حفظ جميع الملفات المفتوحة", effects: { power: 0, dataSafety: 25, hardwareRisk: 0, uptime: 0 }, tip: "الحفظ الدوري عادة جيدة لكنها لا تحمي العتاد." },
                { id: "reset", label: "أعد الحالة الطبيعية", icon: "🔄", desc: "إرجاع كل شيء للوضع الطبيعي", effects: { power: 100, dataSafety: 100, hardwareRisk: -100, uptime: 100 }, tip: "ابدأ من جديد وجرّب حماية مختلفة." }
            ],
            statusMessages: {
                power: (v) => v < 30 ? "🚫 الطاقة غير مستقرة — خطر!" : v < 70 ? "⚠️ تذبذب في الطاقة" : "✅ طاقة مستقرة",
                dataSafety: (v) => v < 30 ? "🚫 بياناتك في خطر!" : v < 70 ? "⚠️ البيانات غير محمية بالكامل" : "✅ بياناتك آمنة",
                hardwareRisk: (v) => v > 70 ? "🚫 خطر تلف القطع!" : v > 30 ? "⚠️ خطر متوسط على العتاد" : "✅ العتاد محمي"
            }
        },
        upgrade: {
            title: "مختبر الترقية",
            icon: "⬆️",
            description: "جرّب تركيب قطع مختلفة — RAM، SSD، بطاقة شاشة — وشاهد تأثير كل واحدة.",
            metrics: [
                { id: "speed", label: "السرعة", value: 40, unit: "%", min: 0, max: 100, good: 60, bad: 30 },
                { id: "multitask", label: "تعدد المهام", value: 30, unit: "%", min: 0, max: 100, good: 60, bad: 30 },
                { id: "storage", label: "المساحة", value: 25, unit: "%", min: 0, max: 100, good: 50, bad: 20 },
                { id: "compatibility", label: "التوافق", value: 100, unit: "%", min: 0, max: 100, good: 70, bad: 30 }
            ],
            actions: [
                { id: "add-ram", label: "أضف RAM 8GB", icon: "🧠", desc: "زيادة الذاكرة تحسن تعدد المهام", effects: { speed: 10, multitask: 35, storage: 0, compatibility: -5 }, tip: "RAM أكثر = برامج أكثر تعمل معًا بدون بطء." },
                { id: "add-ssd", label: "ركّب SSD", icon: "💿", desc: "قرص SSD أسرع بكثير من HDD", effects: { speed: 30, multitask: 10, storage: 20, compatibility: -5 }, tip: "SSD يغير تجربة الاستخدام بالكامل — إقلاع أسرع وفتح برامج فوري." },
                { id: "add-gpu", label: "أضف بطاقة شاشة", icon: "🎮", desc: "بطاقة رسوميات للألعاب والتصميم", effects: { speed: 5, multitask: 0, storage: 0, compatibility: -15 }, tip: "بطاقة الشاشة تحتاج طاقة كافية ومنفذ PCIe متوافق." },
                { id: "check-mobo", label: "افحص اللوحة الأم", icon: "🔍", desc: "تأكد من توافق القطع قبل الشراء", effects: { speed: 0, multitask: 0, storage: 0, compatibility: 20 }, tip: "فحص التوافق قبل الشراء يوفر المال والوقت." },
                { id: "overclock", label: "رفع تردد المعالج", icon: "🔥", desc: "Overclocking يزيد السرعة لكن يرفع الحرارة", effects: { speed: 20, multitask: 5, storage: 0, compatibility: -10 }, tip: "رفع التردد يرفع الحرارة ويقلل عمر المعالج. استخدمه بحذر." },
                { id: "reset", label: "أعد الحالة الطبيعية", icon: "🔄", desc: "إرجاع كل شيء للوضع الطبيعي", effects: { speed: -100, multitask: -100, storage: -100, compatibility: 100 }, tip: "ابدأ من جديد وجرّب تركيبات مختلفة." }
            ],
            statusMessages: {
                speed: (v) => v < 30 ? "🐢 الجهاز بطيء جدًا" : v < 60 ? "⚠️ سرعة متوسطة" : "✅ سرعة ممتازة",
                multitask: (v) => v < 30 ? "🚫 لا يتحمل تعدد المهام" : v < 60 ? "⚠️ يتحمل بعض البرامج فقط" : "✅ يتحمل عدة برامج معًا",
                compatibility: (v) => v < 30 ? "🚫 قطع غير متوافقة!" : v < 70 ? "⚠️ تحقق من التوافق" : "✅ كل القطع متوافقة"
            }
        },
        disk: {
            title: "مختبر الأقراص",
            icon: "💾",
            description: "املأ القرص، نظّفه، جزّئه — وشاهد تأثير كل عملية على الأداء.",
            metrics: [
                { id: "space", label: "المساحة المتاحة", value: 80, unit: "%", min: 0, max: 100, good: 40, bad: 15 },
                { id: "speed", label: "سرعة القراءة", value: 85, unit: "%", min: 0, max: 100, good: 60, bad: 30 },
                { id: "fragmentation", label: "التجزئة", value: 5, unit: "%", min: 0, max: 100, good: 30, bad: 70 },
                { id: "health", label: "صحة القرص", value: 95, unit: "%", min: 0, max: 100, good: 70, bad: 40 }
            ],
            actions: [
                { id: "fill-files", label: "أضف ملفات كبيرة", icon: "📁", desc: "ملفات فيديو وصور تملأ القرص", effects: { space: -30, speed: -10, fragmentation: 15, health: 0 }, tip: "امتلاء القرص يبطئ النظام ويقلل مساحة التبديل." },
                { id: "disk-cleanup", label: "شغّل Disk Cleanup", icon: "🧹", desc: "حذف الملفات المؤقتة وغير المهمة", effects: { space: 20, speed: 8, fragmentation: -5, health: 5 }, tip: "التنظيف الدوري يحافظ على مساحة وأداء أفضل." },
                { id: "defrag", label: "نفّذ Defragmentation", icon: "🔧", desc: "إعادة تنظيم الملفات على القرص", effects: { space: 0, speed: 15, fragmentation: -35, health: 3 }, tip: "إزالة التجزئة تسرّع الوصول للملفات خاصة على HDD." },
                { id: "add-temp", label: "أنشئ ملفات مؤقتة", icon: "📄", desc: "برامج تترك ملفات مؤقتة كثيرة", effects: { space: -10, speed: -5, fragmentation: 8, health: 0 }, tip: "الملفات المؤقتة تتراكم مع الوقت وتنظف المساحة." },
                { id: "scan-health", label: "افحص صحة القرص", icon: "🔍", desc: "فحص القطاعات التالفة والأخطاء", effects: { space: 0, speed: 0, fragmentation: 0, health: 10 }, tip: "الفحص الدوري يكشف المشاكل قبل أن تتفاقم." },
                { id: "reset", label: "أعد الحالة الطبيعية", icon: "🔄", desc: "إرجاع كل شيء للوضع الطبيعي", effects: { space: 100, speed: 100, fragmentation: -100, health: 100 }, tip: "ابدأ من جديد وجرّب عمليات صيانة مختلفة." }
            ],
            statusMessages: {
                space: (v) => v < 15 ? "🚫 القرص شبه ممتلئ!" : v < 40 ? "⚠️ المساحة محدودة" : "✅ مساحة كافية",
                speed: (v) => v < 30 ? "🐢 القرص بطيء جدًا" : v < 60 ? "⚠️ سرعة متوسطة" : "✅ سرعة جيدة",
                fragmentation: (v) => v > 70 ? "🚫 تجزئة عالية — بطء شديد" : v > 30 ? "⚠️ تحتاج إزالة تجزئة" : "✅ ملفات منظمة"
            }
        },
        security: {
            title: "مختبر الأمان",
            icon: "🔒",
            description: "جرّب كلمات مرور مختلفة، فعّل حماية، وشاهد مستوى الأمان يتغير.",
            metrics: [
                { id: "passwordStrength", label: "قوة كلمة المرور", value: 20, unit: "%", min: 0, max: 100, good: 70, bad: 30 },
                { id: "protection", label: "الحماية النشطة", value: 30, unit: "%", min: 0, max: 100, good: 70, bad: 30 },
                { id: "backup", label: "النسخ الاحتياطي", value: 0, unit: "%", min: 0, max: 100, good: 60, bad: 20 },
                { id: "vulnerability", label: "الثغرات", value: 60, unit: "%", min: 0, max: 100, good: 30, bad: 70 }
            ],
            actions: [
                { id: "weak-pass", label: "كلمة مرور: 123456", icon: "🔓", desc: "كلمة مرور ضعيفة جدًا", effects: { passwordStrength: -20, protection: 0, backup: 0, vulnerability: 20 }, tip: "هذه من أضعف كلمات المرور. يمكن تخمينها في ثانية واحدة." },
                { id: "strong-pass", label: "كلمة مرور: MyP@ss2026!", icon: "🔐", desc: "كلمة مرور قوية ومتنوعة", effects: { passwordStrength: 40, protection: 5, backup: 0, vulnerability: -15 }, tip: "كلمة مرور طويلة مع أحرف كبيرة وصغيرة وأرقام ورموز." },
                { id: "add-antivirus", label: "فعّل برنامج الحماية", icon: "🛡️", desc: "برنامج مكافحة الفيروسات", effects: { passwordStrength: 0, protection: 35, backup: 0, vulnerability: -20 }, tip: "برنامج الحماية يصد التهديدات قبل أن تصل لجهازك." },
                { id: "local-backup", label: "نسخ احتياطي محلي", icon: "💿", desc: "نسخ الملفات على قرص خارجي", effects: { passwordStrength: 0, protection: 0, backup: 30, vulnerability: 0 }, tip: "النسخ المحلي سريع الاسترجاع لكنه معرض للفقد المادي." },
                { id: "cloud-backup", label: "نسخ احتياطي سحابي", icon: "☁️", desc: "رفع الملفات على Google Drive", effects: { passwordStrength: 0, protection: 5, backup: 35, vulnerability: -5 }, tip: "النسخ السحابي يحمي من الفقد المادي لكن يحتاج إنترنت." },
                { id: "enable-2fa", label: "فعّل المصادقة الثنائية", icon: "📱", desc: "طبقة حماية إضافية", effects: { passwordStrength: 15, protection: 20, backup: 0, vulnerability: -15 }, tip: "حتى لو عُرفت كلمة المرور، المصادقة الثنائية تمنع الدخول." },
                { id: "reset", label: "أعد الحالة الطبيعية", icon: "🔄", desc: "إرجاع كل شيء للوضع الطبيعي", effects: { passwordStrength: 100, protection: 100, backup: 100, vulnerability: 100 }, tip: "ابدأ من جديد وجرّب حماية مختلفة." }
            ],
            statusMessages: {
                passwordStrength: (v) => v < 30 ? "🚫 كلمة مرور ضعيفة جدًا!" : v < 70 ? "⚠️ تحتاج كلمة أقوى" : "✅ كلمة مرور قوية",
                protection: (v) => v < 30 ? "🚫 لا حماية نشطة!" : v < 70 ? "⚠️ حماية جزئية" : "✅ حماية شاملة",
                vulnerability: (v) => v > 70 ? "🚫 ثغرات كثيرة — خطر!" : v > 30 ? "⚠️ بعض الثغرات موجودة" : "✅ محمي جيدًا"
            }
        }
    };

    let state = {};

    const initLab = (labId) => {
        const lab = LABS[labId];
        if (!lab) return;
        state = {};
        lab.metrics.forEach(m => { state[m.id] = m.value; });
        renderLab(labId);
    };

    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    const applyAction = (labId, action) => {
        const lab = LABS[labId];
        Object.entries(action.effects).forEach(([key, effect]) => {
            if (state[key] !== undefined) {
                const metric = lab.metrics.find(m => m.id === key);
                if (effect === 100 || effect === -100) {
                    state[key] = metric ? (effect > 0 ? metric.value : 0) : state[key];
                } else {
                    state[key] = clamp(state[key] + effect, metric ? metric.min : 0, metric ? metric.max : 100);
                }
            }
        });
        renderLab(labId);
    };

    const getMetricColor = (value, good, bad, invert = false) => {
        const v = invert ? 100 - value : value;
        if (v >= good) return "var(--good)";
        if (v >= bad) return "var(--warning)";
        return "var(--danger)";
    };

    const METRIC_ICONS = {
        temperature: "🌡️", airflow: "💨", performance: "⚡", dust: "🌫️",
        power: "🔌", dataSafety: "🔒", hardwareRisk: "⚠️", uptime: "⏱️",
        speed: "🚀", multitask: "📊", storage: "💿", compatibility: "🔧",
        space: "📁", fragmentation: "🔀", health: "❤️",
        passwordStrength: "🔑", protection: "🛡️", backup: "☁️", vulnerability: "🕳️"
    };

    const INVERTED = new Set(["fragmentation", "dust", "hardwareRisk", "vulnerability"]);

    const ringProgress = (pct, color, icon, label, unit) => {
        const r = 32, circ = +(2 * Math.PI * r).toFixed(2);
        const offset = +(circ * (1 - Math.min(100, Math.max(0, pct)) / 100)).toFixed(2);
        return `
        <div class="pg-metric-card">
            <svg viewBox="0 0 80 80" class="pg-ring-svg" aria-hidden="true">
                <circle cx="40" cy="40" r="${r}" fill="none" stroke="rgba(0,0,0,0.07)" stroke-width="8"/>
                <circle cx="40" cy="40" r="${r}" fill="none" stroke="${color}" stroke-width="8"
                    stroke-dasharray="${circ}" stroke-dashoffset="${offset}"
                    stroke-linecap="round" transform="rotate(-90 40 40)"
                    style="transition:stroke-dashoffset .6s ease,stroke .4s ease"/>
                <text x="40" y="36" text-anchor="middle" font-size="17" dominant-baseline="middle">${icon}</text>
                <text x="40" y="54" text-anchor="middle" font-size="10" font-weight="bold" fill="${color}">${Math.round(pct)}${unit}</text>
            </svg>
            <div class="pg-metric-label">${label}</div>
        </div>`;
    };

    const getLabSvg = (labId) => {
        const s = state;
        const lerp = (a, b, t) => a + (b - a) * Math.min(1, Math.max(0, t));

        if (labId === "heat") {
            const temp = s.temperature || 35;
            const airflow = s.airflow || 90;
            const dust = s.dust || 5;
            const tempPct = (temp - 30) / 65;
            const tempColor = tempPct > 0.7 ? "#ef4444" : tempPct > 0.4 ? "#f97316" : "#22c55e";
            const fanSpeed = airflow > 60 ? "0.5s" : airflow > 30 ? "1.2s" : "2.5s";
            const dustOpacity = (dust / 100) * 0.55;
            const fanColor = airflow < 30 ? "#94a3b8" : "#60a5fa";
            const thermH = Math.round(140 * tempPct);
            const thermY = 160 - thermH;
            return `<svg viewBox="0 0 260 220" class="pg-svg-illus" xmlns="http://www.w3.org/2000/svg">
                <!-- Tower body -->
                <rect x="40" y="20" width="140" height="185" rx="14" fill="#1e293b" stroke="#334155" stroke-width="2"/>
                <rect x="52" y="32" width="116" height="161" rx="9" fill="#0f172a"/>
                <!-- Power LED -->
                <circle cx="68" cy="44" r="5" fill="${temp > 75 ? '#ef4444' : '#22c55e'}">
                    <animate attributeName="opacity" values="1;0.4;1" dur="${temp > 75 ? '0.6s' : '2s'}" repeatCount="indefinite"/>
                </circle>
                <!-- Drive slots -->
                <rect x="140" y="38" width="20" height="5" rx="2" fill="#334155"/>
                <rect x="140" y="48" width="20" height="5" rx="2" fill="#334155"/>
                <!-- Fan -->
                <circle cx="110" cy="105" r="38" fill="#1e3a5f" stroke="#334155" stroke-width="2"/>
                <circle cx="110" cy="105" r="6" fill="#60a5fa"/>
                <g style="transform-origin:110px 105px;animation:spin ${fanSpeed} linear infinite">
                    <path d="M110,105 L110,75 Q122,82 122,96 Z" fill="${fanColor}" opacity="0.9"/>
                    <path d="M110,105 L137,120 Q130,132 118,128 Z" fill="${fanColor}" opacity="0.9"/>
                    <path d="M110,105 L83,120 Q76,108 83,96 Z" fill="${fanColor}" opacity="0.9"/>
                </g>
                <!-- Thermometer -->
                <rect x="200" y="20" width="18" height="160" rx="9" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
                <rect x="200" y="${thermY}" width="18" height="${thermH}" rx="9" fill="${tempColor}" style="transition:all .6s ease"/>
                <circle cx="209" cy="185" r="10" fill="${tempColor}" style="transition:fill .4s ease"/>
                <text x="209" y="210" text-anchor="middle" font-size="9" fill="#94a3b8">°C</text>
                <!-- Dust overlay -->
                <rect x="52" y="32" width="116" height="161" rx="9" fill="rgba(180,140,60,${dustOpacity})" style="transition:opacity .5s ease"/>
                ${dust > 60 ? `<text x="110" y="175" text-anchor="middle" font-size="22">💨</text>` : ""}
                ${temp > 78 ? `<text x="75" y="215" font-size="20">🔥</text><text x="105" y="220" font-size="24">🔥</text><text x="135" y="215" font-size="20">🔥</text>` : ""}
                <!-- Vent lines -->
                <line x1="155" y1="140" x2="172" y2="140" stroke="#334155" stroke-width="2" stroke-linecap="round"/>
                <line x1="155" y1="148" x2="172" y2="148" stroke="#334155" stroke-width="2" stroke-linecap="round"/>
                <line x1="155" y1="156" x2="172" y2="156" stroke="#334155" stroke-width="2" stroke-linecap="round"/>
            </svg>`;
        }

        if (labId === "power") {
            const power = s.power || 100;
            const dataSafety = s.dataSafety || 100;
            const risk = s.hardwareRisk || 0;
            const batH = Math.round(90 * (power / 100));
            const batColor = power > 60 ? "#22c55e" : power > 30 ? "#f97316" : "#ef4444";
            const shieldFill = dataSafety > 60 ? "#3b82f6" : dataSafety > 30 ? "#f97316" : "#ef4444";
            return `<svg viewBox="0 0 260 220" class="pg-svg-illus" xmlns="http://www.w3.org/2000/svg">
                <!-- Wall socket -->
                <rect x="20" y="60" width="70" height="100" rx="12" fill="#1e293b" stroke="#334155" stroke-width="2"/>
                <rect x="33" y="80" width="12" height="20" rx="4" fill="${power > 40 ? '#facc15' : '#334155'}"/>
                <rect x="53" y="80" width="12" height="20" rx="4" fill="${power > 40 ? '#facc15' : '#334155'}"/>
                <circle cx="55" cy="128" r="8" fill="${power > 40 ? '#22c55e' : '#ef4444'}">
                    ${risk > 50 ? `<animate attributeName="opacity" values="1;0.2;1" dur="0.5s" repeatCount="indefinite"/>` : ""}
                </circle>
                <!-- Cable -->
                <path d="M90,110 Q130,110 130,90" fill="none" stroke="${power > 40 ? '#facc15' : '#475569'}" stroke-width="4" stroke-linecap="round"/>
                <!-- UPS / Battery -->
                <rect x="105" y="50" width="50" height="110" rx="10" fill="#1e293b" stroke="#334155" stroke-width="2"/>
                <rect x="122" y="44" width="16" height="10" rx="4" fill="#334155"/>
                <rect x="112" y="${140 - batH}" width="36" height="${batH}" rx="6" fill="${batColor}" style="transition:all .6s ease"/>
                <text x="130" y="172" text-anchor="middle" font-size="10" fill="#94a3b8">UPS</text>
                <!-- Shield -->
                <path d="M185,45 L220,55 L220,105 Q220,140 185,155 Q150,140 150,105 L150,55 Z" fill="${shieldFill}" opacity="0.15" stroke="${shieldFill}" stroke-width="2.5" style="transition:all .5s ease"/>
                <path d="M185,62 L210,69 L210,105 Q210,130 185,142 Q160,130 160,105 L160,69 Z" fill="${shieldFill}" opacity="0.3"/>
                <text x="185" y="112" text-anchor="middle" font-size="32">${dataSafety > 60 ? "🔒" : dataSafety > 30 ? "🔓" : "⚠️"}</text>
                ${risk > 60 ? `<text x="40" y="200" font-size="18">⚡</text><text x="70" y="210" font-size="22">⚡</text>` : ""}
                <!-- PC icon -->
                <rect x="190" y="160" width="55" height="40" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
                <rect x="207" y="200" width="20" height="8" rx="2" fill="#334155"/>
                <rect x="200" y="207" width="35" height="4" rx="2" fill="#334155"/>
                <circle cx="200" cy="170" r="3" fill="${power > 40 ? '#22c55e' : '#ef4444'}"/>
            </svg>`;
        }

        if (labId === "upgrade") {
            const speed = s.speed || 40;
            const multitask = s.multitask || 30;
            const compat = s.compatibility || 100;
            const compatColor = compat > 70 ? "#22c55e" : compat > 30 ? "#f97316" : "#ef4444";
            return `<svg viewBox="0 0 260 220" class="pg-svg-illus" xmlns="http://www.w3.org/2000/svg">
                <!-- Motherboard -->
                <rect x="20" y="30" width="220" height="160" rx="10" fill="#0f2027" stroke="#1e3a2f" stroke-width="2"/>
                <rect x="20" y="30" width="220" height="160" rx="10" fill="url(#pcb-grid)"/>
                <defs>
                    <pattern id="pcb-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1a3a2a" stroke-width="0.5"/>
                    </pattern>
                </defs>
                <!-- CPU socket -->
                <rect x="80" y="55" width="60" height="60" rx="4" fill="#1e293b" stroke="#334155" stroke-width="2"/>
                <rect x="88" y="63" width="44" height="44" rx="3" fill="#0f172a"/>
                <text x="110" y="90" text-anchor="middle" font-size="11" fill="#94a3b8">CPU</text>
                <circle cx="110" cy="96" r="4" fill="${speed > 60 ? '#22c55e' : '#f97316'}">
                    <animate attributeName="opacity" values="1;0.5;1" dur="${speed > 60 ? '0.8s' : '2s'}" repeatCount="indefinite"/>
                </circle>
                <!-- RAM slots -->
                <rect x="155" y="45" width="14" height="70" rx="3" fill="${multitask > 50 ? '#3b82f6' : '#334155'}" stroke="${multitask > 50 ? '#60a5fa' : '#475569'}" stroke-width="1"/>
                <rect x="175" y="45" width="14" height="70" rx="3" fill="${multitask > 70 ? '#3b82f6' : '#334155'}" stroke="${multitask > 70 ? '#60a5fa' : '#475569'}" stroke-width="1"/>
                <text x="177" y="125" text-anchor="middle" font-size="9" fill="#64748b">RAM</text>
                <!-- SSD slot -->
                <rect x="30" y="135" width="80" height="22" rx="4" fill="${s.storage > 40 ? '#7c3aed' : '#334155'}" stroke="${s.storage > 40 ? '#a78bfa' : '#475569'}" stroke-width="1"/>
                <text x="70" y="150" text-anchor="middle" font-size="9" fill="${s.storage > 40 ? '#e2d9ff' : '#64748b'}">SSD / HDD</text>
                <!-- PCIe GPU slot -->
                <rect x="30" y="85" width="40" height="12" rx="3" fill="${s.compatibility < 80 ? '#ef4444' : '#334155'}" stroke="#475569" stroke-width="1"/>
                <text x="50" y="95" text-anchor="middle" font-size="8" fill="#64748b">PCIe</text>
                <!-- Compatibility indicator -->
                <circle cx="220" cy="185" r="16" fill="${compatColor}" opacity="0.2" stroke="${compatColor}" stroke-width="2"/>
                <text x="220" y="190" text-anchor="middle" font-size="16">${compat > 70 ? "✅" : compat > 30 ? "⚠️" : "❌"}</text>
                <!-- Traces / wiring -->
                <path d="M140,85 L155,85" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="3 2"/>
                <path d="M110,115 L110,135" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="3 2"/>
            </svg>`;
        }

        if (labId === "disk") {
            const space = s.space || 80;
            const frag = s.fragmentation || 5;
            const health = s.health || 95;
            const usedPct = 100 - space;
            const r = 55, circ = +(2 * Math.PI * r).toFixed(2);
            const usedOffset = +(circ * (1 - usedPct / 100)).toFixed(2);
            const diskColor = space < 15 ? "#ef4444" : space < 40 ? "#f97316" : "#3b82f6";
            const healthColor = health > 70 ? "#22c55e" : health > 40 ? "#f97316" : "#ef4444";
            return `<svg viewBox="0 0 260 220" class="pg-svg-illus" xmlns="http://www.w3.org/2000/svg">
                <!-- Disk pie -->
                <circle cx="100" cy="110" r="${r}" fill="#1e293b" stroke="#334155" stroke-width="2"/>
                <circle cx="100" cy="110" r="${r}" fill="none" stroke="${diskColor}" stroke-width="22"
                    stroke-dasharray="${circ}" stroke-dashoffset="${usedOffset}"
                    stroke-linecap="butt" transform="rotate(-90 100 110)"
                    style="transition:all .6s ease"/>
                <circle cx="100" cy="110" r="${r}" fill="none" stroke="#334155" stroke-width="22"
                    stroke-dasharray="${circ}" stroke-dashoffset="${+(circ * (usedPct / 100)).toFixed(2)}"
                    stroke-linecap="butt" transform="rotate(${-90 + 360 * usedPct / 100} 100 110)"/>
                <circle cx="100" cy="110" r="34" fill="#0f172a"/>
                <text x="100" y="106" text-anchor="middle" font-size="11" fill="#94a3b8">مستخدم</text>
                <text x="100" y="122" text-anchor="middle" font-size="16" font-weight="bold" fill="${diskColor}">${Math.round(usedPct)}%</text>
                <!-- Legend -->
                <circle cx="40" cy="185" r="7" fill="${diskColor}"/>
                <text x="52" y="190" font-size="9" fill="#94a3b8">مستخدم</text>
                <circle cx="100" cy="185" r="7" fill="#334155"/>
                <text x="112" y="190" font-size="9" fill="#94a3b8">متاح</text>
                <!-- Fragmentation bar -->
                <rect x="165" y="30" width="60" height="10" rx="5" fill="#1e293b" stroke="#334155" stroke-width="1"/>
                <rect x="165" y="30" width="${Math.round(60 * frag / 100)}" height="10" rx="5" fill="${frag > 70 ? '#ef4444' : frag > 30 ? '#f97316' : '#22c55e'}" style="transition:width .6s ease"/>
                <text x="165" y="22" font-size="9" fill="#94a3b8">التجزئة ${Math.round(frag)}%</text>
                <!-- Health heart -->
                <text x="185" y="110" text-anchor="middle" font-size="36">${health > 70 ? "❤️" : health > 40 ? "🧡" : "💔"}</text>
                <text x="185" y="130" text-anchor="middle" font-size="10" fill="${healthColor}">صحة القرص</text>
                <rect x="160" y="138" width="50" height="8" rx="4" fill="#1e293b"/>
                <rect x="160" y="138" width="${Math.round(50 * health / 100)}" height="8" rx="4" fill="${healthColor}" style="transition:width .6s ease"/>
                <!-- HDD icon -->
                <rect x="162" y="160" width="55" height="40" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2"/>
                <circle cx="182" cy="180" r="10" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
                <circle cx="182" cy="180" r="4" fill="#334155"/>
                <rect x="196" y="172" width="16" height="3" rx="1.5" fill="#334155"/>
                <rect x="196" y="179" width="12" height="3" rx="1.5" fill="#334155"/>
                <rect x="196" y="186" width="14" height="3" rx="1.5" fill="#334155"/>
            </svg>`;
        }

        if (labId === "security") {
            const pass = s.passwordStrength || 20;
            const prot = s.protection || 30;
            const backup = s.backup || 0;
            const vuln = s.vulnerability || 60;
            const shieldPct = Math.round((pass + prot) / 2);
            const shieldColor = shieldPct > 60 ? "#22c55e" : shieldPct > 30 ? "#f97316" : "#ef4444";
            const r = 48, circ = +(2 * Math.PI * r).toFixed(2);
            const offset = +(circ * (1 - shieldPct / 100)).toFixed(2);
            return `<svg viewBox="0 0 260 220" class="pg-svg-illus" xmlns="http://www.w3.org/2000/svg">
                <!-- Shield ring -->
                <circle cx="110" cy="105" r="${r}" fill="none" stroke="#1e293b" stroke-width="12"/>
                <circle cx="110" cy="105" r="${r}" fill="none" stroke="${shieldColor}" stroke-width="12"
                    stroke-dasharray="${circ}" stroke-dashoffset="${offset}"
                    stroke-linecap="round" transform="rotate(-90 110 105)"
                    style="transition:all .7s ease"/>
                <!-- Shield shape -->
                <path d="M110,55 L148,70 L148,110 Q148,145 110,162 Q72,145 72,110 L72,70 Z"
                    fill="${shieldColor}" opacity="0.15" stroke="${shieldColor}" stroke-width="2.5" style="transition:all .5s ease"/>
                <text x="110" y="115" text-anchor="middle" font-size="38">${shieldPct > 60 ? "🔒" : shieldPct > 30 ? "🔓" : "🔓"}</text>
                <text x="110" y="175" text-anchor="middle" font-size="11" fill="${shieldColor}" font-weight="bold">${shieldPct}% أمان</text>
                <!-- Password bar -->
                <text x="185" y="45" text-anchor="middle" font-size="9" fill="#94a3b8">كلمة المرور</text>
                <rect x="162" y="50" width="60" height="10" rx="5" fill="#1e293b"/>
                <rect x="162" y="50" width="${Math.round(60 * pass / 100)}" height="10" rx="5" fill="${pass > 70 ? '#22c55e' : pass > 30 ? '#f97316' : '#ef4444'}" style="transition:width .6s ease"/>
                <!-- Protection bar -->
                <text x="185" y="78" text-anchor="middle" font-size="9" fill="#94a3b8">الحماية</text>
                <rect x="162" y="83" width="60" height="10" rx="5" fill="#1e293b"/>
                <rect x="162" y="83" width="${Math.round(60 * prot / 100)}" height="10" rx="5" fill="${prot > 70 ? '#22c55e' : prot > 30 ? '#f97316' : '#ef4444'}" style="transition:width .6s ease"/>
                <!-- Backup bar -->
                <text x="185" y="111" text-anchor="middle" font-size="9" fill="#94a3b8">النسخ الاحتياطي</text>
                <rect x="162" y="116" width="60" height="10" rx="5" fill="#1e293b"/>
                <rect x="162" y="116" width="${Math.round(60 * backup / 100)}" height="10" rx="5" fill="#3b82f6" style="transition:width .6s ease"/>
                <!-- Vulnerability bugs -->
                ${vuln > 60 ? `<text x="25" y="185" font-size="20">🐛</text><text x="55" y="195" font-size="16">🐛</text><text x="185" y="185" font-size="20">🐛</text>` : vuln > 30 ? `<text x="40" y="188" font-size="16">🐛</text>` : `<text x="40" y="188" font-size="16">✨</text>`}
                <text x="110" y="210" text-anchor="middle" font-size="9" fill="#64748b">ثغرات: ${Math.round(vuln)}%</text>
            </svg>`;
        }
        return `<div style="text-align:center;font-size:4rem;padding:40px">${LABS[labId]?.icon || "🔬"}</div>`;
    };

    const renderLab = (labId) => {
        const lab = LABS[labId];
        if (!lab) return;

        const metricsHtml = lab.metrics.map(m => {
            const inv = INVERTED.has(m.id);
            const color = getMetricColor(state[m.id], m.good, m.bad, inv);
            const icon = METRIC_ICONS[m.id] || "📊";
            return ringProgress(state[m.id], color, icon, m.label, m.unit);
        }).join("");

        const actionsHtml = lab.actions.map(a => {
            const effectBadges = Object.entries(a.effects)
                .filter(([, v]) => v !== 0 && Math.abs(v) < 100)
                .slice(0, 3)
                .map(([k, v]) => {
                    const inv = INVERTED.has(k);
                    const good = inv ? v < 0 : v > 0;
                    return `<span class="pg-eff ${good ? "pg-eff-good" : "pg-eff-bad"}">${v > 0 ? "+" : ""}${v}</span>`;
                }).join("");
            return `
            <button class="pg-action-btn" type="button" data-action="${a.id}">
                <span class="pg-action-icon">${a.icon}</span>
                <div class="pg-action-body">
                    <strong>${a.label}</strong>
                    <span>${a.desc}</span>
                </div>
                ${effectBadges ? `<div class="pg-action-effects">${effectBadges}</div>` : ""}
            </button>`;
        }).join("");

        container.innerHTML = `
        <div class="playground-lab" data-lab="${labId}">
            <div class="pg-top">
                <div class="pg-visual-panel">${getLabSvg(labId)}</div>
                <div class="pg-side">
                    <div class="pg-lab-header">
                        <span class="pg-lab-icon-badge">${lab.icon}</span>
                        <div>
                            <h2 class="pg-lab-title">${lab.title}</h2>
                            <p class="pg-lab-desc">${lab.description}</p>
                        </div>
                    </div>
                    <div class="pg-metrics-ring">${metricsHtml}</div>
                </div>
            </div>
            <div class="pg-actions-grid">${actionsHtml}</div>
            <div class="pg-tip" id="pg-tip" hidden>
                <span class="pg-tip-icon">💡</span>
                <div><strong>نصيحة</strong><p id="pg-tip-text"></p></div>
            </div>
        </div>`;

        container.querySelectorAll(".pg-action-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const action = lab.actions.find(a => a.id === btn.dataset.action);
                if (action) {
                    applyAction(labId, action);
                    const tip = document.getElementById("pg-tip");
                    const tipText = document.getElementById("pg-tip-text");
                    if (tip && tipText && action.tip) {
                        tip.hidden = false;
                        tipText.textContent = action.tip;
                        tip.classList.remove("pg-tip-pop");
                        void tip.offsetWidth;
                        tip.classList.add("pg-tip-pop");
                    }
                }
            });
        });
    };

    if (tabsContainer) {
        tabsContainer.querySelectorAll(".practice-cat-tab").forEach(tab => {
            tab.addEventListener("click", () => {
                tabsContainer.querySelectorAll(".practice-cat-tab").forEach(t => t.classList.remove("is-active"));
                tab.classList.add("is-active");
                currentLab = tab.dataset.playground;
                initLab(currentLab);
            });
        });
    }

    initLab("heat");
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
    setupParticles();
    setupProgressBar();
    setupConceptPopups();
    setupAccordions();
    setupButtonRipples();
    setupCardTilt();
    setupSVGExplorers();
    setupPlaygroundLab();
}

startApp();
