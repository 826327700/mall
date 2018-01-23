import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

// 应用初始状态
const state = {
    topType:'search',
    topStep:0,
    shopCart:{
        total:1
    }
}

// 定义所需的 mutations
const mutations = {
    //切换搜索栏显示的状态
    SETHAEDTYPE(state,type){
        state.topType=type
    },
    
}


// 创建 store 实例
export default new Vuex.Store({
    state,
    mutations
})