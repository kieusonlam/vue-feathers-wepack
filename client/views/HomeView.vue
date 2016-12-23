<template>
  <div class="home-view">
    <spinner :show="loading"></spinner>

    <div class="box">
      <h1>Home</h1>
      <p>Blogpost below</p>
      <form @submit.prevent="onPostSubmit">
        <input type="title" placeholder="Post Title" autofocus required v-model="title">
        <textarea type="content" placeholder="Post Content" required v-model="content"></textarea>
        <button type="submit">Submit</button>
      </form>
      <pre v-if="error">{{ error }}</pre>
    </div>

    <div class="news-list-nav">
      <router-link v-if="currentPage > 1" :to="'/' + (currentPage - 1)">&lt; prev</router-link>
      <a v-else class="disabled">&lt; prev</a>
      <span>{{ currentPage }}/{{ totalPage }}</span>
      <router-link v-if="currentPage < totalPage" :to="'/' + (currentPage + 1)">more &gt;</router-link>
      <a v-else class="disabled">more &gt;</a>
    </div>

    <transition :name="transition">
      <div class="news-list" :key="currentPage" v-if="currentPage > 0">
        <transition-group tag="div" name="item">
          <item v-for="item in posts" :key="item._id" :item="item">
          </item>
        </transition-group>
      </div>
    </transition>

  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
import Item from '../components/Item.vue'

const fetchPosts = (store) => store.dispatch('FETCH_POSTS', { page: store.state.route.params.page })

export default {
  name: 'home-view',

  components: {
    Spinner,
    Item
  },

  props: {
    type: String
  },

  data () {
    return {
      title: null,
      content: null,
      loading: false,
      transition: 'slide-left',
      error: null
    }
  },

  computed: {
    posts () { return this.$store.state.posts.data },
    totalPage () { return Math.ceil(this.$store.state.posts.total / this.$store.state.posts.limit) },
    currentPage () { return Number(this.$store.state.route.params.page) || 1 }
  },

  methods: {
    onPostSubmit () {
      this.$store.dispatch('ADD_NEW_POST', {
        title: this.title,
        content: this.content,
      }).catch((err) => {
        this.error = err
      })
      this.title = null;
      this.content = null;
    }
  },

  preFetch: fetchPosts,

  beforeMount () {
    if (this.$root._isMounted) {
      fetchPosts(this.$store)
    }
  },

  watch: {
    '$route' (to, from) {
      this.loading = true
      this.transition = to.params.page > from.params.page ? 'slide-left' : 'slide-right'
      fetchPosts(this.$store)
      this.loading = false
    }
  }
}
</script>

<style lang="stylus">
.home-view
  background-color #fff
  box-sizing border-box
  padding-top 45px

.box
  background-color #fff
  padding 20px 30px
  border-bottom 1px solid #eee
  position relative
  line-height 20px

.news-list-nav, .news-list
  background-color #fff
  border-radius 2px

.news-list-nav
  padding 15px 30px
  position fixed
  text-align center
  top 55px
  left 0
  right 0
  z-index 998
  box-shadow 0 1px 2px rgba(0,0,0,.1)
  a
    margin 0 1em
  .disabled
    color #ccc

.news-list
  position absolute
  margin 30px 0
  width 100%
  transition all .5s cubic-bezier(.55,0,.1,1)

.slide-left-enter, .slide-right-leave-active
  opacity 0
  transform translate(30px, 0)

.slide-left-leave-active, .slide-right-enter
  opacity 0
  transform translate(-30px, 0)

.item-move, .item-enter-active, .item-leave-active
  transition all .5s cubic-bezier(.55,0,.1,1)

.item-enter
  opacity 0
  transform translate(30px, 0)

.item-leave-active
  position absolute
  opacity 0
  transform translate(30px, 0)
  display none

@media (max-width 600px)
  .news-list
    margin 10px 0
</style>
