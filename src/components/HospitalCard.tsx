"use client";
import Image from "next/image";
import InteractiveCard from "@/components/InteractiveCard";
import { Rating } from "@mui/material";

export default function HospitalCard({
  hospitalName,
  imgSrc,
  onRate,
  star,
}: {
  hospitalName: string;
  imgSrc: string;
  onRate: Function;
  star: number | null;
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
      <div className="w-full h-[20%] p-[10px] font-Montserrat">
        {hospitalName}
      </div>
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className="w-fit"
      >
        <Rating
          className="h-[10%] pl-[10px]"
          name="simple-controlled"
          value={star}
          onChange={(event, newValue) => {
            onRate(hospitalName, newValue);
          }}
        />
      </div>
    </InteractiveCard>
  );
}
