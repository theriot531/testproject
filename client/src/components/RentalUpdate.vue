<!-- Chase Theriot
      CIS4339      -->
<template>
  <div id="app" v-if="$store.state.isUserLoggedIn">
    <div class="container">
      <h1 class="mt-5">Update a Rental</h1>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col" style="font-size:16px;">Animal Name</th>
            <th scope="col" style="font-size:16px">Contact Email</th>
            <th scope="col" style="font-size:16px">Rental Date</th>
            <th scope="col" style="font-size:16px">Comments</th>
            <th scope="col" style="font-size:16px">Update</th>
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
              <button @click="loadRecord(rental._id)" class="btn btn-info">Update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="container" v-if="currentRental">
      <h1 class="mt-5">Request a Rental</h1>
      <!-- Input parameter for the requested animal name -->
      <div class="form-group">
        <label for="name">Animal Name</label>
        <input
          type="name"
          id="nameUpdate"
          name="name"
          v-model="currentRental.name"
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
          id="emailUpdate"
          name="email"
          class="form-control"
          v-model="currentRental.email"
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
          id="dateUpdate"
          name="date"
          class="date"
          v-model="currentRental.date"
          autocomplete="off"
          required="yes"
        />
      </div>
      <!-- Input asking the user for any additional comments or parameters -->
      <div class="form-group">
        <label for="text">Additional Comments or Questions</label>
        <textarea
          class="form-control"
          id="textUpdate"
          rows="3"
          v-model="currentRental.text"
          placeholder="Enter Text Here..."
        />
      </div>
      <button
        @click="updateRecord(currentRental._id)"
        class="btn btn-primary btn-block"
      >Update Rental</button>
    </div>
  </div>
</template>

<script>
import Rentals from "@/services/Rentals";
import store from "@/store/store";
export default {
  name: "RentalUp",
  data() {
    return {
      id: "",
      nameUpdate: "",
      emailUpdate: "",
      dateUpdate: "",
      textUpdate: "",
      rentals: null,
      currentRental: null
    };
  },
  methods: {
    async updateRecord() {
      const response = await Rentals.updateRecord({
        id: this.currentRental._id,
        name: this.currentRental.name,
        email: this.currentRental.email,
        date: this.currentRental.date,
        text: this.currentRental.text
      });
    },
    async loadRecord(id) {
      console.log(id);
      Rentals.loadRecord({
        id
      })
        .then(response => {
          this.currentRental = response.data;
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  async mounted() {
    // Request info from backend
    const email = this.$store.state.user.email;
    this.rentals = (await Rentals.loadSearch({ email })).data;
    console.log(`Loading ${email}'s Active Rentals...`);
    console.log("Preparing for Record Update...");
  }
};
</script>

<style>
</style>