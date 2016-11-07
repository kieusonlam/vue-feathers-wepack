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
      return app.service('api/posts').create({
        title,
        content
      }).then((result) => {
        console.log(result)
        dispatch('FETCH_POSTS', 1)
      }).catch((err) => {
        console.log(err)
      })
    },

    FETCH_POST: ({ commit, state }, { id }) => {
      return app.service('api/posts').get(id).then(result => {
        commit('SET_POST', { result })
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
