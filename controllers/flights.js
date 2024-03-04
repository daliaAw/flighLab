const Flight = require('../model/flight');

exports.index = async (req, res, next) => {
  try {
    const flights = await Flight.find();
    res.render('flights/index', { flights });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.show = async (req, res, next) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) {
      return res.status(404).send('Flight not found');
    }
    res.render('flights/show', { flight });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.renderNew = (req, res) => {
  res.render('flights/new');
};

exports.create = async (req, res, next) => {
  try {
    const flight = new Flight(req.body);
    await flight.save();
    res.redirect('/flights');
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.addDestination = async (req, res, next) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) {
      return res.status(404).send('Flight not found');
    }

    // Assuming you have a form to add destinations, and 'airport' and 'arrival' are in req.body
    flight.destinations.push({ airport: req.body.airport, arrival: req.body.arrival });
    await flight.save();

    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
