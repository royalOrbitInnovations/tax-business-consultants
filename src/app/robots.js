export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api",
    },
    sitemap: "https://taxbusinessconsultants.com/sitemap.xml",
    host: "https://taxbusinessconsultants.com",
  };
}
