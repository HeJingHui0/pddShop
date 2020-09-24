import ajax from './ajax'

const BASEURL = 'http://127.0.0.1:3000'

export const getHomeSwiper = () => ajax(BASEURL + '/api/homecasual')

export const getHomeNav = () => ajax(BASEURL + '/api/homenav')

export const getHomeShopList = () => ajax(BASEURL + '/api/homeshoplist')

export const getRecommendShopList = (params) => ajax(BASEURL + '/api/recommendshoplist', params)

export const getSearchGoods = () => ajax(BASEURL + '/api/searchgoods')
