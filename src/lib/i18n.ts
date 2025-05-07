import 'server-only';

export const i18n = {
  defaultLocale: 'de',
  locales: ['en', 'de', 'tr'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

const dictionaries = {
  de: () => import('@/dictionaries/de.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  tr: () => import('@/dictionaries/tr.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
