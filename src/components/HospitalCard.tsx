"use client";
import InteractiveCard from "@/components/InteractiveCard";
import { Rating } from "@mui/material";
import Image from "next/image";

export default function HospitalCard({
  hospitalName,
  imgSrc,
  onRate,
  star,
}: {
  hospitalName: string;
  imgSrc: string;
  onRate?: Function;
  star?: number | null;
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
      {onRate && star ? (
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
              onRate ? onRate(hospitalName, newValue) : null;
            }}
          />
        </div>
      ) : null}
    </InteractiveCard>
  );
}
