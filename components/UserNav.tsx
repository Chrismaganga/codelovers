import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CreditCard, DoorClosed, Home, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export const navItems = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
];

export function UserNav({
  name,
  email,
  image,
}: {
  name: string;
  email: string;
  image: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10 rounded-full">
            <AvatarImage
              src="data:image/jpeg;base64,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"
              alt="logo"
              width={200}
              height={200}
            />
            <AvatarFallback>Chris</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {navItems.map((item, index) => (
            <DropdownMenuItem asChild key={index}>
              <Link
                href={item.href}
                className="w-full flex justify-between items-center"
              >
                {item.name}
                <span>
                  <item.icon className="w-4 h-4" />
                </span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="w-full flex justify-between items-center"
          asChild
        >
          <LogoutLink>
            Logout{" "}
            <span>
              <DoorClosed className="w-4 h-4" />
            </span>
          </LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
