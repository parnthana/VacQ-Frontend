import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <div className="h-[50px] bg-deep-blue fixed top-0 right-0 left-0 z-30 border-y-[1px] border-solid border-gray-300 flex flex-row-reverse">
      <div className="h-full flex items-center justify-center px-3">
        <Image
          src={"/img/logo.svg"}
          className="h-[60%] w-auto"
          alt="logo"
          width={0}
          height={0}
          sizes="100vh"
        />
      </div>
      <TopMenuItem title="Booking" pageRef="/booking" />
    </div>
  );
}
