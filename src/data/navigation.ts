export interface NavLinkItem {
  label: string;
  href: string;
}

export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.pharma.pilldoor";
export const APP_PACKAGE_NAME = "com.pharma.pilldoor";

export const PRIMARY_NAV_LINKS: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Features", href: "/features" },
  { label: "For Families", href: "/family-care" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Order Medicines",
    links: [
      { label: "Google Play Store App", href: PLAY_STORE_URL },
      { label: "How It Works", href: "/how-it-works" },
      { label: "App Features", href: "/features" },
      { label: "Family Healthcare", href: "/family-care" },
      { label: "Prescription Upload", href: "/how-it-works#upload" },
      { label: "Customer FAQs", href: "/#faqs" },
    ],
  },
  {
    title: "Customer Support",
    links: [
      { label: "Help & Contact Desk", href: "/contact" },
      { label: "Prescription Assistance", href: "/contact?topic=prescription_help" },
      { label: "Order Tracking Help", href: "/contact?topic=order_help" },
      { label: "Report a Problem", href: "/contact?topic=order_help" },
    ],
  },
  {
    title: "For Partners",
    links: [
      { label: "Pharmacy Partnership", href: "/pharmacy-partners" },
      { label: "PharmaOps Platform", href: "/pharmacy-partners#modules" },
      { label: "Request Partner Demo", href: "/pharmacy-partners#demo" },
      { label: "Delivery Fleet PWA", href: "/delivery-partners" },
    ],
  },
  {
    title: "Company & Legal",
    links: [
      { label: "About Pilldoor", href: "/about" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Data Deletion", href: "/data-deletion" },
    ],
  },
] as const;
