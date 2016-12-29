<template>
  <div class="news-item">
    <router-link :to="'/item/' + item._id">{{ item.title }}</router-link>
    <br>
    <span class="content" v-html="item.content"></span>
    <br>
    <div class="meta">
      <span class="author" v-if="item.authorInfo">Posted by {{ item.authorInfo.email }}</span>
      <span> at {{ item.createdAt | datetime }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news-item',
  props: ['item']
}
</script>

<style lang="stylus">
.news-item
  background-color #fff
  padding 20px 30px
  border-bottom 1px solid #eee
  position relative
  line-height 20px
  a
    font-weight bold
  .meta 
    color #999
</style>
