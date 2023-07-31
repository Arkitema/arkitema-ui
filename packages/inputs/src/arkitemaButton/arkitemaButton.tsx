import { Button, CircularProgress, SxProps } from '@mui/material'
import React, { ReactElement } from 'react'
import { theme } from '@arkitema/brand'

export interface ArkitemaButtonProps {
  text: string
  children?: ReactElement
  startIcon?: ReactElement
  onClick?: () => void
  disabled?: boolean
  sx?: SxProps
  dataTestId?: string
  component?: React.ElementType
  loading?: boolean | null
}

export const ArkitemaButton: React.FC<ArkitemaButtonProps> = (props) => {
  const {
    children,
    component = 'button',
    loading,
    startIcon,
    text,
    onClick,
    disabled,
    sx,
    dataTestId = 'arkitema-button',
  } = props

  const buttonStyle = {
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
  }

  if (loading) {
    return (
      <Button sx={buttonStyle} disabled={true} data-testid={dataTestId} startIcon={startIcon} component={component}>
        <CircularProgress size={24.5} />
      </Button>
    )
  }
  return (
    <Button
      sx={buttonStyle}
      onClick={onClick}
      disabled={disabled}
      data-testid={dataTestId}
      component={component}
      startIcon={startIcon}
    >
      {text}
      {children}
    </Button>
  )
}
