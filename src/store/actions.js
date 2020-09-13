import {getHomeSwiper} from '../api/index'
import {HOME_SWIPER} from './mutation-type'

export default {
    async reqHomeSwiper({commit}) {
        const result = await getHomeSwiper()
        commit(HOME_SWIPER, {homeSwiper: result.message.data})
    }
}