<template>
  <div class="login-view">
    <h1>Login</h1>

    <div v-if="error">
      {{ error.message }}
    </div>

    <form @submit.prevent="onLoginSubmit">
      <input type="email" placeholder="Email Address" autofocus required v-model="email">
      <input type="password" placeholder="Password" required v-model="password">
      <button type="submit">Log In</button>
      <button type="button" @click="onSignUp()">
          Sign Up
      </button>
      <button type="button" @click="onLogOut()">
          Log Out
      </button>
    </form>

    <pre>{{ this.$store.state.auth }}</pre>

  </div>
</template>

<script>
import { mapState } from 'vuex'

const checkLogin = (store) => store.dispatch('CHECK_LOGIN')

export default {
  name: 'login-view',
  data () {
    return {
      email: null,
      password: null
    }
  },
  computed: mapState({
    error: (state) => state.auth.error,
    isAuthenticating: (state) => state.auth.isAuthenticating
  }),
  methods: {
    onSignUp() {
      this.$store.dispatch('SIGNUP', {
        email: this.email,
        password: this.password,
      })
    },
    onLoginSubmit() {
      if (this.isAuthenticating) {
        return
      }
      this.$store.dispatch('LOGIN', {
        email: this.email,
        password: this.password,
      })
      // .then(() => {
      //   this.$router.push({ name: 'index' })
      // })
    },
    onLogOut() {
      this.$store.dispatch('LOGOUT')
    }
  },
  preFetch: checkLogin,
  beforeMount () {
    checkLogin(this.$store)
  }
}
</script>

<style lang="stylus">
.login-view
  background-color #fff
  box-sizing border-box
  padding 2em 3em

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
  display block
  margin-top 12px
  border 0
  background #fff
  outline none
  width 100%

button
  display block
  margin-top 12px
  width 100%

pre
  padding 20px
  background #ededed
</style>
