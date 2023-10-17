export default async function getHospitals() {
  await new Promise((resolve, reject) => setTimeout(resolve, 5000));
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/hospitals");
  if (!res.ok) {
    throw new Error("Failed to fetch hospitals");
  }
  return await res.json();
}
