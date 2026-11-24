export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  const { paymentId } = req.body;
  const apiKey = process.env.PI_API_KEY;
  const r = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {
    method: 'POST',
    headers: { 'Authorization': `Key ${apiKey}`, 'Content-Type': 'application/json' }
  });
  const data = await r.json();
  return res.status(r.status).json(data);
}
