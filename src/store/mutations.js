import {HOME_SWIPER} from './mutation-type'
import state from './state'

export default {
    [HOME_SWIPER](state, {homeSwiper}) {
        state.homeSwiper = homeSwiper
    }
}