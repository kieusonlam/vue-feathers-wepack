<template>
  <div class="news-item">
    <router-link :to="'/item/' + item._id">{{ item.title }}</router-link>
    <br>
    <span class="content">{{ item.content }}</span>
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
</style>
