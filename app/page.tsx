'use client';

// Node Modules
import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Assets
import backgroundImage from '../assets/pattern-bg-desktop.png';
import iconArrow from '../assets/icon-arrow.svg';

const IpAddressTrackerPage = () => {
  const Map = useMemo(() => dynamic(
    () => import('@/components/Map'),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])

  return (
    <main className="min-h-screen">
      <div className={"absolute w-full pt-9 z-1"}>
        <h1 className="text-center mb-9 text-white text-base font-bold">IP Tracker Address</h1>
        <div className={"w-1/3 mx-auto flex"} >
          <input className={"w-[calc(100%-58px)] rounded-s-2xl p-4"}/>
          <button className={"p-5 bg-black rounded-e-2xl"}>
            <Image src={iconArrow} alt={"icon-arrow-search"}/>
          </button>
        </div>
        <div className={"rounded-2xl bg-white py-10 px-8 mt-12 mx-40 flex justify-between"}>
          <div>
            <p className={"text-xs text-gray-400 font-semibold"}>IP ADDRESS</p>
            <p className={"font-semibold"}>192.212.174.101</p>
          </div>
          <div className={"bg-gray-300 h-auto w-px"}/>
          <div>
            <p className={"text-xs text-gray-400 font-semibold"}>LOCATION</p>
            <p className={"font-semibold"}>Brooklyn, NY 10001</p>
          </div>
          <div className={"bg-gray-300 h-auto w-px"}/>
          <div>
            <p className={"text-xs text-gray-400 font-semibold"}>TIMEZONE</p>
            <p className={"font-semibold"}>UTC -05:00</p>
          </div>
          <div className={"bg-gray-300 h-auto w-px"}/>
          <div>
            <p className={"text-xs text-gray-400 font-semibold"}>ISP</p>
            <p className={"font-semibold"}>Space X Starlink</p>
          </div>
        </div>
      </div>
      <Image className={"w-full"} src={backgroundImage} alt={"background-image-ip-tracker"}/>
      <Map />
    </main>
  )
};

export default IpAddressTrackerPage;
