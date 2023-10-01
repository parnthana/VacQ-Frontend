import Image from "next/image";

export default function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  const mockHospitalRepo = new Map();
  mockHospitalRepo.set("001", {
    name: "Chulalongkorn Hospital",
    image: "/img/chula.jpeg",
  });
  mockHospitalRepo.set("002", {
    name: "Rajavithi Hospital",
    image: "/img/rajavithi.jpeg",
  });
  mockHospitalRepo.set("003", {
    name: "Thammasat University Hospital",
    image: "/img/thammasat.jpg",
  });
  return (
    <main className={`text-center p-5`}>
      <div className={`flex flex-row my-5`}>
        <Image
          src={mockHospitalRepo.get(params.hid).image}
          alt={`Hospital Image`}
          width={0}
          height={0}
          sizes={`100vw`}
          className={`rounded-lg w-[30%] `}
        />
        <div className={`text-2xl mx-5`}>
          {mockHospitalRepo.get(params.hid).name}
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return [{ hid: "001" }, { hid: "002" }, { hid: "003" }];
}
