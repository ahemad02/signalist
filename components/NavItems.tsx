"use client";

import React from "react";
import { NAV_ITEMS } from "@/lib/constants";
import { usePathname } from "next/navigation";
import SearchCommand from "./SearchCommand";

export const NavItems = ({
  initialStocks,
}: {
  initialStocks: StockWithWatchlistStatus[];
}) => {
  const pathName = usePathname();

  function isActive(path: string): boolean {
    if (path === "/") return pathName === "/";

    return pathName.startsWith(path);
  }

  return (
    <ul className="flex flex-col gap-3 font-medium sm:flex-row sm:gap-10">
      {NAV_ITEMS.map(({ label, href }: { href: string; label: string }) => {
        if (label === "Search")
          return (
            <li key="search-trigger">
              <SearchCommand
                renderAs="text"
                label="Search"
                initialStocks={initialStocks}
              />
            </li>
          );
        return (
          <li
            key={label}
            className={`cursor-pointer transition-colors hover:text-yellow-500 ${isActive(href) ? "text-gray-100" : ""}`}
          >
            {label}
          </li>
        );
      })}
    </ul>
  );
};
