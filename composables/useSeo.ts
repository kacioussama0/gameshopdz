// Small helpers so every page builds absolute URLs and JSON-LD the same way

export const useSiteUrl = () => {
  const config = useRuntimeConfig()
  const base = String(config.public.siteUrl || 'https://gameshopdz.com').replace(/\/$/, '')
  const absolute = (path = '/') => `${base}${path.startsWith('/') ? path : `/${path}`}`
  return { base, absolute }
}

// Adds a <script type="application/ld+json"> (structured data for Google).
// "<" is escaped so text coming from WooCommerce can never close the script tag.
export const useJsonLd = (key: string, data: () => Record<string, any> | null) => {
  useHead(() => {
    const value = data()
    if (!value) return {}
    return {
      script: [{
        key,
        type: 'application/ld+json',
        innerHTML: JSON.stringify(value).replace(/</g, '\\u003c'),
      }],
    }
  })
}
