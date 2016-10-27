<template>
  <div class="home-view">
    <h1>Home</h1>
    <p>Blogpost below</p>

    <form @submit.prevent="onPostSubmit">
      <input type="title" placeholder="Post Title" autofocus required v-model="title">
      <input type="content" placeholder="Post Content" required v-model="content">
      <button type="submit">Submit</button>
    </form>

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
  data () {
    return {
      title: null,
      content: null
    }
  },
  computed: mapState({
    posts: (state) => state.posts.data,
    isAuthenticating: (state) => state.auth.isAuthenticating
  }),
  methods: {
    onPostSubmit() {
      this.$store.dispatch('ADD_NEW_POST', {
        title: this.title,
        content: this.content,
      })
    }
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

.post
  background aliceblue
  padding 5px
  margin-bottom 5px

form
  margin-bottom 20px

pre
  padding 20px
  background #ededed
</style>
