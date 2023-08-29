import Banner from "@/components/Banner";
import HospitalCard from "@/components/HospitalCard";
export default function Home() {
  return (
    <main>
      <Banner />
      <h2 className="mt-[50px] ml-[50px] font-Montserrat font-bold text-2xl">
        Available Hospitals
      </h2>
      <div className="m-[50px] flex flex-row flex-wrap gap-[50px] content-around">
        <HospitalCard
          hospitalName="Chulalongkorn Hospital"
          imgSrc="/img/chula.jpeg"
        />
        <HospitalCard
          hospitalName="Rajavithi Hospital"
          imgSrc="/img/rajavithi.jpeg"
        />
        <HospitalCard
          hospitalName="Thammasat University Hospital"
          imgSrc="/img/thammasat.jpg"
        />
      </div>
    </main>
  );
}
