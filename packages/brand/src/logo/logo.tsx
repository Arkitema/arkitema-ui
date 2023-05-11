import React, { CSSProperties } from 'react'
import { ArkitemaLogo } from '../assets'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { theme } from '../theme'

export interface LogoProps {
  sxImage?: Record<string, unknown>
  sxText?: Record<string, unknown>
  link: string
  title: string
}

export function Logo(props: LogoProps) {
  const { sxImage, sxText, link, title } = props
  const width = sxImage?.width ? (sxImage?.width as string) : '200px'
  const height = sxImage && sxImage.height ? (sxImage.height as string) : '32px'

  const textSize = Number(parseInt(height, 10)) * 1.274
  const margin = Number(parseInt(height, 10)) * -0.1

  return (
    <Link
      to={link}
      aria-label='logo'
      data-testid='logo'
      style={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'inline-block',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img
          alt='carbon-base-logo'
          style={{
            marginTop: margin + 'px',
            width: width,
            ...(sxImage as CSSProperties),
          }}
          src={ArkitemaLogo}
        />
        <Typography
          variant='h1'
          component='div'
          sx={{
            flexGrow: 1,
            marginLeft: '11.27px',
            font:  theme.typography.fontFamily,
            fontSize: textSize + 'px',
            fontWeight: 'medium',
            color: theme.palette.common.black,
            ...sxText,
          }}
        >
          {title}
        </Typography>
      </div>
    </Link>
  )
}
