import React, { useState, useEffect, createContext, useContext } from 'react'
import { useHistory, withRouter } from "react-router-dom";
import { useCookies } from 'react-cookie'

const TokenContext = createContext({
  isLoggedIn: false
})

export const TokenProvider = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token'])
    const tokenContext = useContext(TokenContext)
    
    const history = useHistory()
    //const location = useLocation()
    const [loginToken, setLoginToken] = useState('')

    useEffect(()=>{
      console.log(tokenContext.isLoggedIn)
        //if(window.location.pathname === '/auth' && cookies.token) {
        // if(!tokenContext.isLoggedIn) {
        //   //history.replace('/auth')
        //   history.push('/home')
        // }

        if(!cookies.hasOwnProperty('token')) {
          removeCookie('token')
          history.push('/auth')
        }
    }, [tokenContext.isLoggedIn]) 

  return (
    <TokenContext.Provider>
        {children}
    </TokenContext.Provider>
  )
}

export default withRouter(TokenContext)