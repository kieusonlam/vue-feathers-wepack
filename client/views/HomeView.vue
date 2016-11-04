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

    <div class="paging">
      <router-link v-if="currentPage > 1" :to="'/' + (currentPage - 1)">&lt; prev</router-link>
      <a v-else class="disabled">&lt; prev</a>
      <span>{{ currentPage }}/{{ totalPage }}</span>
      <router-link v-if="currentPage < totalPage" :to="'/' + (currentPage + 1)">more &gt;</router-link>
      <a v-else class="disabled">more &gt;</a>
    </div>
    <pre>{{ currentPage }}</pre>
    <pre>{{ this.$store.state.posts }}</pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'

const fetchPosts = (store, page) => store.dispatch('FETCH_POSTS', { page })

export default {
  name: 'home-view',
  data () {
    return {
      title: null,
      content: null
    }
  },
  computed: {
    posts () { return this.$store.state.posts.data },
    totalPage () { return Math.ceil(this.$store.state.posts.total / this.$store.state.posts.limit) },
    currentPage () { return Number(this.$store.state.route.params.page) || Math.ceil((this.$store.state.posts.skip - 1) / this.$store.state.posts.limit) + 1 }
  },
  methods: {
    onPostSubmit () {
      this.$store.dispatch('ADD_NEW_POST', {
        title: this.title,
        content: this.content,
      })
    }
  },
  preFetch: fetchPosts,
  beforeMount () {
    if (this.$root._isMounted) {
      fetchPosts(this.$store, this.currentPage)
    }
  },
  watch: {
    '$route' (to, from) {
      fetchPosts(this.$store, this.currentPage)
    }
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
