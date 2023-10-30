"use client";
// import LocationDateReserve from "@/components/LocationDateReserve";
import { addBooking } from "@/redux/features/bookSlice";
import { AppDispatch } from "@/redux/store";
import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BookingItem } from "../../interfaces";

export default function BookingForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [nationalId, setNationalId] = useState<string>("");
  const [hospital, setHospital] = useState<string>("");
  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const makeBooking = () => {
    if (firstName && lastName && nationalId && hospital && bookingDate) {
      const item: BookingItem = {
        firstName: firstName,
        lastName: lastName,
        nationalId: nationalId,
        hospital: hospital,
        bookingDate: dayjs(bookingDate).format("DD/MM/YYYY"),
      };
      dispatch(addBooking(item));
    }
  };
  return (
    <div className="bg-white rounded-xl w-fit px-10 py-10 space-y-5 flex flex-col shadow-xl">
      <div className="text-xl font-bold text-center">Book an appointment</div>
      <div className="w-full space-y-2">
        <div>Name</div>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Your first name"
          variant="outlined"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="w-full space-y-2">
        <div>Last Name</div>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Your last name"
          variant="outlined"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="w-full space-y-2">
        <div>National ID</div>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Your national ID"
          variant="outlined"
          onChange={(e) => setNationalId(e.target.value)}
        />
      </div>
      <div className="w-fit space-y-2">
        <div>Vaccination Date and Location</div>
        <div
          className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5
    flex flex-row justify-center"
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className="bg-white"
              value={bookingDate}
              onChange={(value) => setBookingDate(value)}
            />
            <Select
              variant="standard"
              name="location"
              id="location"
              className="h-[2em] w-[200px]"
              onChange={(e: SelectChangeEvent) => {
                setHospital(e.target.value);
              }}
            >
              <MenuItem value="Chulalongkorn Hospital">
                Chulalongkorn Hospital
              </MenuItem>
              <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
              <MenuItem value="Thammasat University Hospital">
                Thammasat University Hospital
              </MenuItem>
            </Select>
          </LocalizationProvider>
        </div>
        <button
          className="block rounded-md bg-sky-blue hover:bg-deep-blue px-3 py-2
          text-white shadow-sm font-Montserrat font-bold text-2xl"
          onClick={() => makeBooking()}
        >
          Register
        </button>
      </div>
    </div>
  );
}
