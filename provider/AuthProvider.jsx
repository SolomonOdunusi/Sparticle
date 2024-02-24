"use client"

import {SessionProvider} from 'next-auth/react'

const AuthProvider = ({children}) => {
  return (
    <SessionProvider basePath='/util/auth' >{children}</SessionProvider>
  )
}

export default AuthProvider