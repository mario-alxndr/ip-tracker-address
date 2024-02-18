// Node Modules
import { FormEvent, useState } from "react";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

// Component
import Image from "next/image";

// Lib
import { REGEX } from '@/lib';

// Assets
import iconArrow from '../../assets/icon-arrow.svg';

type TInputIpProps = {
  onChangeIpAddress: (e: FormEvent<HTMLInputElement>) => void;
  refetchGeolocation: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<any, Error>>;
  value: string;
};

const InputIp = (props: TInputIpProps) => {
  const { onChangeIpAddress, refetchGeolocation, value } = props;
  const [errorText, setErrorText] = useState<string>('');

  const handleChangeIpAddress = (e: FormEvent<HTMLInputElement>) => {
    onChangeIpAddress(e);
    setErrorText('');
  };

  const handleClickSearchIp = () => {
    if(REGEX.ipAddress.test(value)) {
      refetchGeolocation();
    } else {
      setErrorText('Please input valid IP');
    }
  };

  return (
    <>
      <div className={"mx-6 flex dweb:w-1/3 dweb:mx-auto"} >
        <input 
          className={"w-[calc(100%-58px)] rounded-s-2xl p-4"}
          onChange={handleChangeIpAddress}
          placeholder="Search for any IP address or domain"
          value={value}
        />
        <button className={"p-5 bg-black rounded-e-2xl"} onClick={handleClickSearchIp}>
          <Image src={iconArrow} alt={"icon-arrow-search"}/>
        </button>
      </div>
      {errorText && (
        <p className="text-center text-red-400">{errorText}</p>
      )}
    </>
  );
};

export default InputIp;
