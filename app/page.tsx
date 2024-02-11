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
      <div className={"absolute w-full pt-9 z-10"}>
        <h1 className="text-center mb-9 text-white text-base font-bold">IP Tracker Address</h1>
        <div className={"mx-6 flex dweb:w-1/3 dweb:mx-auto"} >
          <input className={"w-[calc(100%-58px)] rounded-s-2xl p-4"}/>
          <button className={"p-5 bg-black rounded-e-2xl"}>
            <Image src={iconArrow} alt={"icon-arrow-search"}/>
          </button>
        </div>
        <div className={"rounded-2xl bg-white py-10 px-8 mt-12 mx-[12.5%] inline-block w-9/12"}>
          <div className="mb-6 w-full dweb:inline-block dweb:align-top dweb:w-1/4 dweb:mb-0">
            <div>
              <p className={"text-xs text-gray-400 font-semibold text-center dweb:text-left"}>IP ADDRESS</p>
              <p className={"text-s font-semibold text-center dweb:text-left"}>192.212.174.101</p>
            </div>
          </div>
          <div className="mb-6 w-full dweb:inline-block dweb:align-top dweb:w-1/4 dweb:mb-0">
            <div className={"hidden bg-gray-300 h-10 w-px absolute dweb:block"}/>
            <div className="mx-9">
              <p className={"text-xs text-gray-400 font-semibold text-center dweb:text-left"}>LOCATION</p>
              <p className={"text-s font-semibold text-center dweb:text-left"}>Brooklyn, NY 10001</p>
            </div>
          </div>
          <div className="mb-6 w-full dweb:inline-block dweb:align-top dweb:w-1/4 dweb:mb-0">
            <div className={"hidden bg-gray-300 h-10 w-px absolute dweb:block"}/>
            <div className="mx-9">
              <p className={"text-xs text-gray-400 font-semibold text-center dweb:text-left"}>TIMEZONE</p>
              <p className={"text-s font-semibold text-center dweb:text-left"}>UTC -05:00</p>
            </div>
          </div>
          <div className="w-full dweb:inline-block dweb:align-top dweb:w-1/4 dweb:mb-0">
            <div className={"hidden bg-gray-300 h-10 w-px absolute dweb:block"}/>
            <div className="mx-9">
              <p className={"text-xs text-gray-400 font-semibold text-center dweb:text-left"}>ISP</p>
              <p className={"text-s font-semibold text-center dweb:text-left"}>Space X Starlink</p>
            </div>
          </div>
        </div>
      </div>
      <Image className={"w-full h-72"} src={backgroundImage} alt={"background-image-ip-tracker"}/>
      <Map />
    </main>
  )
};

export default IpAddressTrackerPage;
