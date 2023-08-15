import React, { createContext, useContext, useEffect, useState } from 'react'
import { Alert, AlertProps, Snackbar } from '@mui/material'

export type Notification = Pick<AlertProps, 'children' | 'severity'> | null

interface NotificationProps {
  notification: Notification
  setNotification: (notification: Notification) => void
}

const NotificationContext = createContext({} as NotificationProps)

type NotificationContextProps = {
  children: React.ReactNode
}

export const NotificationContextProvider = ({ children }: NotificationContextProps) => {
  const [notification, setNotification] = useState<Notification>(null)

  useEffect(() => {
    if (notification) {
      console.log(notification?.children)
    }
  }, [notification])

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      {children}
      {!!notification && (
        <Snackbar
          open
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          onClose={() => setNotification(null)}
          autoHideDuration={6000}
        >
          <Alert {...notification} onClose={() => setNotification(null)} />
        </Snackbar>
      )}
    </NotificationContext.Provider>
  )
}

export const useNotificationContext = () => {
  const context = useContext(NotificationContext)

  if (context === undefined) {
    throw new Error('useNotificationContext was used outside of its Provider')
  }

  return context
}
