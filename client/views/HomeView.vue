<template>
  <div class="home-view">
    <h1>Home</h1>
    <p>Blogpost below</p>
    <div class="post" v-for="post in posts">
      <div class="posts-title">
        {{ post.title }}
      </div>
      <div class="posts-content">
        {{ post.content }}
      </div>
    </div>
    <pre>{{ this.$store.state.posts }}</pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'

const fetchPosts = (store) => store.dispatch('FETCH_POSTS')

export default {
  name: 'home-view',
  computed: mapState({
    posts: (state) => state.posts.data,
    isAuthenticating: (state) => state.auth.isAuthenticating
  }),
  methods: {

  },
  preFetch: fetchPosts,
  beforeMount () {
    fetchPosts(this.$store)
  }
}
</script>

<style lang="stylus">
.home-view
  background-color #fff
  box-sizing border-box
  padding 2em 3em

pre
  padding 20px
  background #ededed
</style>
