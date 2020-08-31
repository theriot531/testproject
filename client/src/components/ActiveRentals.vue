<!-- Chase Theriot
      CIS4339      -->
<template>
  <div id="app" v-if="$store.state.isUserLoggedIn">
    <div class="container">
      <h1 class="mt-5">Your Current Rentals</h1>
      <!-- Table to display the results -->
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col" style="font-size:16px;">Animal Name</th>
            <th scope="col" style="font-size:16px">Contact Email</th>
            <th scope="col" style="font-size:16px">Rental Date</th>
            <th scope="col" style="font-size:16px">Comments</th>
          </tr>
        </thead>
        <br />
        <!-- Loop to get all of the records -->
        <tbody v-for="rental in rentals" :key="rental.id">
          <tr>
            <td>{{rental.name}}</td>
            <td>{{rental.email}}</td>
            <td>{{rental.date}}</td>
            <td>{{rental.text}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Rentals from "@/services/Rentals";
import store from "@/store/store";
export default {
  name: "ActiveRentals",
  data() {
    return {
      email: "",
      rentals: null
    };
  },
  // Mounted function that fires on the page load
  async mounted() {
    // Request info from backend
    const email = this.$store.state.user.email;
    this.rentals = (await Rentals.loadSearch({ email })).data;
    console.log(`Loading ${email}'s Active Rentals...`);
  }
};
</script>

<style>
</style>