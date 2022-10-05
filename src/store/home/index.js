import { reqCategoryList, reqGetBannerList , reqFloorList} from "@/api"
//准备actions对象——响应组件中用户的动作
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code === 200) {
            commit("CATEGORYLIST", result.data)
        }
    },
    //获取首页轮播图数据
    async getBannerList({commit}){
        let result = await reqGetBannerList()
        if (result.code === 200) {
            commit('REQGETBANNERLIST', result.data)
        }
        
    },
    //获取floor数据
    async getFloorList({commit}){
        let result = await reqFloorList()
        if (result.code === 200) {
            commit('REQFLOORLIST', result.data)
        }
    }
}
//准备mutations对象——修改state中的数据
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList 
    },
    REQGETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    REQFLOORLIST(state,floorList){
        state.floorList = floorList
    }
}
//准备state对象——保存具体的数据
const state = {
    categoryList:[],
    bannerList:[],
    floorList:[]
}
//getter相当于计算属性
const getter = {}

export default {
    actions,
    mutations,
    state,
    getter
}