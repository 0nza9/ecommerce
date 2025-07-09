

"use client";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Link href={href}>
      <Button
      variant="outline" className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}>
        {children}
      </Button>
    </Link>
  );
};

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
    const pathname= usePathname();
    const [isSidebarOpen, setIsSidebarOpen]= useState(true);
  return (
    <nav
      className={`h-20 flex border-b justify-between font-medium bg-white ${poppins.className}`}
    >
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-5xl font-extrabold leading-tight")}>Onza</span>
      </Link>

      <NavbarSidebar
      open={isSidebarOpen}
      onOpenChange={setIsSidebarOpen}
      items={navbarItems}
      
      />

      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem key={item.href} {...item} 
          href={item.href}
          isActive={pathname==item.href}/>
        ))}
      </div>
      <div className="hidden lg:flex">
        <Button
          asChild
          variant="secondary"
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-orange-400" transition-colors text-lg>
            <Link href="/sign-i n">
          Log in 
            </Link>
        </Button>
        <Button
        asChild
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-orange-500 hover:bg-text-black" transition-colors text-lg>
          <Link href="/sign-up">
          start selling
          </Link>
        </Button>

      </div>


      <div className="flex lg:hidden items-center justify-center">
        <Button
        variant="ghost"
        className="size-12 border-transparent bg-white"
        onClick={()=> setIsSidebarOpen(true)}
        >
          <MenuIcon />
          
        </Button>


      </div>
    </nav>
  );
};
