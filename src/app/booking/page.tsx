import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LocationDateReserve from "@/components/LocationDateReserve";
import getUserProfile from "@/libs/getUserProfile";
import { TextField } from "@mui/material";
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
      <div className="bg-white rounded-xl w-fit px-10 py-10 space-y-5 flex flex-col shadow-xl">
        <div className="text-xl font-bold text-center">Book an appointment</div>
        <div className="w-full space-y-2">
          <div>Name</div>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Your name"
            variant="outlined"
          />
        </div>
        <div className="w-full space-y-2">
          <div>National ID</div>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Your national ID"
            variant="outlined"
          />
        </div>
        <div className="w-fit space-y-2">
          <div>Vaccination Date and Location</div>
          <LocationDateReserve />
        </div>
        <button
          className="block rounded-md bg-sky-blue hover:bg-deep-blue px-3 py-2 
          text-white shadow-sm font-Montserrat font-bold text-2xl"
        >
          Register
        </button>
      </div>
    </main>
  );
}
