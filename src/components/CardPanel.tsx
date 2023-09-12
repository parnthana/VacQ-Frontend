"use client";
import HospitalCard from "@/components/HospitalCard";
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
  return (
    <div>
      <div className="m-[50px] flex flex-row flex-wrap gap-[50px] content-around">
        <HospitalCard
          star={ratingList.get("Chulalongkorn Hospital") || null}
          hospitalName="Chulalongkorn Hospital"
          imgSrc="/img/chula.jpeg"
          onRate={(hospital: string, star: number | null) => {
            dispatchRating({
              hospitalName: hospital,
              star: star,
            });
          }}
        />
        <HospitalCard
          star={ratingList.get("Rajavithi Hospital") || null}
          hospitalName="Rajavithi Hospital"
          imgSrc="/img/rajavithi.jpeg"
          onRate={(hospital: string, star: number | null) => {
            dispatchRating({
              hospitalName: hospital,
              star: star,
            });
          }}
        />
        <HospitalCard
          star={ratingList.get("Thammasat University Hospital") || null}
          hospitalName="Thammasat University Hospital"
          imgSrc="/img/thammasat.jpg"
          onRate={(hospital: string, star: number | null) => {
            dispatchRating({
              hospitalName: hospital,
              star: star,
            });
          }}
        />
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
