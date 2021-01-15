import axios from 'axios'
axios.defaults.baseURL = process.env.REACT_APP_API
axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_API_KEY
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export const login = async (data) => {
    try {
        const result = await axios.post('/authentication', data)
        
        if(!result) {
            return {error: true, message: 'There\'s been a problem'}
        }

        
        return {message: 'Successful', response: result}
    } catch (error) {
        if(error.response) {
            //console.log(error.response.data)
            //console.log(error.response.status)
            //return {error: true, message: error.response.data.message}
            return {error: true, message: 'Error in the server'}
        }
        else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request)
            return {error: true, message: 'There\'s been a error'}
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message)
        }
        
        console.log(error.config)
    }
}

export const loginGoogle = () => {
    axios.get('/auth/google')
}