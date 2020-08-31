<!-- Chase Theriot
      CIS4339      -->
<template>
  <div id="app" v-if="$store.state.isUserLoggedIn">
    <div class="container">
      <h1 class="mt-5">Cancel a Rental</h1>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col" style="font-size:16px;">Animal Name</th>
            <th scope="col" style="font-size:16px">Contact Email</th>
            <th scope="col" style="font-size:16px">Rental Date</th>
            <th scope="col" style="font-size:16px">Comments</th>
            <th scope="col" style="font-size:16px">Cancel</th>
          </tr>
        </thead>
        <br />
        <tbody v-for="rental in rentals" :key="rental._id">
          <tr>
            <td>{{rental.name}}</td>
            <td>{{rental.email}}</td>
            <td>{{rental.date}}</td>
            <td>{{rental.text}}</td>
            <td>
              <button @click="deleteRecord(rental._id)" class="btn btn-danger">Cancel</button>
            </td>
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
  name: "RentalCan",
  data() {
    return {
      id: "",
      rentals: null
    };
  },
  methods: {
    // Function to delete a record of a users rental
    async deleteRecord(id) {
      console.log(id);
      //Time out function the refreshes the page. It waits so that the backend has time to process the request.
      setTimeout(function() {
        location.replace("http://localhost:1997/#/activerentals");
        console.log("Time Reached...");
      }, 2000);
      await Rentals.deleteRental({ id });
      alert("Rental Cancelled.");
    }
  },
  //Function that fires when the page is loaded
  async mounted() {
    // Request info from backend
    const email = this.$store.state.user.email;
    this.rentals = (await Rentals.loadSearch({ email })).data;
    console.log(`Loading ${email}'s Active Rentals...`);
    console.log("Preparing for Record Delete...");
  }
};
</script>

<style>
</style>