import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddHospitalForm from "@/components/AddHospitalForm";
import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import getUserProfile from "@/libs/getUserProfile";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

export default async function Hospital() {
  const hospitals = getHospitals();
  let profile = null;
  const session = await getServerSession(authOptions);
  if (session && session.user.token) {
    profile = await getUserProfile(session.user.token);
  }
  return (
    <main className={`p-5`}>
      <h2 className="mt-[50px] text-center font-Montserrat font-bold text-2xl">
        Available Hospitals
      </h2>
      <Suspense
        fallback={
          <p className={`font-Montserrat text-center p-4 m-4`}>
            Loading ... <LinearProgress />
          </p>
        }
      >
        <HospitalCatalog hospitalJson={hospitals} />
      </Suspense>
      {profile && profile.data.role == "admin" ? <AddHospitalForm /> : null}
    </main>
  );
}
