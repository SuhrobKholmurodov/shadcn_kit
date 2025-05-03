import i18n from '@/lib/i18n' 
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

export type Language = 'EN' | 'RU' | 'TJ'

export const useLocalization = () => {
  const { t } = useTranslation()
  const [lng, setLng] = useState<Language>(i18n.language as Language)

  useEffect(() => {
    const handleLanguageChange = (language: string) => {
      setLng(language as Language)
    }

    i18n.on('languageChanged', handleLanguageChange)
    return () => {
      i18n.off('languageChanged', handleLanguageChange)
    }
  }, [])

  const changeLanguage = (language: Language) => {
    i18n.changeLanguage(language)
  }

  return { t, lng, changeLanguage }
}
