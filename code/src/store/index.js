import Vue from 'vue'
import Vuex from 'vuex'
import useInfo from './modules/userInfo'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        useInfo
    }
})