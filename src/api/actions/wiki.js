import * as api from '../index'

export const getCitySummary = async (formdata) => {
    try {
        const {data} = await api.getCitySummary(formdata)
        return data
    } catch (error) {
        return error
    }
}