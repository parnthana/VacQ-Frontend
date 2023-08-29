import Image from "next/image";
export default function HospitalCard({
  hospitalName,
  imgSrc,
}: {
  hospitalName: string;
  imgSrc: string;
}) {
  return (
    <div className="w-[300px] h-[300px] rounded-lg shadow-lg">
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
    </div>
  );
}
