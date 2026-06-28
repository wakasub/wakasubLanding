import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wakasub — The Rewards Hub of Nigeria",
    short_name: "Wakasub",
    description:
      "Reward your people with airtime, data and cash in seconds, and resell airtime & data at Nigeria's best rates.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2f6bed",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/waka 512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/waka 512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
