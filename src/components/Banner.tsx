"use client";
import Image from "next/image";
import { useState } from "react";

export default function Banner() {
  const banners = [
    "/img/banner.svg",
    "/img/banner2.svg",
    "/img/banner3.svg",
    "/img/banner4.svg",
  ];
  const [index, setIndex] = useState(0);

  return (
    <div className="h-[20%] w-full flex flex-row bg-slate-100 p-10">
      <div
        className="w-1/2 flex items-center justify-center"
        onClick={() => setIndex(index + 1)}
      >
        <Image
          src={banners[index % 3]}
          alt="cover"
          width={0}
          height={0}
          className="w-[400px]"
        />
      </div>
      <div className="w-1/2 font-Montserrat flex flex-col items-center justify-center pl-[10px]">
        <h1 className="font-bold text-sky-blue text-3xl">
          Prevent and help end the pandemic
        </h1>
        <h3 className="mt-[30px] text-lg">
          Protect yourself and others around you by taking the vaccine today..
        </h3>
      </div>
    </div>
  );
}
