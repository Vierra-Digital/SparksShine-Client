import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.fullName,
    short_name: site.name,
    description: `Professional, reliable, and affordable cleaning serving ${site.serviceArea}.`,
    start_url: "/",
    display: "standalone",
    background_color: "#0d1f2d",
    theme_color: "#0d1f2d",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
