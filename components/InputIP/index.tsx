// Node Modules
import { FormEvent, useState } from "react";

// Component
import Image from "next/image";

// Assets
import iconArrow from '../../assets/icon-arrow.svg';

const InputIp = (props: any) => {
  const { initialIpAddress } = props;
  const [ipAddress, setIpAddress] = useState<string>(initialIpAddress || '-');

  const handleChangeIpAddress = (e: FormEvent<HTMLInputElement>) => {
    setIpAddress(e.currentTarget.value);
  };

  return (
    <div className={"mx-6 flex dweb:w-1/3 dweb:mx-auto"} >
      <input 
        className={"w-[calc(100%-58px)] rounded-s-2xl p-4"} 
        value={ipAddress}
        onChange={handleChangeIpAddress}  
      />
      <button className={"p-5 bg-black rounded-e-2xl"}>
        <Image src={iconArrow} alt={"icon-arrow-search"}/>
      </button>
    </div>
  );
};

export default InputIp;
