import { reqAddress, reqUserOrder } from '@/api'

const actions = {
    //获取用户地址信息
    async getUserAddress({commit}){
        let result = await reqAddress()
        if(result.code == 200){
            commit('GETUSERADDRESS',result.data)
        }
    },
    //获取商品清单
    async getUserOrder({commit}){
        let result = await reqUserOrder()
        if(result.code == 200){
            commit('GETUSERORDER',result.data)
        }
    }
}


const mutations = {
    GETUSERADDRESS(state,address){
        state.address = address
    },
    GETUSERORDER(state,userOrder){
        state.userOrder = userOrder
    }
}


const state = {
    address:[],
    userOrder:{}
}


const getters = {}


export default {
    actions,
    mutations,
    state,
    getters
}