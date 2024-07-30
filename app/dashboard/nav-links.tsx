"use client";

import { usePathname } from "next/navigation";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { cn } from "../lib/utils";

const links = [
  {
    name: "home",
    href: "/dashboard",
    icon: <HomeIcon className="w-6" />,
  },
  {
    name: "customers",
    href: "/dashboard/customers",
    icon: <UserGroupIcon className="w-6" />,
  },
  {
    name: "invoices",
    href: "/dashboard/invoices",
    icon: <DocumentDuplicateIcon className="w-6" />,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            {Icon}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
