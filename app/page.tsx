'use client';

// Node Modules
import React, { useMemo } from "react";
import dynamic from "next/dynamic";

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
      <Map />
    </main>
  )
};

export default IpAddressTrackerPage;
