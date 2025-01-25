export default async function sitemap() {
  const baseUrl = "https://hazlosports.com";
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/dashboard`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/dashboard/posts`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/dashboard/coaches`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
    },
  ];
}
