<template>
  <div class="item-view" v-if="item">
    <template v-if="item">
      <div class="item-view-header">
        <h1 v-if="!editing">{{ item.title }}</h1>
        <input v-else v-model="item.title"></input>
      </div>
      <div class="item-view-content" v-if="!editing">
        {{ item.content }}
      </div>
      <div class="item-view-content" v-else>
        <textarea v-model="item.content"></textarea>
      </div>
      <div>
        <button @click="editPost" v-if="editing">Update</button>
        <button @click="editPost" v-else>Edit</button>
        <button @click="removePost">Remove</button>
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
      loading: true,
      editing: false
    }
  },
  computed: {
    item () {
      return this.$store.state.posts.single
    }
  },
  methods: {
    editPost: function () {
      if (this.editing == true) {
        this.updatePost()
      }
      this.editing =! this.editing
    },
    updatePost: function () {
      this.$store.dispatch('UPDATE_POST', {
        id: this.$store.state.route.params.id,
        title: this.item.title,
        content: this.item.content,
      }).then(message => console.log(message))
      .catch((err) => console.log(err))
    },
    removePost: function () {
      this.$store.dispatch('REMOVE_POST', {
        id: this.$store.state.route.params.id
      }).then(message => this.$router.push({ path: '/' }))
      .catch((err) => console.log(err))
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
  h1, input
    display inline
    font-size 1.5em
    margin 0
    margin-right .5em
    color #34495e
    font-weight bold
  .host, .meta, .meta a
    color #999
  .meta a
    text-decoration underline

.item-view-content
  background-color #fff
  margin-top 10px
  padding 2em 2em
  box-shadow 0 1px 2px rgba(0,0,0,.1)

@media (max-width 600px)
  .item-view-header
    h1
      font-size 1.25em
</style>