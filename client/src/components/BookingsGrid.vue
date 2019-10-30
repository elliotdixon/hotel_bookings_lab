<template lang="html">
  <div id="BookingsGrid">
    <div class="booking" v-for="booking in bookings">
      <h2>{{booking.name}}</h2>
      <h2>{{booking.email}}</h2>
      <h2>{{booking.checked_in}}</h2>
      <button type="button" v-on:click="handleClick(booking._id)">Delete Booking</button>
      <button type="button" v-on:click="handleUpdate(booking._id)">Update Booking</button>

    </div>
  </div>
</template>

<script>
import BookingService from '../services/BookingService.js'
import { eventBus } from '../main';

export default {
  name: "bookings-grid",
  props: ["bookings"],

  methods: {
    handleClick(id){
      eventBus.$emit("booking-deleted", id);
    },
    handleUpdate(id){
      eventBus.$emit("booking-updated", id);
    }
  }
};


</script>

<style lang="css" scoped>

#BookingsGrid {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
  background-image: url(https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-exterior.jpg?mh=666&la=en&h=666&w=1366&mw=1366&hash=7890A13D2C4FE83769F4A571B997007215155027);
}

h2 {
	padding: 0;
	margin: 0;
}

.booking {
	width: 30%;
	background: rgba(255, 255, 255, 0.7);
	margin-bottom: 20px;
	padding: 25px;
}

button {
	color: dodgerblue;
	border: none;
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
	background: salmon;
}
</style>
