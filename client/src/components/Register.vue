<!-- Chase Theriot
      CIS4339      -->
<template>
  <div id="app">
    <div class="registration">
      <div class="container">
        <h1 class="mt-5">Register</h1>
        <!-- Name entry -->
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="name"
            id="name"
            name="name"
            v-model="name"
            class="form-control"
            placeholder="Enter Name"
            autocomplete="off"
            required="yes"
          />
        </div>
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
            autocomplete="off"
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
            autocomplete="off"
            required="yes"
          />
        </div>
        <!-- Password entry -->
        <div class="form-group">
          <label for="password2">Confirm Password</label>
          <input
            type="password"
            id="password2"
            name="password2"
            v-model="password2"
            class="form-control"
            placeholder="Confirm Password"
            autocomplete="off"
            required="yes"
          />
        </div>
        <!-- Button to submit the form -->
        <button @click="register" class="btn btn-primary btn-block">Register</button>
        <!-- Button to bring the user to the login page -->
        <p class="lead mt-4">
          Have An Account?
          <a href="/#/login">Login</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password2: ""
    };
  },
  methods: {
    // Register function the uses the authentication service
    async register() {
      console.log(`${this.email} is attempting to create a user...`);
      const response = await AuthenticationService.register({
        name: this.name,
        email: this.email,
        password: this.password,
        password2: this.password2
      });
      // Updating the store for vuex
      this.$store.dispatch("setToken", response.data.token);
      this.$store.dispatch("setUser", response.data.user);
      console.log(response.data);
      alert("You are now registered! You may now login...");
      // Bring the user to the login page to test their log in
      location.replace("http://localhost:1997/#/login");
    }
  }
};
</script>
