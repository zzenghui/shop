import { reqCartList, reqDeleteCArtById, reqUpdateCheckedById } from "@/api"
import { start } from "nprogress";
import store from "..";


const actions ={
    async getCartList({commit}){
        let result = await reqCartList();
       if(result.code == 200){
        commit('GETCARTLIST',result.data)
       }
    },
    async deleteCartListBySkuId({commit},skuId){
       let result =  await reqDeleteCArtById(skuId)
       if (result.code == 200) {
        return 'ok'
       }else{
        return Promise.reject(new Error('faile'))
       }
    },
    async reqUpdateCheckedById({ commit }, {skuId, isChecked}){
        let result = await reqUpdateCheckedById(skuId, isChecked);
        if (result.code == 200) {
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
        
          
        
    },
    async deleteAllCheckedCart({dispatch,getters}){
        //购物车中全部产品
        let PromiseAll = []
        getters.cartList.cartInfoList.forEach(item => {
            if(item.isChecked == 1){
               let Promise =  dispatch('deleteCartListBySkuId', item.skuId)
               PromiseAll.push(Promise)
            }
        });
        return Promise.all(PromiseAll)
    },
    updateAllCartIsChecked({dispatch,state},isChecked){
        let PromiseAll = []
        state.cartList[0].cartInfoList.forEach(item => {
            let Promise =  dispatch('reqUpdateCheckedById', { skuId: item.skuId, isChecked });
            PromiseAll.push(Promise)

        })
        return Promise.all(PromiseAll)
       
    }

}
const mutations = {
    GETCARTLIST(state,cartList){
        state.cartList = cartList
    }
}
const state = {
    cartList:[]
}
const getters = {
    cartList(state){
        return state.cartList[0] || {}
    },
   
    
}

export default {
    actions,
    mutations,
    state,
    getters
}