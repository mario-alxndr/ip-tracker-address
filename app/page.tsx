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
      <div className={"absolute w-full pt-9"}>
        <h1 className="text-center mb-9 text-white text-base font-bold">IP Tracker Address</h1>
        <div className={"w-1/3 mx-auto"} >
          <input className={"w-[calc(100%-58px)] rounded-s-2xl p-4"}/>
          <button>
            <Image src={iconArrow} alt={"icon-arrow-search"}/>
          </button>
        </div>
      </div>
      <Image className={"w-full"} src={backgroundImage} alt={"background-image-ip-tracker"}/>
      <Map />
    </main>
  )
};

export default IpAddressTrackerPage;
