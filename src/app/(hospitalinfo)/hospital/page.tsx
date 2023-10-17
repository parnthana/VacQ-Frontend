import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

export default async function Hospital() {
  const hospitals = getHospitals();
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
    </main>
  );
}
