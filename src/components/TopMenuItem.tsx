import Link from "next/link";

export default function TopMenuItem({
  title,
  pageRef,
}: {
  title: string;
  pageRef: string;
}) {
  return (
    <div className="flex items-center justify-center pr-4 pt-1">
      <Link className="font-Montserrat text-white" href={pageRef}>
        {title}
      </Link>
    </div>
  );
}
