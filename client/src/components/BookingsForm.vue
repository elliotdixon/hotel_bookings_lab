<template lang="html">
  <form id="bookings-form" v-on:submit="addBooking">
    <h2>Add a Booking</h2>
    <div class="formWrap">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name"/>
    </div>
    <div class="formWrap">
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email"/>
    </div>
    <div class="formWrap">
      <label for="checked_in">Checked in:</label>
      <input type="text" name="checked_in" v-model="checked_in"/>
    </div>
    <input type="submit" id="save" value="Save"/>
  </form>
</template>

<script>
import { eventBus } from "@/main.js"
import BookingService from "@/services/BookingService.js"

export default {
  name: "bookings-form",
  data(){
    return {
      name: "",
      email: "",
      checked_in: ""
    }
  },
  methods: {
    addBooking(data){
      data.preventDefault()
      const booking = {
        name: this.name,
        email: this.email,
        checked_in: this.checked_in
      }
      BookingService.postBooking(booking)
      .then(res => eventBus.$emit("booking-added", res))
    }
  }
}
</script>

<style lang="css" scoped>
h2 {
	margin: 10px 0;
	padding: 0;
}

form {
	width: 75%;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.7);
	padding: 20px;
	margin-bottom: 40px;
}

label {
	min-width: 100px;
	display: inline-block;
}

.formWrap {
	margin-bottom: 10px;
}
</style>
