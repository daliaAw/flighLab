const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flights');
const ticketController = require('../controllers/tickets');

// Flights Routes
router.get('/', flightController.index);
router.get('/flights/new', flightController.renderNew);
router.post('/', flightController.create);
router.get('/flights/:id', flightController.show);
router.post('/flights/:id/addDestination', flightController.addDestination);

// Tickets Routes
router.get('/tickets/new', ticketController.renderNew);
router.post('/tickets', ticketController.create);

module.exports = router;
