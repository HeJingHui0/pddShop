import {getHomeSwiper, getHomeNav, getHomeShopList} from '../api/index'
import {HOME_SWIPER, HOME_NAV, HOME_SHOP_LIST} from './mutation-type'

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
    }
}