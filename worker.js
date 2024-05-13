addEventListener('fetch', (event) => {
    event.respondWith(
      handleRequest(event.request).catch(
        (err) => new Response(err.message, { status: 500 })
      )
    )
  })
  
  async function handleRequest(request) {
    const { pathname } = new URL(request.url)
  
    if (pathname === '/live/index.m3u8') {
      const url = `https://www.nowtv.com.tr/canli-yayin`
  
      const response = await fetch(url, {
        cf: {
          cacheTtl: 10800,
          cacheEverything: true
        }
      })
  
      if (response.ok) {
        const text = await response.text()
        const stream = text.match(/(?<=daiUrl : ').*?(?=',)/g);
  
        return Response.redirect(stream, 302)
      } else {
        return new Response('Failed to fetch live stream URL', { status: 500 })
      }
    }
  }
  