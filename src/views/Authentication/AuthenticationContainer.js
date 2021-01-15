import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { TokenProvider } from '../../context/TokenContext'


const AuthenticationContainer = () => {
    const history = useHistory()
    const [inputValues, setInputValues] = useState('')
    const [loading, setLoading] = useState(false)
    const [token, setToken] = useState(null)

    const handleInput = (event) => {
        const value = event.target.value;
        setInputValues({
            ...inputValues,
            [event.target.name]: value
        });
    };

    const login = async () => {
        let errors = []

        if(!inputValues.user) errors.push('El campo de usuario no puede estar vacio')
        if(!inputValues.password) errors.push('La contraseña no puede estar vacia')
        if(errors.length) {
            for(let i=0; i < errors.length; i++) {
                /*toast.error(errors[i], {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })*/
            }
            
            return
        }

        //Show loading animations
        setLoading(true)

        try {
            /*const response = await axios({
                method: 'POST',
                url: `${process.env.REACT_APP_API}/api/v1/authentication`,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `ApiKey ${process.env.REACT_APP_API_KEY}`
                },
                data: {
                    user: inputValues.user,
                    password: inputValues.password
                }
            })
                
            if(response) {
                const { data: { data: { token} } } = response
                window.sessionStorage.setItem('access_token', token)
                setToken(token)
                history.push('/home')
                return
            }*/

            /*toast.error('Ocurrio un error', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })*/

            return

        } catch(err) {
            //console.error(err)
            /*toast.error(err.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })*/
        }
        
        setLoading(false)        
    }
    
    return(
        <Fragment>

        </Fragment>
    )
}

export default AuthenticationContainer