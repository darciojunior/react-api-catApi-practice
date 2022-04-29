import axios from 'axios'

const api = axios.create({
    baseURL: "https://api.thecatapi.com/"
})

api.interceptors.request.use(async config => {
    const token = 'ef669c1e-8595-44a9-9167-5b5038244a82'

    if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`
    }

    return config
})

export default api;