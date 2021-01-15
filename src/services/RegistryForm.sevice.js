import axios from 'axios'
axios.defaults.baseURL = process.env.REACT_APP_API
axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_API_KEY
axios.defaults.headers.post['Content-Type'] = 'application/json'

export const saveRegistry = async (data) => {    
    try {
        const response = await axios.post('/registry', data)
        //const {data: {data}} = response
        console.log(response)
        if(!response) {
            return {error: true, message: 'There\'s been a problem'}
        }

        return {message: 'Successful', response: response}
    } catch (err) {
        console.error(err.message)
        return {error: true, message: 'Successful'}
    }
}

export const saveUser = async (data) => {    
    try {
        const response = await axios.post('/user', data)
        const {data: {data}} = response
        console.log(data)
        if(!response) {
            return {error: true, message: 'There\'s been a problem'}
        }

        return {message: 'Successful', response: response}
    } catch (err) {
        console.log(err.message)
        return {error: true, message: err.message}
    }
}

export const saveCompany = async (data) => {
    try {
        //const 
        const result = await axios.post('/company', data)

        if(!result) {
            return {
                error: true, 
                message: 'There\'s been a problem', 
                status_code: 500
            }
        }

        return {message: 'Successful'}
    } catch (err) {
        console.error(err)
        return{
            error: true,
            message: 'Error in the server',
            status_code: 500
        }
    }
}