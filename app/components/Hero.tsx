import { CandlestickChart } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <div className="flex justify-between m-5 items-center text-white">
      <div className="flex flex-col gap-5">
        <div>
          <button className="flex gap-2 text-sm bg-slate-600 rounded-full py-1 px-4">
            <CandlestickChart />
            Trading Program
          </button>
        </div>

        <h1 className="text-5xl">
          Master the Art of Managing Simulated Capital
        </h1>
      </div>

      <div>
        <div className="flex text-xs gap-7 m-2 text-center">
          <div>
            <h2 className="text-xl">100%</h2>
            <p>Profile Split Up</p>
          </div>
          <div>
            <h2 className="text-2xl">1</h2>
            <p>minimum</p>
          </div>
          <div>
            <h2 className="text-2xl">24/7</h2>
            <p>live support</p>
          </div>
        </div>
        <div className="m-5">
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex gap-3 text-sm m-5">
          <button className="bg-white text-slate-900 rounded-full px-4 py-1">
            Get Funded
          </button>
          <button className="border solid rounded-full px-4 py-1">
            Join Our Program
          </button>
        </div>
      </div>
    </div>
  );
}
