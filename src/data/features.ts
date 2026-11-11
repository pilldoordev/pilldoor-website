export interface CustomerFeatureItem {
  id: string;
  title: string;
  shortBenefit: string;
  description: string;
  screenshot: string;
  screenshotAlt: string;
  bullets: string[];
}

export interface PatientScreenShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  screenshot: string;
  alt: string;
  bullets: string[];
}

export interface FamilyCarePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  bullets: string[];
}

// 6 Real Flutter Application Screens Showcase
export const PATIENT_SCREEN_SHOWCASE: PatientScreenShowcaseItem[] = [
  {
    id: "home",
    title: "Home & Quick Refills",
    subtitle: "Everything from prescription upload to active orders in one view",
    description:
      "Start a new prescription order, search medicines, check active deliveries in transit, or reorder regular chronic prescriptions with one tap.",
    screenshot: "/mockups/mobile/pilldoor_home_screen.png",
    alt: "Pilldoor mobile app home screen showing prescription upload banner, active deliveries, and quick refill access",
    bullets: [
      "Direct prescription upload banner",
      "Active order summary and transit status",
      "Quick Refill shortcut for ongoing care",
    ],
  },
  {
    id: "upload",
    title: "Prescription Upload",
    subtitle: "Order for yourself or any registered family member",
    description:
      "Choose the patient profile upfront, attach clear prescription photos or PDFs up to 10MB, and route the order to a nearby saved delivery address.",
    screenshot: "/mockups/mobile/pilldoor_upload_prescription_screen.png",
    alt: "Pilldoor prescription upload screen showing patient profile picker and camera, gallery, and PDF options",
    bullets: [
      "Patient selector (Self, Parents, Children, Dependents)",
      "Camera, Gallery, and PDF upload support",
      "Address selection before submission",
    ],
  },
  {
    id: "medicines",
    title: "Medicine Search & Requests",
    subtitle: "Add medicines directly with pharmacist guidance",
    description:
      "Search and add up to 40 requested medicines by name and pack unit, with pharmacist review before anything is dispensed or billed.",
    screenshot: "/mockups/mobile/pilldoor_medicine_search_screen.png",
    alt: "Pilldoor additional medicine request interface with search suggestions and pack unit selector",
    bullets: [
      "Quick suggestions and custom quantities",
      "Pharmacist guidance flag on every item",
      "Flexible pack unit selection (Strips, Bottles, Tubes)",
    ],
  },
  {
    id: "tracking",
    title: "Live Order Tracking",
    subtitle: "Clear visibility across In Progress and Delivered orders",
    description:
      "Track active orders, review itemized invoices, approve generic alternatives proposed by the pharmacist, and revisit past prescriptions anytime.",
    screenshot: "/mockups/mobile/pilldoor_orders_tracking_screen.png",
    alt: "Pilldoor My Orders screen listing in-progress and delivered orders with live status badges",
    bullets: [
      "Filter by In Progress, Delivered, or All Orders",
      "Live status badges from review to doorstep",
      "Direct access to order invoices and past receipts",
    ],
  },
  {
    id: "verification",
    title: "Pharmacist Review Detail",
    subtitle: "Clinical checks and two-way clarification",
    description:
      "See when your prescription is under licensed pharmacist review, respond to clarification requests, or call the pharmacy desk directly from the order view.",
    screenshot: "/mockups/mobile/pilldoor_pharmacist_verification_screen.png",
    alt: "Pilldoor order detail screen showing pharmacist verification status and call pharmacy option",
    bullets: [
      "Real-time clinical review status",
      "Direct one-tap call pharmacy support button",
      "Clear status explanation without medical jargon",
    ],
  },
  {
    id: "welcome",
    title: "Instant Mobile Access",
    subtitle: "Secure mobile number login with zero hassle",
    description:
      "Get started with your mobile number and one-time password (OTP). Select your preferred regional language and manage your family's health securely.",
    screenshot: "/mockups/mobile/pilldoor_welcome_login_screen.png",
    alt: "Pilldoor welcome and login screen showing phone authentication and terms",
    bullets: [
      "Passwordless mobile OTP authentication",
      "Clear terms and data privacy protections",
      "Instant synchronization across your devices",
    ],
  },
];

// 9 Customer Features for `/features`
export const CUSTOMER_FEATURES: CustomerFeatureItem[] = [
  {
    id: "ordering",
    title: "Medicine Ordering",
    shortBenefit: "Order daily wellness products and essentials from home",
    description:
      "Easily search for over-the-counter healthcare products, pain relief, vitamins, and regular first-aid items. View clear pack sizes and add items directly to your cart.",
    screenshot: "/mockups/mobile/pilldoor_medicine_search_screen.png",
    screenshotAlt: "Medicine search, suggestions, and pack unit selector screen in Pilldoor app",
    bullets: [
      "Search by brand or chemical name",
      "Flexible pack unit options (Strips, Tablets, Bottles)",
      "Clear MRP pricing without hidden convenience fees",
    ],
  },
  {
    id: "upload",
    title: "Prescription Uploads",
    shortBenefit: "Upload doctor prescriptions in seconds via camera or PDF",
    description:
      "Never worry about deciphering complex doctor handwriting. Take a photo with your phone camera, pick an image from your gallery, or upload a multi-page PDF up to 10MB.",
    screenshot: "/mockups/mobile/pilldoor_prescription_attached_screen.png",
    screenshotAlt: "Prescription upload interface in Pilldoor app",
    bullets: [
      "Instant camera capture or gallery selection",
      "Multi-page PDF upload support up to 10MB",
      "Assign to any registered family member profile",
    ],
  },
  {
    id: "family",
    title: "Family Member Management",
    shortBenefit: "Manage health records for your entire household in one place",
    description:
      "Create distinct profiles for your parents, children, spouse, and dependents. Record age, known drug allergies, chronic conditions, and assign custom delivery addresses for each person.",
    screenshot: "/mockups/mobile/pilldoor_family_patients_screen.png",
    screenshotAlt: "Pilldoor Family Patients screen showing member profiles, clinical safety notes, and chronic conditions",
    bullets: [
      "Multiple patient profiles under one account",
      "Save drug allergies and chronic condition context",
      "Deliver directly to elderly parents living elsewhere",
    ],
  },
  {
    id: "review",
    title: "Licensed Prescription Review",
    shortBenefit: "Every prescription verified by a registered clinical pharmacist",
    description:
      "Prescription medications are checked line-by-line by qualified pharmacists at licensed community pharmacies. Dosages, interactions, and doctor signatures are verified before anything is packed.",
    screenshot: "/mockups/mobile/pilldoor_pharmacist_verification_screen.png",
    screenshotAlt: "Pharmacist verification detail view in Pilldoor app showing stock and composition review",
    bullets: [
      "100% human pharmacist review on every prescription",
      "Verification of dosage clarity and validity",
      "Direct phone call button to speak with the dispensing desk",
    ],
  },
  {
    id: "generic",
    title: "Generic Replacement Consent",
    shortBenefit: "Cost-saving generic alternatives only with your explicit approval",
    description:
      "If a prescribed brand is unavailable or an approved bioequivalent generic alternative exists at a lower price, the pharmacist proposes the alternative. You review the savings and approve before fulfillment.",
    screenshot: "/mockups/mobile/pilldoor_pharmacist_verification_screen.png",
    screenshotAlt: "Generic substitution consent interface in Pilldoor app",
    bullets: [
      "Transparent price comparisons between brand and generic",
      "Mandatory customer tap-to-approve consent",
      "Zero unannounced medicine swaps",
    ],
  },
  {
    id: "payments",
    title: "Flexible Payment Options",
    shortBenefit: "Pay securely via Razorpay UPI, Cards, or Cash on Delivery",
    description:
      "Choose the payment method most convenient for you: instant UPI (Google Pay, PhonePe, Paytm), debit/credit cards, net banking, or pay cash to the rider upon delivery.",
    screenshot: "/mockups/mobile/pilldoor_order_payment_screen.png",
    screenshotAlt: "Order payment method selection and bill summary in Pilldoor app",
    bullets: [
      "Razorpay-supported secure digital transactions",
      "Cash on Delivery (COD) supported in serviceable areas",
      "Detailed itemized invoices for reimbursement claims",
    ],
  },
  {
    id: "tracking",
    title: "Real-Time Delivery Tracking",
    shortBenefit: "Follow your order stage-by-stage with 4-digit OTP handover",
    description:
      "Know exactly when your medicine is verified, packed, and dispatched. Track the delivery partner in transit and complete the handover safely using your secret 4-digit code.",
    screenshot: "/mockups/mobile/pilldoor_otp_tracking_screen.png",
    screenshotAlt: "Order tracking and delivery status with 4-digit OTP in Pilldoor app",
    bullets: [
      "Live status stages from review to doorstep arrival",
      "Confidential four-digit delivery OTP code",
      "Heat-sealed tamper-evident packaging guarantee",
    ],
  },
  {
    id: "refills",
    title: "Chronic Refill Opportunities",
    shortBenefit: "One-tap quick refills for ongoing health conditions",
    description:
      "Managing regular monthly medicines for blood pressure, diabetes, thyroid, or cardiac health is seamless. Access past orders and trigger a quick refill with one tap.",
    screenshot: "/mockups/mobile/pilldoor_home_screen.png",
    screenshotAlt: "Quick refill section on Pilldoor home screen",
    bullets: [
      "Quick Refill button for past chronic prescriptions",
      "Preserves original dosage and pack quantities",
      "Re-reviewed by pharmacist to verify validity",
    ],
  },
  {
    id: "alerts",
    title: "Customer Alerts & Clarifications",
    shortBenefit: "Instant notifications when your prescription needs clarification",
    description:
      "Never wonder about the status of your order. Receive timely notifications when your prescription is approved, if the pharmacist needs clarification, or when the delivery partner is arriving.",
    screenshot: "/mockups/mobile/pilldoor_pharmacist_verification_screen.png",
    screenshotAlt: "Order notification and clarification view in Pilldoor app",
    bullets: [
      "Immediate alerts for order milestones",
      "In-app clarification messaging with the pharmacy",
      "Doorstep arrival reminders with OTP display",
    ],
  },
];

// Family Care Pillars for `/family-care`
export const FAMILY_CARE_PILLARS: FamilyCarePillar[] = [
  {
    id: "elderly",
    title: "Caring for Elderly Parents",
    subtitle: "Manage their monthly prescriptions even from across town",
    description:
      "Ordering medicines for aging parents shouldn't involve frantic phone calls and unverified pharmacy stock. Upload their prescriptions, add their home address, and ensure their chronic medicines arrive on time every month.",
    icon: "HeartHandshake",
    bullets: [
      "Save parents' home address as a separate delivery destination",
      "Re-order chronic monthly prescriptions with one tap",
      "Follow delivery progress until the parcel is safely in their hands",
    ],
  },
  {
    id: "children",
    title: "Children's Healthcare",
    subtitle: "Syrups, drops and pediatric prescriptions handled with care",
    description:
      "When a child is unwell, parents need reliable, rapid medicine delivery without leaving their bedside. Upload pediatric doctor prescriptions and get verified formulations packed safely.",
    icon: "Baby",
    bullets: [
      "Pediatric dosage review by qualified pharmacists",
      "Tamper-evident heat-sealed protective packaging",
      "Record children's drug allergies and special dosage instructions",
    ],
  },
  {
    id: "allergies",
    title: "Allergy & Condition Safety",
    subtitle: "Keep health records visible directly beside prescriptions",
    description:
      "Pilldoor attaches known drug allergies (e.g. Penicillin, Sulfa) and chronic conditions (Diabetes, Hypertension) directly to each family profile so pharmacists have full clinical context during review.",
    icon: "ShieldAlert",
    bullets: [
      "Drug allergy alerts displayed on prescription review",
      "Chronic condition tags attached to patient profiles",
      "Prevents dangerous duplicate or contraindicated dispensing",
    ],
  },
  {
    id: "caregiver",
    title: "Multiple Delivery Destinations",
    subtitle: "Send medicines to wherever your family members reside",
    description:
      "Save multiple GPS-pinned delivery addresses under your account: your home, your parents' residence, or your office. Choose the appropriate address with a single tap during prescription upload.",
    icon: "MapPin",
    bullets: [
      "Separate addresses for different family members",
      "GPS-pinned accuracy for accurate doorstep delivery",
      "Clear delivery notes for gated communities and apartments",
    ],
  },
];
