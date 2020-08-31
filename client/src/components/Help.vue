<!-- Chase Theriot
      CIS4339      -->
<template>
<!-- Div to hold all of the site screenshots -->
  <div id="app" v-if="$store.state.isUserLoggedIn">
      <div class="container" style="position: relative;">
          <h1 class=mt-5>Help</h1>
        <div class="container">
            <h4 class=mt-5>Animals We Offer</h4>
            <img src="../assets/images/Animals Page.png" width=80%/>
            <p>This page shows all of the animals that are available from the company.</p>
        </div>
        <div class="container">
            <h4 class=mt-5>Active Rentals</h4>
            <img src="../assets/images/My Rentals Page.png" width=80%/>
            <p>This page shows all of the animals that are actively rented by the current user that is logged in.</p>
        </div>
        <div class="container">
            <h4 class=mt-5>Rental Request</h4>
            <img src="../assets/images/Request Rental Page.png" width=80%/>
            <p>This page allows the user to request a rental of an animal.</p>
        </div>
        <div class="container">
            <h4 class=mt-5>Rental Cancellation</h4>
            <img src="../assets/images/Cancel Rental Page.png" width=80%/>
            <p>This page allows the user to cancel a rental that has previously been requested.</p>
        </div>
        <div class="container">
            <h4 class=mt-5>Rental Update</h4>
            <img src="../assets/images/Rental Update Page.png" width=80%/>
            <p>This page allows the user to update a rental that has previously been made.</p>
        </div>
        <div class="container">
            <h4 class=mt-5>Contact Us</h4>
            <img src="../assets/images/Contact Us Page.png" width=80%/>
            <p>This page allows the user to contact our support department.</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>