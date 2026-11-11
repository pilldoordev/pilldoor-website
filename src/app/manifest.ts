import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pilldoor — Healthcare Connected. Medicines Delivered.",
    short_name: "Pilldoor",
    description:
      "A connected healthcare delivery ecosystem connecting patients, clinical pharmacists, and professional delivery teams.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8FAFC",
    theme_color: "#0D4E3A",
    icons: [
      {
        src: "/icons/pilldoor-logo-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-squircle-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-logo-1024.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
  };
}

