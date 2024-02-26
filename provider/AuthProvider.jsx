"use client"

import {SessionProvider} from 'next-auth/react'

const AuthProvider = ({children}) => {
  return (
    <SessionProvider basePath="/utils/auth">{children}</SessionProvider>
  )
}

export default AuthProvider