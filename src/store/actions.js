import {getHomeSwiper, getHomeNav, getHomeShopList, getRecommendShopList, getSearchGoods} from '../api/index'
import {HOME_SWIPER, HOME_NAV, HOME_SHOP_LIST, RECOMMEND_SHOP_LIST, SEARCH_GOODS} from './mutation-type'

export default {
    async reqHomeSwiper({commit}) {
        const result = await getHomeSwiper()
        commit(HOME_SWIPER, {homeSwiper: result.message})
    },
    async reqHomeNav({commit}) {
        let navData = []
        const result = await getHomeNav()
        for(let key in result.message) {
            result.message[key].forEach(item => {
                navData.push(item)
            })
        }
        commit(HOME_NAV, {homeNav: navData})
    },
    async reqHomeShopList({commit}) {
        const result = await getHomeShopList()
        commit(HOME_SHOP_LIST, {homeShopList: result.message.goods_list})
    },
    async reqRecommendShopList({commit}) {
        const result = await getRecommendShopList()
        commit(RECOMMEND_SHOP_LIST, {recommendShopList: result.message.data})
    },
    async reqSearchGoods({commit}) {
        const result = await getSearchGoods()
        commit(SEARCH_GOODS, {searchGoods: result.message.data})
    }
}