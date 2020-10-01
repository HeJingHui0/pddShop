import {getHomeSwiper, getHomeNav, getHomeShopList, getRecommendShopList, getSearchGoods, getUserInfo} from '../api/index'
import {HOME_SWIPER, HOME_NAV, HOME_SHOP_LIST, RECOMMEND_SHOP_LIST, SEARCH_GOODS, USER_INFO} from './mutation-type'

export default {
    async reqHomeSwiper({commit}) {
        const result = await getHomeSwiper()
        commit(HOME_SWIPER, {homeSwiper: result.message})
    },
    async reqHomeNav({commit}) {
        const result = await getHomeNav()
        commit(HOME_NAV, {homeNav: result.message})
    },
    async reqHomeShopList({commit}) {
        const result = await getHomeShopList()
        commit(HOME_SHOP_LIST, {homeShopList: result.message.goods_list})
    },
    async reqRecommendShopList({commit}, params) {
        const result = await getRecommendShopList(params)
        commit(RECOMMEND_SHOP_LIST, {recommendShopList: result.message})
    },
    async reqSearchGoods({commit}) {
        const result = await getSearchGoods()
        commit(SEARCH_GOODS, {searchGoods: result.message.data})
    },
    saveUserInfo({commit}, userInfo) {
        commit(USER_INFO, {userInfo})
    },
    async getUserInfo({commit}) {
        const result = await getUserInfo()
        if(result.success_code === 200) {
            commit(USER_INFO, {userInfo: result.message})
        }
    }
}