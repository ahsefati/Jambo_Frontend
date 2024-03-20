import * as api from '../index'

export const getCityCurrentWeather = async (formdata) => {
    try {
        const {data} = await api.getCityCurrentWeather(formdata)
        return data
    } catch (error) {
        return error
    }
}