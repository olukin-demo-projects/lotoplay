export function GET(): Response {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                 process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 
                 'http://localhost:3000'
  
  const robots = {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
      },
      {
        userAgent: 'Claude-Web',
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }

  const robotsTxt = robots.rules
    .map((rule) => {
      const directives = []
      if (rule.allow) directives.push(`Allow: ${rule.allow}`)
      if (rule.disallow) directives.push(`Disallow: ${rule.disallow}`)
      return `User-agent: ${rule.userAgent}\n${directives.join('\n')}`
    })
    .join('\n\n') + `\n\nSitemap: ${robots.sitemap}`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
