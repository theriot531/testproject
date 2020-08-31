<!-- Chase Theriot
      CIS4339      -->
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="/">Texas Animal Rentals</a>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <!-- Animals List -->
        <li class="nav-item">
          <a class="nav-link" href="#/animals">Animals</a>
        </li>
        <!-- The users active rentals -->
        <li class="nav-item">
          <a class="nav-link" href="#/activerentals">My Rentals</a>
        </li>
        <!-- Page to allow the user to make a rental request -->
        <li class="nav-item">
          <a class="nav-link" href="#/rentalreq">Rental Request</a>
        </li>
        <!-- Page to allow the user to cancel a rental -->
        <li class="nav-item">
          <a class="nav-link" href="#/rentalcan">Rental Cancellation</a>
        </li>
        <!-- Page that allows the user to update their rental -->
        <li class="nav-item">
          <a class="nav-link" href="#/rentalup">Rental Update</a>
        </li>
        <!-- Contact us post -->
        <li class="nav-item">
          <a class="nav-link" href="#/contact">Contact Us</a>
        </li>
        <!-- help page -->
        <li class="nav-item">
          <a class="nav-link" href="#/help">Help</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <!-- Sign out button that redirects thte user to the main landing page -->
        <a @click="signOut" class="btn btn-primary btn-sm" href="#/" role="button">Sign Out</a>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    // Function that allows the user to sign out
    async signOut() {
      console.log(
        `${this.$store.state.user.email} is attempting to sign out...`
      );
      // Killing the state for vuex
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
    }
  }
};
</script>