const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  // Define your ticket schema fields here
  // For example:
  name: {
    type: String,
    required: true,
  },
  seat: {
    type: String,
    required: true,
  },
  flight: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flight',
    required: true,
  },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
