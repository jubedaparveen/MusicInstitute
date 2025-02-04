'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-3 inset-x-0 max-w-[90%] mx-auto z-50 rounded-full shadow-md shadow-white border uppercase", className)}
    >
      <Menu setActive={setActive}>
        <div className="hover:border-b hover:px-2 hover:py-[.2px] hover:rounded-lg ">
          <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
          </Link>
        </div>

        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <div className="hover:border-b hover:px-2 hover:py-[.2px] hover:rounded-lg ">
              <HoveredLink href="/courses">All Courses</HoveredLink>
            </div>
            <div className="hover:border-b hover:px-2 hover:py-[.2px] hover:rounded-lg ">
              <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
            </div>
            <div className="hover:border-b hover:px-2 hover:py-[.2px] hover:rounded-lg ">
              <HoveredLink href="/courses">Advanced Composition</HoveredLink>
            </div>
            <div className="hover:border-b hover:px-2 hover:py-[.2px] hover:rounded-lg ">
              <HoveredLink href="/courses">Songwriting</HoveredLink>
            </div>
            <div className="hover:border-b hover:px-2 hover:py-[.2px] hover:rounded-lg ">
              <HoveredLink href="/courses">Music Production</HoveredLink>
            </div>
          </div>
        </MenuItem>
        <div className="hover:border-b hover:px-2 hover:py-[.2px] hover:rounded-lg ">
          <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
          </Link>
        </div>

      </Menu>
    </div>
  )
}

export default Navbar