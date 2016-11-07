<template>
  <div class="news-item">
    <span class="title">{{ item.title }}</span>
    <br>
    <span class="content">{{ item.content }}</span>
    <br>
    <span class="content">{{ item._id }}</span>
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
</style>
