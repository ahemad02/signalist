import Image from "next/image";
import Link from "next/link";
import { NavItems } from "@/components/NavItems";
import { UserDropDown } from "@/components/UserDropDown";
import { searchStocks } from "@/lib/actions/finnhub.actions";

const Header = async ({ user }: { user: User }) => {
  const initialStocks = await searchStocks();

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
          <NavItems initialStocks={initialStocks} />
        </div>
        <UserDropDown user={user} initialStocks={initialStocks} />
      </div>
    </header>
  );
};
export default Header;
