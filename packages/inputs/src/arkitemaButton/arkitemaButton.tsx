import { Button } from '@mui/material'
import React from 'react'
import { theme } from '@arkitema/brand'

import { styled } from '@mui/material/styles'

export interface ArkitemaButtonProps {
  text: string
  onclick: any
  disabled?: boolean
  sx?: any
  dataTestId?: string
}

export const ArkitemaButton: React.FC<ArkitemaButtonProps> = (props) => {
  const { text, onclick, disabled, sx, dataTestId = 'arkitema-button' } = props

  const CustomButton = styled(Button)({
    paddingLeft: '20px',
    marginLeft: '10px',
    marginRight: '10px',
    paddingRight: '20px',
    borderRadius: '50px',
    backgroundColor: theme.palette.common.white,
    color: '#333',
    border: disabled ? '1px solid #dbdbdb' : '1px solid #333',
    '&:hover': {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    ...sx,
  })

  return (
    <CustomButton onClick={onclick} disabled={disabled} data-testid={dataTestId}>
      {text}
    </CustomButton>
  )
}
