"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "../ui/button";


const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (isOpen && !event.target.closest('#outside-close')) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleCloseMenu = (event: any) => {
    if (event.target.closest('a')) {
      setIsOpen(false);
    }
  };

  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-black rounded-sm ${
            isOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-black rounded-sm ${
            isOpen ? "opacity-0" : ""
          } ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-black rounded-sm ${
            isOpen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
      </div>

      {isOpen && (
        <>
          <div className="fixed top-14 h-screen inset-0 bg-black opacity-50 z-40" onClick={() => setIsOpen(false)} />

          <div 
            id="outside-close" 
            className="absolute right-0 top-14 w-2/3 h-[calc(50vh-54px)] bg-white font-medium text-xl z-50 rounded-bl-xl shadow-lg"
            onClick={handleCloseMenu}
            >
            <div className="flex flex-col gap-3 w-full h-full p-5">
              <p>Hi, there</p>
              <hr />
              <Link href="/">Home</Link>
              <Link href="/work">Works</Link>
              <Link href="/">Contact</Link>

              <Button variant="ghost" className="text-lg flex mt-auto">
                <Link href="/">Login</Link>
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
