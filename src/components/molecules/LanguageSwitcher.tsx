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

const LanguageSwitcher: FC = () => {
  const languages = [
    { value: 'de', label: '🇩🇪' },
    { value: 'en', label: '🇬🇧' },
    { value: 'tr', label: '🇹🇷' },
  ];

  return (
    <Select>
      <SelectTrigger className="w-20 emoji">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-white">
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
