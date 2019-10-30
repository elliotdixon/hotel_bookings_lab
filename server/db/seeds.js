use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Elliot",
    email: "elliot@gmail.com",
    checked_in: "true"
  },
  {
    name: "Rafa",
    email: "rafa@gmail.com",
    checked_in: "true"
  },
  {
    name: "Charles",
    email: "Charles@gmail.com",
    checked_in: "false"
  }
]);
