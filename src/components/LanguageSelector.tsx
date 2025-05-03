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

type Language = 'en' | 'ru' | 'tj';

export const LanguageSelector = () => {
  const [lng, setLng] = useState<Language>('en');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLanguageChange = (language: Language) => {
    setLng(language);
    setIsDrawerOpen(false);
  };

  const languageOptions = [
    { code: 'en', short: 'EN', long: 'English', flag: '🇺🇸' },
    { code: 'ru', short: 'RU', long: 'Русский', flag: '🇷🇺' },
    { code: 'tj', short: 'TJ', long: 'Тоҷикӣ', flag: '🇹🇯' },
  ] as const;

  return (
    <>
      <div className="sm:block hover:cursor-pointer hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="hover:cursor-pointer">
              {lng.toUpperCase()}
              <span className="sr-only">Toggle language</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {languageOptions.map(({ code, short }) => (
              <DropdownMenuItem
                key={code}
                onClick={() => handleLanguageChange(code)}
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
            <Button variant="outline">{lng.toUpperCase()}</Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="sm:max-w-full sm:rounded-t-2xl px-6 pt-4 pb-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-center w-full">Select a language</h2>
            </div>
            <div className="space-y-4">
              {languageOptions.map(({ code, long, flag }) => (
                <Button
                  key={code}
                  onClick={() => handleLanguageChange(code)}
                  variant={lng === code ? 'secondary' : 'outline'}
                  className="w-full justify-start gap-3"
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
