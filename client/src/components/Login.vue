<!-- Chase Theriot
      CIS4339      -->
<template>
  <div id="app">
    <div class="login">
      <div class="container">
        <h1 class="mt-5">Login</h1>
        <!-- Email entry -->
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="email"
            class="form-control"
            placeholder="Enter Email"
            required="yes"
          />
        </div>
        <!-- Password entry -->
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            v-model="password"
            class="form-control"
            placeholder="Create Password"
            required="yes"
          />
        </div>
        <!-- Button to submit the form -->
        <button @click="login" class="btn btn-primary btn-block">Login</button>
        <!-- Button to bring the user to the register page -->
        <p class="lead mt-4">
          Need an Account?
          <a href="/#/register">Register</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Login",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password2: ""
    };
  },
  methods: {
    // Login function the uses the authentication service
    async login() {
      console.log(`${this.email} is attempting to log in...`);
      const response = await AuthenticationService.login({
        email: this.email,
        password: this.password
      });
      // Updating the store for vuex
      this.$store.dispatch("setToken", response.data.token);
      this.$store.dispatch("setUser", response.data.user);
      // Bring the user to their rentals
      location.replace("http://localhost:1997/#/activerentals");
    }
  }
};
</script>
