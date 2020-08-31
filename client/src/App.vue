<template>
  <div id="app">
    <AppNav v-if="$store.state.isUserLoggedIn"></AppNav>
    <router-view />
  </div>
</template>

<script>
import AppNav from "@/components/AppNav";
export default {
  name: "App",
  components: {
    AppNav
  }
};
</script>

<style>
</style>
