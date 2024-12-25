"use client";
import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "../themeBtn";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full p-4 bg-background/50 sticky top-0 border-b backdrop-blur z-50">
      <div className="container mx-auto flex justify-around  items-center">
        <div className=" text-lg font-bold">
          <Link href="/">YOGESH SURWADE</Link>
        </div>
        <div className="hidden md:flex  space-x-4 items-center gap-10">
          <Link className="hover:scale-105 hover:font-semibold transition-transform duration-300" href="/">Home</Link>
          <Link className="hover:scale-105 hover:font-semibold transition-transform duration-300" href="/about">About</Link>
          <Link className="hover:scale-105 hover:font-semibold transition-transform duration-300" href="/contact">Contact</Link>
          <Link className="hover:scale-105 hover:font-semibold transition-transform duration-300" href="/blogs">Blogs</Link>
        </div>
        <div className="md:hidden">
          <Sheet>
            <span className="mx-2">
            <ModeToggle />
            </span>
            <SheetTrigger>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className=" text-lg font-bold">YogeshSurwade</SheetTitle>
                <SheetDescription>
                  <div className="flex text-lg flex-col gap-8 justify-center">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/blogs">Blogs</Link>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:block">
        <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
