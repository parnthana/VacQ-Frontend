import { POST } from "@/app/api/auth/[...nextauth]/route";

export default async function userLogIn(
  userEmail: string,
  userPassword: string,
) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
    }),
  });
  if (!res.ok) {
    throw new Error("Failed to log-in");
  }
  return await res.json();
}
