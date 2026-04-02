// Teacher-editable lesson configuration.
// Change text, show/hide sections, or tune motion here without editing script.js.
// Use true / false in visibleSections to control which parts of the lesson appear.

window.LESSON_CONFIG = {
    global: {
        motion: {
            revealDistancePx: 30,
            revealDurationMs: 680,
            staggerStepMs: 90,
            svgSpeedMultiplier: 1.18,
            viewerPulseMs: 560,
            modelSweepMs: 820
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

            hero: {
                title: "صيانة العتاد تعني فهم البيئة التي يعمل فيها الجهاز قبل لمس أي قطعة أو التفكير في استبدالها.",
                description: "يركز هذا الدرس على أربعة محاور من المصدر الدراسي: العوامل الطبيعية المؤثرة، الحرارة والطاقة، الترقية الآمنة، ثم صيانة الأقراص للحفاظ على الأداء.",
                primaryActionLabel: "ابدأ بالعوامل",
                primaryActionTarget: "#hardware-factors",
                secondaryActionLabel: "افتح النموذج ثلاثي الأبعاد",
                secondaryActionTarget: "#hardware-model-lab"
            },

            modelLab: {
                eyebrow: "المختبر ثلاثي الأبعاد",
                title: "حرّك نموذج الجهاز الحقيقي قبل الانتقال إلى قرار الصيانة",
                description: "استخدم نموذج <strong>PC.fbx</strong> لتثبيت صورة الهيكل، ثم بدّل التركيز بين الهواء والطاقة والترقية حتى ترتبط مفاهيم الدرس بالشكل الحقيقي للجهاز لا بالنص وحده.",
                overlayTitle: "النموذج: PC.fbx",
                overlayHint: "اسحب للدوران، ثم استخدم أزرار التركيز لربط كل منطقة بفكرة الصيانة المرتبطة بها.",
                autoRotateSpeed: 0.0028,
                bobAmount: 2.8,
                bobSpeed: 0.0018,
                focusTransitionMs: 860,
                focusPulseMs: 560
            },

            visualTabs: {
                heat: "الحرارة",
                power: "الطاقة",
                upgrade: "الترقية",
                disk: "الأقراص"
            },

            focusPresets: {
                overview: {
                    buttonLabel: "نظرة عامة",
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
                    buttonLabel: "مسار الهواء",
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
                    buttonLabel: "الطاقة",
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
                    buttonLabel: "الترقية",
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
            }
        }
    }
};
