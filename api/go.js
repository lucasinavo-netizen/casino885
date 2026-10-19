const DEFAULT_DESTINATION = "https://www.myan99.me/m/home?affiliateCode=seom202";

module.exports = function handler(req, res) {
  if (/^\/go\/vn(?:\.html)?\/?$/.test((req.url || '').split('?')[0])) {
    res.setHeader("X-Robots-Tag", "noindex");
    res.statusCode = 410;
    return res.end("Gone");
  }
  const destination = process.env.CAMBODIA_AFFILIATE_URL || DEFAULT_DESTINATION;

  res.setHeader("X-Robots-Tag", "noindex, nofollow");
  res.setHeader("Cache-Control", "no-store");
  res.writeHead(302, {
    Location: destination,
  });
  res.end();
};
