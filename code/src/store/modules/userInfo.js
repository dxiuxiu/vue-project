
/** 1、设置初始 state */
const state = {
    userName:undefined,
    cityName:'西安'
}

/** 
 * 2、根据应用场景定义 mutations
 * mutation 中操作状态
 * 
 * vue 唯一修改 store 合法的位置
 * mutations 中定义了 state 在不同需要下的更改
 * 
 */
const mutations = {
    /** 第一个参数永远都是 state */
    update:(state,payload) => {
        if(payload.userName){
            state.userName = payload.userName
            return
        } 
        if(payload.userCity){
            state.userCity = payload.userCity
            return
        } 
    }
}

/** 
 * 3、根据应用场景定义 actions
 * actions 中通过 commit 
 * 触发 mutations 中指定的方法
 * 实现 state 更改
 * 
 * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
 * 或者在 vue 代码中通过 this.$store.commit('update',payload)
 * 来达到修改 store 的效果
*/
const actions = {
    // update:({commit})=>{
    //     commit('update',{userCity:'北京'})
    // }
    update:({commit},payload)=>{
        commit('update',payload)
    }
}

/** 创建 store */
export default {
    /** 
     * @error
     * [vuex] unknown action type
     * unknown mutation type
     * 
     * https://blog.csdn.net/qq_34220826/article/details/89214727
     * 
     * why ??
     */
    // namespaced: true, // 开启命名空间
    state,
    mutations,
    actions
}