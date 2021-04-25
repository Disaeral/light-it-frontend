import { $host, $authHost} from './index'

 
export const getDeviceComments = async (id) => {
    const {data} = await $host.get('/api/reviews/' + id)
    return data
}

export const createComment = async (id, review) => {
    const {data} = await $authHost.post('/api/reviews/' + id, review)
    return data
}
