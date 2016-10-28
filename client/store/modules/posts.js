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
      return app.service('api/posts').find({
        query: {
          $sort: { createdAt: -1 },
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
        dispatch('FETCH_POSTS')
      }).catch((err) => {
        console.log(err)
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

    SET_NEW_POST: (state, {result}) => {

    }
  },
  getters: {

  }
}
