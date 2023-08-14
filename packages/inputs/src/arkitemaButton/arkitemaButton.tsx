import { Box, Button, CircularProgress, SxProps } from '@mui/material'
import React, { ReactElement } from 'react'
import { theme } from '@arkitema/brand'

export interface ArkitemaButtonProps {
  text: string
  children?: ReactElement
  startIcon?: ReactElement
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  sx?: SxProps
  dataTestId?: string
  component?: React.ElementType
  loading?: boolean
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

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ position: 'relative' }}>
        <Button
          sx={buttonStyle}
          onClick={onClick}
          disabled={disabled || loading}
          data-testid={dataTestId}
          component={component}
          startIcon={startIcon}
        >
          {text}
          {children}
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
    </Box>
  )
}
