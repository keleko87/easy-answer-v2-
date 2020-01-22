<template>
  <div class="profile">
    <h1>This is an Profile page {{ currentUser }}</h1>
  </div>  
</template>

<script>
import { mapGetters } from "vuex";


export default {
  name: 'Profile',
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  }
}
</script>

<style>

</style>
