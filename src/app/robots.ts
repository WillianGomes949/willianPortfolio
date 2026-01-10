import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Se tiver alguma rota administrativa, coloque aqui
    },
    sitemap: 'https://www.williangomesdev.com/sitemap.xml',
  }
}