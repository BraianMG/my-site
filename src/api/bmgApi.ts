import axios from 'axios'

const bmgApi = axios.create({ baseURL: '/api' })

export default bmgApi
