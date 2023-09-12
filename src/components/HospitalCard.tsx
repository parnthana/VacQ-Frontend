import Image from "next/image";
import InteractiveCard from "@/components/InteractiveCard";

export default function HospitalCard({
  hospitalName,
  imgSrc,
}: {
  hospitalName: string;
  imgSrc: string;
}) {
  return (
    <InteractiveCard contentName={hospitalName}>
      <div className="w-full h-[70%] relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt="Hospital Image"
          fill={true}
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="w-full h-[30%] p-[10px] font-Montserrat">
        {hospitalName}
      </div>
    </InteractiveCard>
  );
}
