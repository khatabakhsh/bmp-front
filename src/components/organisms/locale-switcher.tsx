'use client';

import { FC } from 'react';
import {
  Select,
  SelectItem,
  SelectGroup,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '../atoms/Select';
import { usePathname, useRouter } from 'next/navigation';
import { Locale } from '@/lib/i18n';
import Image from 'next/image';

const LanguageSwitcher: FC<{ lang: Locale }> = ({ lang }) => {
  const router = useRouter();
  const pathname = usePathname();

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const languages = [
    { value: 'de', label: <Image src="/icons/flag-de.svg" alt="de" width={20} height={20} /> },
    { value: 'en', label: <Image src="/icons/flag-gb.svg" alt="gb" width={20} height={20} /> },
    { value: 'tr', label: <Image src="/icons/flag-tr.svg" alt="tr" width={20} height={20} /> },
  ];

  return (
    <Select
      value={lang}
      onValueChange={(value) => router.push(redirectedPathname(value as Locale))}
    >
      <SelectTrigger className="w-20  border-none shadow-none focus:ring-0 focus-visible:ring-0">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-white w-18">
        <SelectGroup>
          {languages.map((language) => (
            <SelectItem key={language.value} value={language.value}>
              {language.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export { LanguageSwitcher };
