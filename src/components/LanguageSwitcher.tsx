'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/types/i18n';

const languages: { code: Locale; name: string }[] = [
  { code: 'de', name: 'Deutsch' },
  { code: 'en', name: 'English' },
  { code: 'tr', name: 'Türkçe' },
];

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (locale: Locale) => {
    // Get the path without the locale prefix
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(-[A-Z]{2})?/, '');
    // Construct the new path with the selected locale
    const newPath = `/${locale}${pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className="px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export { LanguageSwitcher };
