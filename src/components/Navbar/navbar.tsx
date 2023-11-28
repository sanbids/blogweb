import Link from "next/link";
import React from "react";
import { ModeToggle } from "../toggleTheme";
import { LangSelector } from "@/lib/languageSelector";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

function Navbar() {
  return (
    <div className="hidden md:flex justify-between px-5 text-md  md:text-xl lg:text-xl p-3">
      {/* logo */}
      <div className="flex gap-2">
        <img src="" alt="logo" />
        <h1>Mahendra</h1>
      </div>

      {/* link  */}
      <div>
        <ul className="flex gap-y-2 gap-x-5">
          <Link href="/home">Home</Link>
          <Link href="/home">Blog</Link>
          <Link href="/home">Recent post</Link>
          <Link href="/home">About</Link>
          <Link href="/home">Contact</Link>
        </ul>
      </div>

      {/* last parts */}
      <div className="flex gap-y-2 gap-x-5">
        <div className="flex items-center gap-x-1">
          <Input type="text" placeholder="Search..."/>
          <Search/>
        </div>
        <LangSelector/>
        <ModeToggle/>
      </div>
    </div>
  );
}

export default Navbar;
