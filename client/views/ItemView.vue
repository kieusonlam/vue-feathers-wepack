<template>
  <div class="item-view" v-if="item">
    <template v-if="item">
      <div class="item-view-header">
        <h1>{{ item.title }}</h1>
      </div>
      <div class="item-view-content">
        {{ item.content }}
      </div>
    </template>
  </div>
</template>

<script>

function fetchPost (store) {
  return store.dispatch('FETCH_POST', {
    id: store.state.route.params.id
  })
}

export default {
  name: 'item-view',
  data () {
    return {
      loading: true
    }
  },
  computed: {
    item () {
      return this.$store.state.posts.single
    }
  },
  // on the server, only fetch the item itself
  preFetch: fetchPost,
  // on the client, fetch everything
  beforeMount () {
    fetchPost(this.$store)
  }
}
</script>

<style lang="stylus">
.item-view-header
  background-color #fff
  padding 1.8em 2em 1em
  box-shadow 0 1px 2px rgba(0,0,0,.1)
  h1
    display inline
    font-size 1.5em
    margin 0
    margin-right .5em
  .host, .meta, .meta a
    color #999
  .meta a
    text-decoration underline

.item-view-content
  background-color #fff
  margin-top 10px
  padding 2em 2em

@media (max-width 600px)
  .item-view-header
    h1
      font-size 1.25em
</style>