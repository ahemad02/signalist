"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { NavItems } from "@/components/NavItems";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const UserDropDown = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    router.push("/sign-in");
  };

  const user = {
    name: "John Doe",
    email: "aungminthein@gmail.com",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-3 text-gray-4 hover:text-yellow-500"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden flex-col items-start md:flex">
            <span className="text-base font-medium text-gray-400">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400">
        <DropdownMenuLabel>
          <div className="relative flex items-center gap-2 py-2">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="flex items-center bg-yellow-500 text-yellow-100">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-base font-medium text-gray-400">
                {user.name}
              </span>
              <span className="text-gray-500">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-600" />
        <DropdownMenuItem className="block focus:bg-transparent sm:hidden">
          <nav>
            <NavItems />
          </nav>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="sm:hidden" />
        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-base font-medium text-gray-100 transition-colors focus:bg-transparent focus:text-yellow-500"
        >
          <LogOutIcon className="mr-2 hidden h-4 w-4 sm:block" />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
