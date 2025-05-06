import Image from 'next/image';
import { FC } from 'react';
import { LanguageSwitcher } from '../molecules/LanguageSwitcher';
import { getDictionary } from '@/lib/i18n';

const Header: FC<{ dict: Awaited<ReturnType<typeof getDictionary>> }> = ({ dict }) => {
  return (
    <div className="bg-[#FFCC00]">
      <div className="container mx-auto max-w-7xl flex flex-row items-center justify-between h-[122px] px-6 2xl:px-0">
        <div className="flex flex-row items-center gap-4 ">
          <Image src="/logo-black.svg" width={44} height={44} alt="BMP-logo" />
          <span className="text-2xl font-medium leading-[52px] text-[#0E0E0E]">ReNova</span>
        </div>
        <div className="flex flex-row items-center gap-8 text-base font-medium text-[#0E0E0E] uppercase">
          <a href="#" className="min-w-20">
            {dict.navigation.home}
          </a>
          <a href="#" className="min-w-20">
            {dict.navigation.services}
          </a>
          <a href="#" className="min-w-20">
            {dict.navigation.projects}
          </a>
          <a href="#" className="min-w-20">
            {dict.navigation.about}
          </a>
          <a href="#" className="min-w-20">
            {dict.navigation.contact}
          </a>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export { Header };
