export default async function getUserProfile(token: string) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/me", {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error("Cannot get user profile");
  }
  return res.json();
}
