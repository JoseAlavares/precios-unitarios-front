import React, { useState, useEffect, createContext } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie'

const TokenContext = createContext()

export const TokenProvider = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token'])
    
    const history = useHistory()
    const location = useLocation()
    const [loginToken, setLoginToken] = useState('')

    useEffect(()=>{
        if(location.pathname === '/auth' && cookies.token) {
          history.push('/home')
        }

        if(!cookies.hasOwnProperty('token')) {
          history.push('/auth')
        }
    }, []) 

  return (
    <TokenContext.Provider>
        {children}
    </TokenContext.Provider>
  )
}

export default TokenContext