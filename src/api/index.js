import ajax from './ajax'

const BASEURL = 'http://127.0.0.1:3000'

export const getHomeSwiper = () => ajax(BASEURL + '/api/homecasual')