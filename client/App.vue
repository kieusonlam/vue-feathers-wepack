<template>
  <div id="app">
    <div class="header">
      <div class="inner">
        <router-link to="/" exact>
          <img class="logo" src="./assets/logo.png" alt="logo">
        </router-link>
        <router-link to="/login">Login</router-link>
        <a class="github" href="https://github.com/kieusonlam/vue-feathers-wepack" target="_blank">
          Built with Vue.js
        </a>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
const checkLogin = (store) => store.dispatch('CHECK_LOGIN')

export default {
  name: 'app-view',
  beforeMount () {
    checkLogin(this.$store)
  }
}
</script>

<style lang="stylus">
*
*:before
*:after 
    box-sizing border-box;

body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size 15px
  background-color lighten(#eceef1, 30%)
  margin 0
  padding-top 55px
  color #34495e
  overflow-y scroll

form
  width 280px
  background rgba(255,255,255,.08)
  &.error
    border-color #8e4947
    animation shake .5s
  @media only screen and (max-width 414px)
    border 0
    background transparent

input
  color #000
  font inherit
  margin 0
  height 36px
  padding 10px
  background-color #fff
  border 1px solid #ccc
  -webkit-appearance none
  -moz-appearance textfield
  border-radius 0
  width 100%
  margin-bottom 10px
  &:focus
    border-color #f7c723
    outline 0

textarea 
  padding 10px
  background-color #fff
  border 1px solid #ccc
  overflow auto
  border-radius 0
  width 100%
  margin-bottom 10px

button
  border 1px solid #d7d7d7
  background-color #f3f3f3
  line-height normal
  padding 10px 20px
  text-decoration none
  color #363636
  display: inline-block
  -webkit-transition all .3s
  transition all .3s
  cursor pointer
  -webkit-appearance button
  border-radius 0

pre
  padding 20px
  background #ededed
  
a
  color #34495e
  text-decoration none

.header
  background-color #ff6600
  position fixed
  z-index 999
  top 0
  left 0
  right 0
  .inner
    max-width 800px
    box-sizing border-box
    margin 0px auto
    padding 15px 5px
  a
    color rgba(255, 255, 255, .8)
    line-height 24px
    transition color .15s ease
    display inline-block
    vertical-align middle
    font-weight 300
    letter-spacing .075em
    margin-right 1.8em
    &:hover
      color #fff
    &.router-link-active
      color #fff
      font-weight 400
    &:last-child
      margin-right 0
  .github
    color #fff
    font-size .9em
    margin 0
    float right

.logo
  width 24px
  margin-right 10px
  display inline-block
  vertical-align middle

.view
  max-width 800px
  margin 0 auto
  position relative

.fade-enter-active, .fade-leave-active
  transition all .2s ease

.fade-enter, .fade-leave-active
  opacity 0

@media (max-width 860px)
  .header .inner
    padding 15px 30px

@media (max-width 600px)
  body
    font-size 14px
  .header
    .inner
      padding 15px
    a
      margin-right 1em
    .github
      display none
</style>
