<template lang="html">
  <body>
    <div id="app">
      <bookings-form/>
      <bookings-grid :bookings="bookings" />
    </div>
  </body>
</template>

<script>
import BookingsForm from './components/BookingsForm';
import BookingsGrid from './components/BookingsGrid';
import BookingService from './services/BookingService.js';
import { eventBus } from './main';

export default {
  name: 'app',
  data () {
    return {
      bookings: []
    }
  },
  components: {
    'bookings-form': BookingsForm,
    'bookings-grid': BookingsGrid
  },
  mounted() {
    this.fetchData();

    eventBus.$on("booking-added", (booking) => {this.bookings.push(booking)});

    eventBus.$on('booking-deleted', (id) => {
      let index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
    })

    // eventBus.$on("booking-updated", (booking) => {
    //   let index = this.bookings.findIndex(booking => booking._id === id)
    //   this.bookings.splice(index, 1, booking)
    // })
  },
  methods: {
    fetchData(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }

  }
};
</script>

<style lang="css" scoped>
body {

  background-color: salmon;

}

</style>
