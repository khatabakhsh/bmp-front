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
    { value: 'de', label: '🇩🇪' },
    { value: 'en', label: '🇬🇧' },
    { value: 'tr', label: '🇹🇷' },
  ];

  return (
    <Select
      value={lang}
      onValueChange={(value) => router.push(redirectedPathname(value as Locale))}
    >
      <SelectTrigger className="w-20 emoji">
        <SelectValue className="emoji" />
      </SelectTrigger>
      <SelectContent className="bg-white emoji">
        <SelectGroup>
          {languages.map((language) => (
            <SelectItem key={language.value} value={language.value} className="emoji">
              {language.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export { LanguageSwitcher };
