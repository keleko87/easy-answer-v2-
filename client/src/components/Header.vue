<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
   <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        Easy Answer 2
      </router-link>
      <ul v-if="!isAuthenticated" class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <button @click="login" class="btn btn-lg btn-slack"><i class="fa fa-slack"></i>Login Slack</button>

          <a href="/auth/login" class="btn btn-primary">Login</a>
        </li>
        <li class="nav-item">
          <!-- <router-link
            class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'logout' }"
          >
            <i class="ion-compose"></i>Sign in
          </router-link> -->

        </li>
      </ul>
      <ul v-else class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'new' }"
          >
            <i class="ion-compose"></i>&nbsp;New Ticket
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            exact
            :to="{ name: 'settings' }"
          >
            <i class="ion-gear-a"></i>&nbsp;Settings
          </router-link>
        </li>
        <li class="nav-item" v-if="currentUser.username">
          <router-link
            class="nav-link"
            exact
            :to="{
              name: 'profile',
              params: { username: currentUser.username }
            }"
          >
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <button @click="logout" class="btn btn-lg btn-slack"><i class="fa fa-slack"></i>Logout</button>
        </li>
      </ul>
    </div>
</nav>
</template>

<script>
import { mapGetters } from "vuex";
import { LOGIN, LOGOUT } from '../store/actions.type';

export default {
  name: "Header",
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  },

  methods: {
    login() {
      this.$store.dispatch(LOGIN);
    },

    logout() {
      this.$store.dispatch(LOGOUT);
    }
  }
};
</script>
