<!-- Chase Theriot
      CIS4339      -->
<template>
  <div id="app" v-if="$store.state.isUserLoggedIn">
    <div class="request">
      <div class="container">
        <h1 class="mt-5">Request a Rental</h1>
        <!-- Input parameter for the requested animal name -->
        <div class="form-group">
          <label for="name">Animal Name</label>
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
        <!-- Input that has the user confirm their email -->
        <div class="form-group">
          <label for="email">Confirm Email</label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="email"
            class="form-control"
            v-bind:placeholder="placeholder"
            autocomplete="on"
            required="yes"
          />
        </div>
        <!-- Input asking the user for the date they wish to rent the animal for -->
        <div class="form-group">
          <label for="date">Pickup Date</label>
          <br />
          <input
            type="date"
            id="date"
            name="date"
            v-model="date"
            class="date"
            placeholder="Pickup Date"
            autocomplete="off"
            required="yes"
          />
        </div>
        <!-- Input asking the user for any additional comments or parameters -->
        <div class="form-group">
          <label for="text">Additional Comments or Questions</label>
          <textarea
            class="form-control"
            id="text"
            rows="3"
            v-model="text"
            placeholder="Enter Text Here..."
          />
        </div>
        <button @click="submitRental" class="btn btn-primary btn-block">Submit Rental Request</button>
      </div>
    </div>
  </div>
</template>

<script>
import RentalService from "@/services/RentalService";
export default {
  name: "RentalReq",
  data() {
    return {
      name: "",
      email: "",
      date: "",
      text: ""
    };
  },
  methods: {
    //Function to submit the rental request form
    async submitRental() {
      console.log("Rental button was clicked...");
      const response = await RentalService.rentAnimal({
        name: this.name,
        email: this.email,
        date: this.date,
        text: this.text
      });
      console.log(response.data);
      alert("Rental Processed. Thank You.");
      location.replace("http://localhost:1997/#/activerentals");
    }
  },
  computed: {
    //This is used to put the current users email into the form
    placeholder() {
      return this.$store.state.user.email;
    }
  }
};
</script>

<style>
</style>