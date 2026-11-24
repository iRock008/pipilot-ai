export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('[STRIPPED 128 bytes]');
}
