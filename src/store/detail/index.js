import { reqGoodsInfo, reqAddORUpdateShopCart } from '@/api/index'
import {getUUID} from '@/utils/uuid_token'


const state = {
    goodInfo:{},
    uuid_token:getUUID()
}
const actions = {
    async getGoodsInfo({commit},skuId){
        let result = await reqGoodsInfo(skuId)
        if(result.code == 200){
            commit('GETGOODSINFO',result.data)
        }
    },
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let result = await reqAddORUpdateShopCart(skuId,skuNum)
        
        if(result.code == 200){
            return 'ok'
            
        }else{
            return Promise.reject(new Error('faile'))
        }
    }

}
const mutations = {
    GETGOODSINFO(state,goodInfo){
        state.goodInfo = goodInfo
    }
}
const getters = {
    categoryView(){
        return state.goodInfo.categoryView  ||  {}
    },
    price(){
        return state.goodInfo.price 
    },
    skuInfo(){
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(){
        return state.goodInfo.spuSaleAttrList  || []
    },

}

export default{
    state,
    actions,
    mutations,
    getters
}