import Link from "next/link";
import { translations } from "@/lib/translations";

export function Breadcrumb() {
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600">
      <Link href="/application-management" className="text-blue-600">
        Application Management
      </Link>
      <span>/</span>
      <Link href="/application-management/home" className="text-blue-600">
        Home
      </Link>
      <span>/</span>
      <Link
        href="/application-management/home/banner"
        className="text-blue-600"
      >
        Banner
      </Link>
      <span>/</span>
      <span className="">Add New Banner </span>
    </div>
  );
}
