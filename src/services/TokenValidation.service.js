import axios from 'axios'
axios.defaults.baseURL = process.env.REACT_APP_API
axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_API_KEY
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export const validateToken = async (token) => {
    try {
        const result = await axios.post('/validate-token', {token: token})        
        return {response: result}
    } catch(e) {
        console.error(e.message)
        return {error: true, message: e.message}
    }

}