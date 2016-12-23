<template>
  <div class="login-view">
    <h1>Login</h1>

    <div v-if="profile">
      You are logged in as <strong>{{ profile.email }}</strong>.<br/><br/>Now you can create new blog post :)
    </div>

    <div v-if="message">
      {{ message }}
    </div>

    <form @submit.prevent="onLoginSubmit">
      <input type="email" placeholder="Email Address" autofocus required v-model="email" v-if="!isAuthenticated">
      <input type="password" placeholder="Password" required v-model="password" v-if="!isAuthenticated">
      <button type="submit" v-if="!isAuthenticated">Log In</button>
      <button type="button" @click="onSignUp()" v-if="!isAuthenticated">
          Sign Up
      </button>
      <button type="button" @click="onLogOut()" v-if="isAuthenticated">
          Log Out
      </button>
    </form>

    <pre>{{ this.$store.state.auth }}</pre>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'login-view',
  data () {
    return {
      email: null,
      password: null,
      message: null
    }
  },
  computed: mapState({
    profile: (state) => state.auth.profile,
    isAuthenticating: (state) => state.auth.isAuthenticating,
    isAuthenticated: (state) => state.auth.authenticated
  }),
  methods: {
    onSignUp() {
      this.$store.dispatch('SIGNUP', {
        email: this.email,
        password: this.password,
      }).then((res) => this.message = res.data)
      .catch((error) => {
        this.message = error.message
      })
    },
    onLoginSubmit() {
      if (this.isAuthenticating) {
        return
      }
      this.$store.dispatch('LOGIN', {
        email: this.email,
        password: this.password,
      }).then(() => {
        
      }).catch((error) => {
        this.message = error.message
      })
    },
    onLogOut() {
      this.$store.dispatch('LOGOUT')
    }
  }
}
</script>

<style lang="stylus">
.login-view
  background-color #fff
  box-sizing border-box
  padding 2em 3em
</style>
