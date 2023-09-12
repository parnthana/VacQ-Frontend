import Banner from "@/components/Banner";
import HospitalCard from "@/components/HospitalCard";
import { CardPanel } from "@/components/CardPanel";

export default function Home() {
  return (
    <main>
      <Banner />
      <h2 className="mt-[50px] ml-[50px] font-Montserrat font-bold text-2xl">
        Available Hospitals
      </h2>
      <CardPanel />
    </main>
  );
}
