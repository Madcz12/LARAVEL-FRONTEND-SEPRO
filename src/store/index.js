import { createStore } from 'vuex'

export default createStore({
    state: {
        usuario: null,
        token: null
    },
    getters: {
        getUsuario(state) {
            return state.usuario
        },
        getToken(state) {
            return state.token
        }
    },
    mutations: {
        setUsuario(state, usuario) {
            state.usuario = usuario
        },
        setToken(state, token) {
            state.token = token
        }
    },
    actions: {
        login(context, data) {
            context.commit('setUsuario', data.usuario)
            context.commit('setToken', data.token)
            localStorage.setItem('userData', JSON.stringify(data))
        },
        logout(context) {
            context.commit('setUsuario', null)
            context.commit('setToken', null)
            localStorage.removeItem('userData')
        }
    }
})