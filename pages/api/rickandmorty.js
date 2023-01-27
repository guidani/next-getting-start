export default async function handler(req, res) {
  const response = await fetch("https://www.boredapi.com/api/activity");
  const data = await response.json();
  res.status(200).json({ data });
}
