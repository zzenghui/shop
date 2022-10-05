import { reqGetCode, reqRegister, reqLogin, reqUser, reqlogout } from '@/api'
import { setToken } from '@/utils/token'

const actions = {
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone)
        if (result.code == 200) {
            commit('GRTCODE', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    async getRegister({ commit }, user) {
        let result = await reqRegister(user)

        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('该账户已完成注册'))
        }
    },
    //登录
    async userLogin({ commit }, data) {
        let result = await reqLogin(data)

        if (result.code == 200) {
            commit('USERLOGIN', result.data.token)
            setToken(result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('账号或密码不正确'))
        }
    },
    async userInfo({ commit }) {
        let result = await reqUser();
        if (result.code == 200) {
            commit('USERINFO', result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    //退出登录
    async logOut({ commit }) {
        let result = await reqlogout()
        if (result.code == 200) {
            commit('clear')
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
}
const mutations = {
    GRTCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    USERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    clear(state) {
        state.token = '',
        state.userInfo = {}
        localStorage.removeItem('TOKEN')
    }

}
const state = {
    code: '',
    token: localStorage.getItem('TOKEN'),
    userInfo: {}
}
const getters = {}

export default {
    actions,
    mutations,
    state,
    getters
}