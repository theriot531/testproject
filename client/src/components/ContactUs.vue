<!-- Chase Theriot
      CIS4339      -->
<template>
  <div id="app" v-if="$store.state.isUserLoggedIn">
    <div class="container">
      <h1 class="mt-5">Contact Us</h1>
      <div class="container">
        <!-- Form for a contact us feature that is not functional in the demo -->
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
          />
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
            style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;"
          />
          <small
            id="emailHelp"
            class="form-text text-muted"
          >We'll never share your email with anyone else.</small>
        </div>

        <div class="form-group">
          <label for="subject">Message</label>
          <textarea
            class="form-control"
            id="exampleTextarea"
            rows="3"
            placeholder="Enter Message..."
          ></textarea>
        </div>

        <button class="btn btn-primary btn-block">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs"
};
</script>

<style>
</style>