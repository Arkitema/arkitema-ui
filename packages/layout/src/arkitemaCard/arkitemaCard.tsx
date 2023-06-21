import { Paper, Grid, Typography, Link } from '@mui/material'
import { theme } from '@arkitema/brand'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { styled } from '@mui/material/styles'

export interface CardInfo {
  id: string
  title: string
  subtitle: string
  unit: string
  imageUrl: any
}

export interface CardProps {
  cardKey: number
  cardInfo: CardInfo
  size?: 'small' | 'large' | 'xl'
}

export const ArkitemaCard: React.FC<CardProps> = (props) => {
  const { cardKey, cardInfo, size = 'large' } = props
  const { pathname } = useLocation()

  const [height, setHeight] = useState('350px')
  const [width, setWidth] = useState('350px')
  const [md, setMd] = useState(3)

  useEffect(() => {
    if (size === 'small') {
      setHeight('200px')
      setWidth('200px')
      setMd(2)
    } else if (size === 'xl') {
      setHeight('550px')
      setWidth('550px')
      setMd(5.5)
    }
  }, [size])

  const StyledLinearGradient = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0) 90%)',
    zIndex: 1,
  })

  return (
    <Grid item xs={2} sm={5} md={md} key={cardKey} data-testid='arkitema-card'>
      <Link href={`${pathname}/${cardInfo.id}`}>
        <Paper
          sx={{
            height: height,
            width: width,
            margin: 0,
            overflow: 'hidden',
            position: 'relative',
            borderRadius: 0,
          }}
          elevation={0}
        >
          <StyledLinearGradient />
          <Typography
            variant={size === 'large' ? 'h3' : 'h4'}
            component='div'
            sx={
              size === 'large'
                ? {
                    position: 'absolute',
                    left: 'calc(50% - 11vw)',
                    top: '12%',
                    fontSize: theme.typography.h3,
                    color: theme.palette.common.white,
                    zIndex: 2,
                  }
                : size === 'xl'
                ? {
                    position: 'absolute',
                    top: '12%',
                    left: '14%',
                    fontSize: theme.typography.h1,
                    color: theme.palette.common.white,
                    zIndex: 2,
                  }
                : {
                    position: 'absolute',
                    left: 'calc(50% - 1vw)',
                    fontSize: theme.typography.h3,
                    top: '65%',
                    color: theme.palette.common.white,
                    zIndex: 2,
                  }
            }
          >
            {cardInfo.title}
          </Typography>
          <Typography
            variant={size === 'large' ? 'h2' : 'h3'}
            component='div'
            sx={{
              position: 'absolute',
              top: '74%',
              display: 'flex',
              alignItems: 'center',
              color: theme.palette.common.white,
              zIndex: 2,
              ...(size === 'large'
                ? {
                    right: '0',
                    fontSize: theme.typography.h3,
                  }
                : size === 'xl'
                ? {
                    right: '0',
                    marginRight: '30px',
                    fontSize: theme.typography.h2,
                  }
                : {
                    left: '0',
                    margin: '15px',
                    fontSize: theme.typography.h4,
                    top: '2%',
                  }),
            }}
          >
            <div style={{ marginLeft: 'auto', marginRight: '30px' }}>
              {cardInfo.subtitle}
              {size === 'small' && cardInfo.unit}
            </div>
          </Typography>

          {(size === 'large' || size === 'xl') && (
            <Typography
              component='div'
              sx={{
                position: 'absolute',
                top: '83%',
                display: 'flex',
                alignItems: 'center',
                color: theme.palette.common.white,
                zIndex: 2,
                ...(size === 'large'
                  ? {
                      right: '30px',
                      fontSize: theme.typography.h5,
                    }
                  : size === 'xl'
                  ? { right: '60px', fontSize: theme.typography.h4 }
                  : {
                      right: '35px',
                      fontSize: theme.typography.h4,
                    }),
              }}
            >
              <div style={{ marginLeft: 'auto' }}>{cardInfo.subtitle && cardInfo.unit}</div>
            </Typography>
          )}

          <img src={cardInfo.imageUrl} height={height} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
        </Paper>
      </Link>
    </Grid>
  )
}
