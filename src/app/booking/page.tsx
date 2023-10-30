import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import BookingForm from "@/components/BookingForm";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";

export default async function Booking() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const profile = await getUserProfile(session.user.token);
  var createdAt = new Date(profile.data.createdAt);
  return (
    <main
      className="bg-slate-50 w-[100%] flex flex-col items-center justify-center 
    h-[90vh] font-Montserrat space-y-8"
    >
      <div
        className={
          "bg-white rounded-xl w-fit space-y-5 flex flex-col shadow-xl p-4"
        }
      >
        <table className={`table-auto border-separate border-spacing-3`}>
          <tbody>
            <tr>
              <td>Name</td>
              <td className={"font-bold"}>{profile.data.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td className={"font-bold"}>{profile.data.email}</td>
            </tr>
            <tr>
              <td>Tel.</td>
              <td className={"font-bold"}>{profile.data.tel}</td>
            </tr>
            <tr>
              <td>Member Since</td>
              <td className={"font-bold"}>{createdAt.toLocaleDateString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <BookingForm />
    </main>
  );
}
