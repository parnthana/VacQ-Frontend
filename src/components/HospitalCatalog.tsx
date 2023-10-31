import HospitalCard from "@/components/HospitalCard";
import { Hospital, HospitalsResponse } from "@/models/Hospital";
import Link from "next/link";

export default async function HospitalCatalog({
  hospitalJson,
}: {
  hospitalJson: Object;
}) {
  const hospitalJsonReady = (await hospitalJson) as HospitalsResponse;

  return (
    <div
      style={{
        margin: "20px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignContent: "space-around",
      }}
    >
      {hospitalJsonReady.data.map((hospitalItem: Hospital, index: number) => (
        <Link
          key={index}
          href={`/hospital/${hospitalItem.id}`}
          className={`w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:p-6 lg:p-8`}
        >
          <HospitalCard
            hospitalName={hospitalItem.name}
            imgSrc={hospitalItem.picture}
          />
        </Link>
      ))}
    </div>
  );
}
