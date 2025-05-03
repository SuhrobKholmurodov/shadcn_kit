'use client';

import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Language, useLocalization } from '@/hooks/useLocalization';

export const LanguageSelector = () => {
  const { lng, changeLanguage, t } = useLocalization();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLanguageChange = (language: Language) => {
    changeLanguage(language);
    setIsDrawerOpen(false);
  };

  const languageOptions = [
    {
      code: 'en',
      short: t('selectLang.shortFormEn'),
      long: t('selectLang.longFormEn'),
      flag: '🇺🇸',
    },
    {
      code: 'ru',
      short: t('selectLang.shortFormRu'),
      long: t('selectLang.longFormRu'),
      flag: '🇷🇺',
    },
    {
      code: 'tj',
      short: t('selectLang.shortFormTj'),
      long: t('selectLang.longFormTj'),
      flag: '🇹🇯',
    },
  ] as const;

  return (
    <>
      <div className="sm:block hover:cursor-pointer hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="hover:cursor-pointer uppercase">
              {lng}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {languageOptions.map(({ code, short }) => (
              <DropdownMenuItem
                key={code}
                onClick={() => handleLanguageChange(code as Language)}
                className="hover:cursor-pointer"
              >
                {short}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="block sm:hidden">
        <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="uppercase">
              {lng}
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="sm:max-w-full sm:rounded-t-2xl px-6 pt-4 pb-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-center w-full">
                {t('selectLang.selectLang')}
              </h2>
            </div>
            <div className="space-y-4 mt-4">
              {languageOptions.map(({ code, long, flag }) => (
                <Button
                  key={code}
                  onClick={() => handleLanguageChange(code as Language)}
                  variant={lng === (code as Language) ? 'secondary' : 'outline'}
                  className="w-full h-10 justify-start gap-3"
                >
                  <span className="text-xl">{flag}</span>
                  <span>{long}</span>
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};
