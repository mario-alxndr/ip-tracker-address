'use client';

// Node Modules
import React, { FormEvent, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Component
import Image from "next/image";
import InputIp from "@/components/InputIP";

// Lib
import { fetchGeolocation } from "@/lib";
import { PositionContext } from '@/lib/context';

// Assets
import backgroundImage from '../assets/pattern-bg-desktop.png';

require('dotenv').config()

const queryClient = new QueryClient();

const IpAddressTrackerPage = () => {
  const { data: initialGeoLocationData, isLoading, refetch: refetchGeolocation } = useQuery({
    queryKey: ['get-geolocation'], 
    queryFn: () => fetchGeolocation(inputIpAddress || ''),
  }, queryClient);
  const {
    ip,
    isp: ispData = '',
    location: locationData,
  } = initialGeoLocationData || {};

  const {
    city = '',
    country = '',
    geonameId = '',
    lat,
    lng,
    timezone: timezoneData,
  } = locationData || {};

  const [inputIpAddress, setInputIpAddress] = useState<string>('');

  const handleChangeIpAddress = (e: FormEvent<HTMLInputElement>) => {
    setInputIpAddress(e.currentTarget.value);
  };

  const Map = useMemo(() => dynamic(
    () => import('@/components/Map'),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), []);

  useEffect(() => {
    setInputIpAddress(ip);
  }, [isLoading]);

  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen">
        <div className={"absolute w-full pt-9 z-10"}>
          <h1 className="text-center mb-9 text-white text-base font-bold">IP Tracker Address</h1>
          {!isLoading && (
            <InputIp value={inputIpAddress} onChangeIpAddress={handleChangeIpAddress} refetchGeolocation={refetchGeolocation}/>
          )}
          <div className={"rounded-2xl bg-white py-10 px-8 mt-12 mx-[12.5%] inline-block w-9/12"}>
            <div className="mb-6 w-full dweb:inline-block dweb:align-top dweb:w-1/4 dweb:mb-0">
              <div>
                <p className={"text-xs text-gray-400 font-semibold text-center dweb:text-left"}>IP ADDRESS</p>
                {ip !== '' && (
                  <p className={"text-s font-semibold text-center dweb:text-left"}>{ip}</p>
                )}
              </div>
            </div>
            <div className="mb-6 w-full dweb:inline-block dweb:align-top dweb:w-1/4 dweb:mb-0">
              <div className={"hidden bg-gray-300 h-10 w-px absolute dweb:block"}/>
              <div className="mx-9">
                <p className={"text-xs text-gray-400 font-semibold text-center dweb:text-left"}>LOCATION</p>
                {city !== '' && country !== '' && geonameId !== '' && (
                  <p className={"text-s font-semibold text-center dweb:text-left"}>{`${city} ${country} ${geonameId}`}</p>
                )}
              </div>
            </div>
            <div className="mb-6 w-full dweb:inline-block dweb:align-top dweb:w-1/4 dweb:mb-0">
              <div className={"hidden bg-gray-300 h-10 w-px absolute dweb:block"}/>
              <div className="mx-9">
                <p className={"text-xs text-gray-400 font-semibold text-center dweb:text-left"}>TIMEZONE</p>
                {timezoneData !== '' && (
                  <p className={"text-s font-semibold text-center dweb:text-left"}>{timezoneData}</p>
                )}
              </div>
            </div>
            <div className="w-full dweb:inline-block dweb:align-top dweb:w-1/4 dweb:mb-0">
              <div className={"hidden bg-gray-300 h-10 w-px absolute dweb:block"}/>
              <div className="mx-9">
                <p className={"text-xs text-gray-400 font-semibold text-center dweb:text-left"}>ISP</p>
                {ispData !== '' && (
                  <p className={"text-s font-semibold text-center dweb:text-left"}>{ispData}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <Image className={"w-full h-72"} src={backgroundImage} alt={"background-image-ip-tracker"}/>
        {!isLoading && (
          <PositionContext.Provider value={{ lat: lat, lng: lng }}>
            <Map />
          </PositionContext.Provider>
        )}
      </main>
    </QueryClientProvider>
  )
};

export default IpAddressTrackerPage;
