import React from 'react'
import { AppBar, Box, Toolbar, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { LogoProps, Logo, theme } from '@arkitema/brand'

export interface LinkItem {
  link: string
  title: string
}

export interface ArkitemaAppBarProps {
  showPageLinks: boolean
  navItems?: LinkItem[]
  title: string
  logoProps: LogoProps
}

export const ArkitemaAppBar: React.FC<ArkitemaAppBarProps> = (props) => {
  const { showPageLinks, navItems, logoProps } = props
  const navigate = useNavigate()

  const currentUrl = window.location.href
  const url = new URL(currentUrl)
  const pathSegments = url.pathname.split('/')
  const location = pathSegments[1]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='sticky'
        color='default'
        sx={{
          backgroundColor: theme.palette.grey[50],
          maxHeight: '100px',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Logo link={logoProps.link} sxText={logoProps.sxText} sxImage={logoProps.sxImage} title={logoProps.title} />
          {showPageLinks && (
            <Box sx={{ display: { xs: 'none', sm: 'block', alignItems: 'top' } }}>
              {navItems &&
                navItems.map((item) => {
                  return (
                    <Button
                      key={item.title}
                      sx={{ color: '#333333', font: 'Matter' }}
                      style={{
                        textTransform: 'none',
                        font: 'Matter',
                        fontSize: '19px',
                        marginLeft: '23px',
                        marginTop: '33px',
                        marginBottom: '24px',
                        opacity: location.toLocaleLowerCase() === item.title.toLocaleLowerCase() ? 1 : 0.5,
                        padding: 0,
                      }}
                      onClick={() => {
                        navigate(item.link)
                      }}
                    >
                      {item.title}
                    </Button>
                  )
                })}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
