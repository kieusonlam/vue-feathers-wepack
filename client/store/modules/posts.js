import { app } from '../feathers'

export default {
  state: {
    total: 0,
    limit: 0,
    skip: 0,
    data: []
  },
  actions: {
    FETCH_POSTS: ({ commit, state }) => {
      app.service('api/posts').find({
        query: {
          $sort: { createdAt: -1 },
        }
      }).then(result => {
        commit('SET_POSTS', { result })
      })
    }
  },
  mutations: {
    SET_POSTS: (state, { result }) => {
      state.total = result.total
      state.limit = result.limit
      state.skip = result.skip
      state.data = result.data
    }
  },
  getters: {

  }
}
