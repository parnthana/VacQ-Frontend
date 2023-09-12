import LocationDateReserve from "@/components/LocationDateReserve";
import { TextField } from "@mui/material";

export default function Booking() {
  return (
    <main
      className="bg-slate-50 w-[100%] flex flex-col items-center justify-center 
    h-[90vh] font-Montserrat"
    >
      <div className="bg-white rounded-xl w-fit px-10 py-10 space-y-5 flex flex-col shadow-xl">
        <div className="text-xl font-bold text-center">Book an appointment</div>
        <div className="w-full space-y-2">
          <div>Name</div>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Your name"
            variant="outlined"
          />
        </div>
        <div className="w-full space-y-2">
          <div>National ID</div>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Your national ID"
            variant="outlined"
          />
        </div>
        <div className="w-fit space-y-2">
          <div>Vaccination Date and Location</div>
          <LocationDateReserve />
        </div>
        <button
          className="block rounded-md bg-sky-blue hover:bg-deep-blue px-3 py-2 
          text-white shadow-sm font-Montserrat font-bold text-2xl"
        >
          Register
        </button>
      </div>
    </main>
  );
}
