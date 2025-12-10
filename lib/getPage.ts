export async function getPage(slug: string) {
    const pages = (await import('../data/pages.json')).default;
    return pages[slug as keyof typeof pages] || null;
  }
  