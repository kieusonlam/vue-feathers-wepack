import { app } from '../feathers'

export default {
  state: {
    total: 0,
    limit: 5,
    skip: 0,
    data: [],
    single: null
  },

  actions: {
    FETCH_POSTS: ({ commit, state }, { page }) => {
      const skipPage = state.limit * (page - 1)
      return app.service('api/posts').find({
        query: {
          $sort: { createdAt: -1 },
          $skip: skipPage
        }
      }).then(result => {
        commit('SET_POSTS', { result })
      })
    },

    ADD_NEW_POST: ({ commit, dispatch, state }, { title, content }) => {
      return new Promise((resolve, reject) => {
        app.service('api/posts').create({
          title,
          content
        }).then((result) => {
          resolve(result)
          dispatch('FETCH_POSTS', 1)
        }).catch((err) => {
          reject(err)
        })
      })
    },

    FETCH_POST: ({ commit, state }, { id }) => {
      return new Promise((resolve, reject) => {
        app.service('api/posts').get(id).then(result => {
          commit('SET_POST', { result })
          resolve()
        }).catch((err) => {
          reject(err.message)
        })
      })
    },

    UPDATE_POST: ({ commit, dispatch, state }, { id, title, content }) => {
      return new Promise((resolve, reject) => {
        app.service('api/posts').patch(id, {
          title,
          content
        }).then((result) => {
          resolve('Post was updated successfully!')
        }).catch((err) => {
          reject(err)
        })
      })
    },

    REMOVE_POST: ({ commit, dispatch, state }, { id }) => {
      return new Promise((resolve, reject) => {
        app.service('api/posts').remove(id).then((result) => {
          resolve('Post was removed successfully!')
        }).catch((err) => {
          reject(err)
        })
      })
    }
  },

  mutations: {
    SET_POSTS: (state, { result }) => {
      state.total = result.total
      state.limit = result.limit
      state.skip = result.skip
      state.data = result.data
    },

    SET_POST: (state, { result }) => {
      state.single = result
    }
  },

  getters: {

  }
}
