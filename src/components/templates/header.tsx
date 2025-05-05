import Image from 'next/image';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <div className="bg-[#FFCC00]">
      <div className="container mx-auto max-w-7xl flex flex-row items-center justify-between h-[122px]">
        <div className="flex flex-row items-center gap-4 ">
          <Image src="/logo-black.svg" width={44} height={44} alt="BMP-logo" />
          <span className="text-2xl font-medium leading-[52px] text-[#0E0E0E]">ReNova</span>
        </div>
        <div className="flex flex-row items-center gap-8 text-base font-medium text-[#0E0E0E] uppercase">
          <span>Home</span>
          <span>Services</span>
          <span>Projekte</span>
          <span>Über uns</span>
          <span>Kontakt</span>
        </div>
      </div>
    </div>
  );
};

export { Header };
