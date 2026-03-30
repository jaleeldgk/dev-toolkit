async function testEndpoint(url, options = {}) {
  const start = Date.now();
  try {
    const res = await fetch(url, options);
    const duration = Date.now() - start;
    const body = await res.text();
    return {
      status: res.status,
      ok: res.ok,
      duration: duration + 'ms',
      headers: Object.fromEntries(res.headers.entries()),
      body: body.length < 1000 ? body : body.slice(0, 1000) + '...'
    };
  } catch (err) {
    return { error: err.message, duration: (Date.now() - start) + 'ms' };
  }
}

async function healthCheck(urls) {
  const results = await Promise.all(
    urls.map(async url => ({
      url,
      ...(await testEndpoint(url))
    }))
  );
  return results;
}

module.exports = { testEndpoint, healthCheck };
