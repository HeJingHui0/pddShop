import {HOME_SWIPER, HOME_NAV, HOME_SHOP_LIST} from './mutation-type'
import state from './state'

export default {
    [HOME_SWIPER](state, {homeSwiper}) {
        state.homeSwiper = homeSwiper
    },
    [HOME_NAV](state, {homeNav}) {
        state.homeNav = homeNav
    },
    [HOME_SHOP_LIST](state, {homeShopList}) {
        state.homeShopList = homeShopList
    }
}