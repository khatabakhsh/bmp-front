import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { getDictionary } from '@/lib/i18n';
import { Locale } from '@/types/i18n';
import Image from 'next/image';
import Link from 'next/link';

export async function Header({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl flex flex-row items-center justify-between h-24 px-6 2xl:px-0">
        <Link href={`#`} className="flex flex-row items-center gap-2">
          <Image src="/logo-orange.svg" width={44} height={44} alt="ReNova-logo" />
          <span className="text-2xl font-medium leading-[52px]">ReNova</span>
        </Link>
        <nav className="flex flex-row items-center gap-8">
          <Link href={`#`} className="text-base font-medium text-[#0E0E0E] hover:text-[#FFCC00]">
            {dict.navigation.home}
          </Link>
          <Link href={`#`} className="text-base font-medium text-[#0E0E0E] hover:text-[#FFCC00]">
            {dict.navigation.services}
          </Link>
          <Link href={`#`} className="text-base font-medium text-[#0E0E0E] hover:text-[#FFCC00]">
            {dict.navigation.projects}
          </Link>
          <Link href={`#`} className="text-base font-medium text-[#0E0E0E] hover:text-[#FFCC00]">
            {dict.navigation.about}
          </Link>
          <Link href={`#`} className="text-base font-medium text-[#0E0E0E] hover:text-[#FFCC00]">
            {dict.navigation.contact}
          </Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
