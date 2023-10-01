import { CardPanel } from "@/components/CardPanel";

export default function Hospital() {
  return (
    <main className={`p-5`}>
      <h2 className="mt-[50px] ml-[50px] font-Montserrat font-bold text-2xl">
        Available Hospitals
      </h2>
      <CardPanel />
    </main>
  );
}
