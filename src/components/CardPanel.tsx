"use client";
import HospitalCard from "@/components/HospitalCard";
import Link from "next/link";
import { useReducer } from "react";

export function CardPanel() {
  const ratingReducer = (
    ratingList: Map<string, number | null>,
    action: {
      hospitalName: string;
      star: number | null;
    },
  ) => {
    if (action.star == null) {
      ratingList.delete(action.hospitalName);
      return new Map(ratingList);
    } else {
      return new Map(ratingList.set(action.hospitalName, action.star));
    }
  };
  const [ratingList, dispatchRating] = useReducer(
    ratingReducer,
    new Map<string, number | null>(),
  );

  // Mock Data
  const mockHospitalRepo = [
    { hid: "001", name: "Chulalongkorn Hospital", image: "/img/chula.jpeg" },
    { hid: "002", name: "Rajavithi Hospital", image: "/img/rajavithi.jpeg" },
    {
      hid: "003",
      name: "Thammasat University Hospital",
      image: "/img/thammasat.jpg",
    },
  ];
  return (
    <div>
      <div className="m-[50px] flex flex-row flex-wrap gap-[50px] content-around">
        {mockHospitalRepo.map((hospitalItem) => (
          <Link href={`/hospital/${hospitalItem.hid}`} className={`w-1/5`}>
            <HospitalCard
              star={ratingList.get(hospitalItem.name) || null}
              hospitalName={hospitalItem.name}
              imgSrc={hospitalItem.image}
              onRate={(hospital: string, star: number | null) => {
                dispatchRating({ hospitalName: hospital, star: star });
              }}
            />
          </Link>
        ))}
      </div>
      <div className="pl-10">
        {Array.from(ratingList).map((hospital) => (
          <div
            key={hospital[0]}
            onClick={() =>
              dispatchRating({
                hospitalName: hospital[0],
                star: null,
              })
            }
          >
            {hospital[0]} Rating = {hospital[1]}
          </div>
        ))}
      </div>
    </div>
  );
}
