import { Atom, MoveRight } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between bg-slate-600 m-5  p-3 text-white rounded-full items-center">
      <div className="flex gap-2">
        <Atom />
        <p className="font-bold text-xl">Orbite</p>
      </div>
      <div className="flex gap-7 text-sm">
        <a href="/">Plans</a>
        <a href="/">How it Works</a>
        <a href="/">Affiliate</a>
        <a href="/">FAQ</a>
        <a href="/">Blog</a>
      </div>
      <div className="text-sm border rounded-full flex py-1 px-4 gap-3">
        Login
        <MoveRight />
      </div>
    </div>
  );
}
