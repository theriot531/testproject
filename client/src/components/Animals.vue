<!-- Chase Theriot
      CIS4339      -->
<template>
  <div id="app" v-if="$store.state.isUserLoggedIn">
    <div class="container">
      <h1 class="mt-5">Animals We Offer</h1>
      <!-- Table to display the results -->
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col" style="font-size:16px;">Name</th>
            <th scope="col" style="font-size:16px">Animal Type</th>
            <th scope="col" style="font-size:16px">Scientific Name</th>
            <th scope="col" style="font-size:16px">Weight</th>
            <th scope="col" style="font-size:16px">Size</th>
          </tr>
        </thead>
        <br />
        <!-- Loop to get all of the records -->
        <tbody v-for="animal in animals" :key="animal.id">
          <tr>
            <td>{{animal.name}}</td>
            <td>{{animal.animal_common_name}}</td>
            <td>{{animal.scientific_name}}</td>
            <td>{{animal.weight}}</td>
            <td>{{animal.size}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AnimalService from "@/services/AnimalService";
export default {
  name: "Animals",
  data() {
    return {
      animals: null
    };
  },
  // Mounted function that fires when the page is loaded
  async mounted() {
    // Request info from backend
    console.log(
      `${this.$store.state.user.email} is attempting to get data from the server...`
    );
    this.animals = (await AnimalService.loadAnimals()).data;
  }
};
</script>

<style>
</style>