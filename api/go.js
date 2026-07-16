const DEFAULT_DESTINATION = "https://www.rr95k.com/?ch=0cf28df51e";

module.exports = function handler(req, res) {
  const destination = process.env.CAMBODIA_AFFILIATE_URL || DEFAULT_DESTINATION;

  res.setHeader("X-Robots-Tag", "noindex, nofollow");
  res.setHeader("Cache-Control", "no-store");
  res.writeHead(302, {
    Location: destination,
  });
  res.end();
};
