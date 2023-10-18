import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import TopMenuItem from "./TopMenuItem";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
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
      {session ? (
        <Link href="/api/auth/signout">
          <div className="flex items-center absolute left-2 h-full px-2 text-white text-sm font-Montserrat">
            Sign-Out of {session.user?.name}
          </div>
        </Link>
      ) : (
        <Link href="api/auth/signin">
          <div className="flex items-center absolute left-2 h-full px-2 text-white text-sm font-Montserrat">
            Sign-In
          </div>
        </Link>
      )}
    </div>
  );
}
