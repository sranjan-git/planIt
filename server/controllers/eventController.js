const Event = require('../models/Event');

// Add Event
exports.addEvent = async (req, res) => {
  try {
    const { email, title, description, start, end } = req.body;
    const newEvent = new Event({ email, title, description, start, end });
    await newEvent.save();
    res.json({ message: 'Event added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add event' });
  }
};

// Read Events
exports.readEvents = async (req, res) => {
  try {
    const { email } = req.body;
    const events = await Event.find({ email });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
};

// Update Event
exports.updateEvent = async (req, res) => {
  try {
    const { oldtitle, oldemail, newtitle, description, start, end } = req.body;
    await Event.findOneAndUpdate(
      { email: oldemail, title: oldtitle },
      { title: newtitle, description, start, end }
    );
    res.json({ message: 'Event updated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update event' });
  }
};

// Delete Event
exports.deleteEvent = async (req, res) => {
  try {
    const { title, email } = req.body;
    await Event.findOneAndDelete({ title, email });
    res.json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete event' });
  }
};
