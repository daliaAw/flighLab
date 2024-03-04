const Ticket = require('../model/ticket');

exports.renderNew = (req, res) => {
  res.render('tickets/new');
};

exports.create = async (req, res, next) => {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.redirect('/tickets');
  } catch (err) {
    console.error(err);
    next(err);
  }
};
