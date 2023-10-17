import getHospital from "@/libs/getHospital";
import { Hospital } from "@/models/Hospital";
import Image from "next/image";

export default async function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  const res = await getHospital(params.hid);
  const hospitalDetail = res.data as Hospital;
  return (
    <main className={`text-center p-5`}>
      <div className={`flex flex-row my-5`}>
        <Image
          src={hospitalDetail.picture}
          alt={`Hospital Image`}
          width={0}
          height={0}
          sizes={`100vw`}
          className={`rounded-lg w-1/3 h-1/3`}
        />
        <div className={`text-start mx-5`}>
          <div className={`text-2xl font-medium`}>{hospitalDetail.name}</div>
          <div className={`text-lg my-4`}>
            <p>{hospitalDetail.address}</p>
            <p>{hospitalDetail.province}</p>
            <p>{hospitalDetail.postalcode}</p>
            <p>{hospitalDetail.tel}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return [{ hid: "001" }, { hid: "002" }, { hid: "003" }];
}
