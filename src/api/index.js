import ajax from './ajax'

const BASEURL = 'http://127.0.0.1:3000'

export const getHomeSwiper = () => ajax(BASEURL + '/api/homecasual')

export const getHomeNav = () => ajax(BASEURL + '/api/homenav')

export const getHomeShopList = () => ajax(BASEURL + '/api/homeshoplist')

export const getRecommendShopList = (params) => ajax(BASEURL + '/api/recommendshoplist', params)

export const getSearchGoods = () => ajax(BASEURL + '/api/searchgoods')

export const getPhoneCode = (phone) => ajax(BASEURL + '/api/getcode', {phone})

export const getPhoneCodeLogin = (phone, code) => ajax(BASEURL + '/api/login', {phone, code}, 'POST')

export const getPasswordLogin = (userName, userPassword, captcha) => ajax(BASEURL + '/api/passwordlogin', {userName, userPassword, captcha}, 'POST')

export const getUserInfo = () => ajax(BASEURL + '/api/user')
