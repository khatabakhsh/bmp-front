import 'server-only';
import type { Locale } from '@/types/i18n';

const dictionaries = {
  de: () => import('@/dictionaries/de.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  tr: () => import('@/dictionaries/tr.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
