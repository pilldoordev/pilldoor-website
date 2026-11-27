export interface OtcMedicineItem {
  id: string;
  name: string;
  packSize: string;
  category: string;
  description: string;
  price: number;
  image: string;
  imageAlt: string;
  defaultPackUnit: string;
}

export const OTC_MEDICINES: OtcMedicineItem[] = [
  {
    id: "ors-sachet",
    name: "Oral Rehydration Salts (ORS)",
    packSize: "21 g Sachet",
    category: "Hydration",
    description: "WHO-formula electrolyte powder for rapid daily rehydration.",
    price: 22,
    image: "/images/medicines/ors-sachet.jpg",
    imageAlt: "Oral Rehydration Salts (ORS) 21 g sachet",
    defaultPackUnit: "Sachet",
  },
  {
    id: "vitamin-c-zinc",
    name: "Vitamin C + Zinc Chewables",
    packSize: "Strip of 15 Tablets",
    category: "Daily Immunity",
    description: "Chewable daily immunity and antioxidant wellness supplement.",
    price: 65,
    image: "/images/medicines/vitamin-c-zinc.jpg",
    imageAlt: "Vitamin C and Zinc chewable tablets strip and bottle",
    defaultPackUnit: "Strip",
  },
  {
    id: "adhesive-bandages",
    name: "Adhesive Fabric Bandages",
    packSize: "Box of 20 Strips",
    category: "First Aid",
    description: "Breathable, water-resistant sterile strips for minor cuts.",
    price: 45,
    image: "/images/medicines/adhesive-bandages.jpg",
    imageAlt: "Adhesive fabric bandages box with sterile strips",
    defaultPackUnit: "Box",
  },
  {
    id: "antiseptic-liquid",
    name: "Antiseptic Liquid Solution",
    packSize: "100 ml Bottle",
    category: "Wound Care",
    description: "Gentle skin and first-aid cleansing antiseptic liquid.",
    price: 68,
    image: "/images/medicines/antiseptic-liquid.jpg",
    imageAlt: "Antiseptic liquid solution 100 ml bottle",
    defaultPackUnit: "Bottle",
  },
  {
    id: "pain-relief-balm",
    name: "Soothing Pain Relief Balm",
    packSize: "25 g Jar",
    category: "Topical Relief",
    description: "Cooling menthol & eucalyptus balm for headaches and soreness.",
    price: 85,
    image: "/images/medicines/pain-relief-balm.jpg",
    imageAlt: "Soothing pain relief balm 25 g jar",
    defaultPackUnit: "Jar",
  },
  {
    id: "digital-thermometer",
    name: "Digital Clinical Thermometer",
    packSize: "1 Unit",
    category: "Home Care",
    description: "Fast 60-second reading thermometer with clear LCD display.",
    price: 175,
    image: "/images/medicines/digital-thermometer.jpg",
    imageAlt: "Digital clinical thermometer with LCD screen",
    defaultPackUnit: "Unit",
  },
  {
    id: "hand-sanitizer",
    name: "Alcohol Hand Sanitizer Gel",
    packSize: "100 ml Bottle",
    category: "Hygiene",
    description: "70% alcohol rinse-free moisturizing hand hygiene gel.",
    price: 50,
    image: "/images/medicines/hand-sanitizer.jpg",
    imageAlt: "Alcohol hand sanitizer gel 100 ml flip-cap bottle",
    defaultPackUnit: "Bottle",
  },
];
