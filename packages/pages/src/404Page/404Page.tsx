import { Stack, Typography, Container } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArkitemaButton } from '@arkitema/inputs'
import { theme } from '@arkitema/brand'

export const NotFoundPage: React.FC<unknown> = () => {
  const navigate = useNavigate()
  return (
    <Container sx={{ paddingTop: '200px', paddingLeft: '100px' }}>
      <Typography
        variant='h2'
        component='div'
        sx={{
          color: '#333333',
          fontFamily: theme.typography.fontFamily,
        }}
      >
        {'Page Not Found'}
      </Typography>
      <Typography id='404-description' sx={{ paddingTop: '10px' }}>
        Sorry, but the page you were trying to view does not exist.
      </Typography>
      <Stack direction='row' spacing={2} justifyContent='flex-start' sx={{ paddingTop: 5 }}>
        <ArkitemaButton text='Go to front page' onClick={() => navigate('/projects')}></ArkitemaButton>
        <ArkitemaButton text='Go back' onClick={() => navigate(-1)}></ArkitemaButton>
      </Stack>
    </Container>
  )
}
