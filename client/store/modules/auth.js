import { app } from '../feathers'
import axios from 'axios'

export default {
  state: {
    token: null,
    authenticated: false,
    isAuthenticating: false,
    profile: null
  },
  actions: {
    CHECK_LOGIN: ({ commit, state }) => {
      app.authenticate().then((result) => {
        commit('SET_PROFILE', result)
        commit('LOGIN_SUCCESS', result)
      }).catch(() => {})
    },

    SIGNUP: ({ commit }, { email, password }) => {
      return new Promise((resolve, reject) => {
        axios.post('/api/signup', {email: email, password: password}).then((response) => resolve(response)).catch((error) => reject(error))
      })
    },

    LOGIN: ({ commit, state }, { email, password }) => {
      return new Promise((resolve, reject) => {
        commit('LOGIN_REQUEST')
        app.authenticate({
          type: 'local',
          'email': email,
          'password': password
        }).then((result) => {
          commit('SET_PROFILE', result)
          commit('LOGIN_SUCCESS', result)
          resolve()
        }).catch((error) => {
          commit('LOGIN_FAILURE')
          reject(error)
        })
      })
    },

    LOGOUT: ({ commit }) => {
      app.logout().then((result) => {
        commit('LOGOUT')
        return Promise.resolve()
      })
    }
  },

  mutations: {
    LOGIN_REQUEST: (state) => {
      state.isAuthenticating = true
    },

    LOGIN_FAILURE: (state) => {
      state.isAuthenticating = false
    },

    LOGIN_SUCCESS: (state, result) => {
      state.token = result.token
      state.isAuthenticating = false
      state.authenticated = true
    },

    LOGOUT: (state) => {
      state.token = null
      state.authenticated = false
      state.profile = null
    },

    SET_PROFILE: (state, result) => {
      state.profile = { email: result.data.email }
    }
  },

  getters: {
    isAuthenticated: (state) => {
      app.authenticate().then((result) => {
        return true
      }).catch(() => {
        return false
      })
    }
  }
}
