import React from 'react'
import { styled } from '@mui/material/styles'
import { Button, ButtonProps } from '@mui/material'

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.common.white,
  borderRadius: '10px',
  height: '3rem',
}))

export default function BMGButton(props: ButtonProps) {
  return <StyledButton {...props} />
}
