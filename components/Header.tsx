"use client";

import Image from "next/image";
import Link from "next/link";
import { NavItems } from "@/components/NavItems";
import { UserDropDown } from "@/components/UserDropDown";

const Header = ({ user }: { user: User }) => {
  return (
    <header className="header sticky top-0">
      <div className="header-wrapper container">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            className="cursor-pointer"
            height={32}
            width={140}
          />
        </Link>
        <div className="hidden sm:block">
          <NavItems />
        </div>
        <UserDropDown user={user} />
      </div>
    </header>
  );
};
export default Header;
