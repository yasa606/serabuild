import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://serabuild.vercel.app";

  return [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/services`,
    },
    {
      url: `${baseUrl}/services/house-construction`,
    },
    {
      url: `${baseUrl}/services/home-renovation`,
    },
    {
      url: `${baseUrl}/services/waterproofing`,
    },
    {
      url: `${baseUrl}/projects`,
    },
    {
      url: `${baseUrl}/projects/three-bedroom-house`,
    },
    {
      url: `${baseUrl}/projects/modern-minimalist-villa`,
    },
    {
      url: `${baseUrl}/projects/multi-family-duplex`,
    },
    {
      url: `${baseUrl}/construction-cost`,
    },
    {
      url: `${baseUrl}/about`,
    },
    {
      url: `${baseUrl}/process`,
    },
    {
      url: `${baseUrl}/contact`,
    },
    {
      url: `${baseUrl}/request-quote`,
    },
    {
      url: `${baseUrl}/blog`,
    },
    {
      url: `${baseUrl}/blog/how-to-choose-construction-contractor-ethiopia`,
    },
    {
      url: `${baseUrl}/blog/understanding-residential-zoning-addis-ababa`,
    },
    {
      url: `${baseUrl}/blog/managing-moisture-addis-ababa-rainy-season`,
    },
    {
      url: `${baseUrl}/privacy`,
    },
    {
      url: `${baseUrl}/terms`,
    },
  ];
}
