import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import TopMenuItem from "./TopMenuItem";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  return (
    <div className="h-[50px] bg-deep-blue fixed top-0 right-0 left-0 z-30 border-y-[1px] border-solid border-gray-300 flex flex-row-reverse justify-between">
      <div className="h-full flex items-center justify-center px-3">
        <TopMenuItem title="Booking" pageRef="/booking" />
        <Image
          src={"/img/logo.svg"}
          className="h-[60%] w-auto"
          alt="logo"
          width={0}
          height={0}
          sizes="100vh"
        />
      </div>
      <div className="flex flex-row space-x-2 h-full items-center justify-center">
        {session ? (
          <Link href="/api/auth/signout">
            <div className="flex items-center h-full px-2 text-white font-Montserrat pt-1">
              Sign-Out of {session.user?.name}
            </div>
          </Link>
        ) : (
          <Link href="api/auth/signin">
            <div className="flex items-center h-full px-2 text-white font-Montserrat pt-1">
              Sign-In
            </div>
          </Link>
        )}
        <TopMenuItem title="My Booking" pageRef="/mybooking" />
      </div>
    </div>
  );
}
