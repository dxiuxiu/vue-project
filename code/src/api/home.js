import Axios from '../utils/Axios.js'

export function getCategory(url = '/home',params = {}){
    return Axios.get(url,params).then((data) => {
        return data.data
    })
}