import axios from 'axios'

// const API = axios.create({baseURL: 'http://localhost:5000/'})
const API = axios.create({baseURL: 'https://jambo-backend-unhx.onrender.com/'})

API.interceptors.request.use((req)=>{
    if (localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req
})


// User
export const signIn = (formData) => API.post("/users/signin", formData)
export const signUp = (formData) => API.post("/users/signup", formData)
export const sendVerificationCode = (formData) => API.patch("/users/sendVerificationCode", formData)
export const changeUserPassWithVerificationCode = (formData) => API.patch("/users/changeUserPassWithVerificationCode", formData)
export const updateUserInfo = (updatedInfo) => API.patch("/users/updateUserInfo", updatedInfo)
export const changeUserPass = (updatedInfo) => API.patch("/users/changeUserPass", updatedInfo)
export const updateUserAvatar = (updatedAvatar) => API.patch("/users/updateUserAvatar", updatedAvatar)

// City Summary
export const getCitySummary = (formData) => API.post("/wiki/citysummary", formData)

// City Weather
export const getCityCurrentWeather = (formData) => API.post("/weather/citycurrentweather", formData)

