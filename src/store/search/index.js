import { reqGetSearchInfo } from '@/api'
//准备actions对象——响应组件中用户的动作
const actions = {
    //获取search数据
    async getSearchList({commit},params){
        let result = await reqGetSearchInfo(params)
        if(result.code === 200){
            commit('GETSEARCHLIST',result.data)
        }
    }
}
//准备mutations对象——修改state中的数据
const mutations = {
    GETSEARCHLIST(state,SearchList){
        state.SearchList = SearchList
    }
}
//准备state对象——保存具体的数据
const state = {
    SearchList:{}
}
//getter相当于计算属性
const getters = {
    goodsList(state){
        return state.SearchList.goodsList || []
    },
    trademarkList(state){
        return state.SearchList.trademarkList
    },
    attrsList(state){
        return state.SearchList.attrsList
    }
}

export default {
    actions,
    mutations,
    state,
    getters
}