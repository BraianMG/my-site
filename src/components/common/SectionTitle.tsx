import React from 'react'
import { styled } from '@mui/material/styles'
import { Typography, TypographyProps } from '@mui/material'

const StyledTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '2rem',
}))

export default function SectionTitle(props: TypographyProps) {
  return <StyledTypography variant='h4' textAlign='center' {...props} />
}
