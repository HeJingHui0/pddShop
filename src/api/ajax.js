import axios from 'axios'

export default function ajax(url = '', params = {}, type = 'GET') {
    let promise
    return new Promise((resolve, reject) => {
        if(type === 'GET') {
            let paramStr = ''
            Object.keys(params).forEach(item => {
                paramStr += item + '=' + params[item] + '&'
            })
            if(paramStr !== '') {
                paramStr = paramStr.substr(0, paramStr.lastIndexOf('&'))
            }
            url += '?' + paramStr
            promise = axios.get(url)
        }else if(type === 'POST') {
            promise = axios.post(url, params)
        }
        promise.then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(error)
        })
    })
}