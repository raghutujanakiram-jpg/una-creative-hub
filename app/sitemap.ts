import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://unacreativehub.agency";

  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/about`, priority: 0.8 },
    { url: `${base}/solutions`, priority: 0.9 },
    { url: `${base}/work`, priority: 0.9 },
    { url: `${base}/insights`, priority: 0.9 },
    { url: `${base}/engage`, priority: 0.9 },
  ];
}
