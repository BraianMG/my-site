import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, BoxProps } from '@mui/material'

const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  minHeight: '100vh',
  width: '90%',
  maxWidth: '1440px',
  padding: '70px 0 15px 0',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
}))

export default function BMGSection(props: BoxProps) {
  return <StyledBox component='section' {...props} />
}
