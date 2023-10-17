export default async function getHospital(hid: string) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/hospitals/${hid}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch hospital");
  }
  return await res.json();
}
