import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import type { FC } from 'react'

interface Props {
  defaultValue?: string | number
  id?: string
  label?: React.ReactNode
  onChange?: (event: SelectChangeEvent<any>, child: React.ReactNode) => void
  options?: { name: string | number; value: string | number }[]
  placeholder?: string
  size?: 'small' | 'medium'
  value?: string | number
  variant?: 'standard' | 'outlined' | 'filled'
}

export const BMGSelect: FC<Props> = props => {
  const {
    defaultValue = '',
    id,
    label,
    onChange,
    options = [],
    placeholder,
    size = 'medium',
    value,
    variant = 'outlined',
  } = props
  const { t } = useTranslation('common')

  return (
    <Select
      id={id}
      value={value}
      defaultValue={defaultValue}
      label={label}
      onChange={onChange}
      size={size}
      variant={variant}
      placeholder={placeholder}
    >
      {options.map(o => (
        <MenuItem key={o.value} value={o.value}>
          {t(o.name.toString())}
        </MenuItem>
      ))}
    </Select>
  )
}
