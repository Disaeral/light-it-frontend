import axios from "axios"

const $commentsHost = axios.create({
    baseURL: process.env.REACT_APP_COMMENTS_API_URL
})
export const getDeviceComments = async (id) => {
    const {data} = await $commentsHost.get('/api/reviews/' + id)
    return data
}