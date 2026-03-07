"use client";

import React from "react";
import { NAV_ITEMS } from "@/lib/constants";
import { usePathname } from "next/navigation";

export const NavItems = () => {
  const pathName = usePathname();

  function isActive(path: string): boolean {
    if (path === "/") return pathName === "/";

    return pathName.startsWith(path);
  }

  return (
    <ul className="flex flex-col gap-3 font-medium sm:flex-row sm:gap-10">
      {NAV_ITEMS.map(({ label, href }: { href: string; label: string }) => (
        <li
          key={label}
          className={`cursor-pointer transition-colors hover:text-yellow-500 ${isActive(href) ? "text-gray-100" : ""}`}
        >
          {label}
        </li>
      ))}
    </ul>
  );
};
