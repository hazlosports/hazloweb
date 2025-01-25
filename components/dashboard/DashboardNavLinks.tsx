"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
  {
    id: 0,
    name: "Home",
    href: "/dashboard",
  },
  {
    id: 1,
    name: "Coaches",
    href: "/dashboard/coaches",
  },
  {
    id: 2,
    name: "Posts",
    href: "/dashboard/posts",
  },
];

export function DashboardNavLinks() {
  const location = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={clsx(
            location === link.href
              ? "text-white bg-primary/10 font-semibold"
              : "text-slate-500 hover:text-white",
            "flex items-center gap-3 p-3 rounded-xl"
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
