import React, { useState, useEffect} from 'react'
import './css/AutheticationForm.css'
import {useLocation} from 'react-router-dom'
import Logo from './images/undraw_urban_design_kpu8.svg'
import AutheticationForm from '../components/AuthenticationForm'
import { validateToken } from '../services/TokenValidation.service'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'

const Authentication = () => {
    const history = useHistory()
    const [cookies, setCookie, removeCookie] = useCookies(['token'])
    const [accessToken, setAccessToken] = useState(null)
    const search = useLocation().search
    const token = new URLSearchParams(search).get('token')
    
    const validateAccess = async () => {
        const result = await validateToken(token)        
        
        if(!result.error) {
            const {response: {data}} = result
            setCookie('token', token, {
                //httpOnly: true, 
                sameSite: 'strict', 
                secure: true
            })
            history.push('/home')
        }

    }

    useEffect(() => {
        validateAccess()
    }, [])

    return (
        <>
            <img src={Logo} height="500" width="500"/>
            <AutheticationForm/>
        </>
    )
}

export default Authentication