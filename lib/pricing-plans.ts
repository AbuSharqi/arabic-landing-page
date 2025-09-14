export interface PricingPlan {
    title: string;
    price: string;
    originalPrice?: string;
    discount?: string;
    features: string[];
    isHighlighted?: boolean;
}

export const pricingPlans: PricingPlan[] = [
    {
        title: "Basic Foundations",
        price: "0",
        features: [
            "Weekly Tajweed Lessons",
            "Basic Makharij Correction",
            "Email Support",
            "Monthly Progress Report",
            "Access to Basic Resources"
        ]
    },
    {
        title: "Comprehensive Learning",
        price: "30",
        features: [
            "All Basic Features",
            "Daily Practice Sessions",
            "Priority Email Support",
            "Weekly 1:1 Feedback",
            "Advanced Tajweed Rules",
            "Quranic Application Drills"
        ]
    },
    {
        title: "Elite Mastery",
        price: "75",
        originalPrice: "100",
        discount: "25%",
        features: [
            "Everything in Other Plans",
            "Direct **Scholar** Access",
            "**Ijazah** Preparation",
            "Personalized Learning Path",
            "**Sanad-Verified** Certification",
            "**Qira'at** Specialization"
        ],
        isHighlighted: true
    }
];
