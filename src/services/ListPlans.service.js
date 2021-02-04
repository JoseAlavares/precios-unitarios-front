import axios from 'axios'
axios.defaults.baseURL = process.env.REACT_APP_API
axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_API_KEY
axios.defaults.headers.post['Content-Type'] = 'application/json'

export const getPlans = async () => {
    try {
        const response = await axios.get('/plan')

        if(!response)
            return{
                error: true,
                message: 'There\'s been a problem'
            }

        return{
            message: 'Successful',
            response: response
        }
    } catch (error) {
        console.error(error.message)
        return {
            error: true,
            message: 'Error in the service'
        }
    }
}