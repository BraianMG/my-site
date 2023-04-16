import React from 'react'
import { BMGSelect } from '../ui'
import { languages } from '@/libs/constants'
import { useRouter } from 'next/router'
import { SelectChangeEvent } from '@mui/material'

export const LanguageSelector = () => {
  const router = useRouter()
  const { locale, defaultLocale } = router

  const handleChange = (event: SelectChangeEvent<any>) => {
    event.preventDefault()
    router.push('/', router.asPath, { locale: event.target.value })
  }

  return (
    <BMGSelect
      options={languages}
      onChange={handleChange}
      defaultValue={locale ?? defaultLocale}
      size='small'
    />
  )
}
