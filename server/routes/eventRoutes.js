const express = require('express');
const { addEvent, readEvents, updateEvent, deleteEvent } = require('../controllers/eventController');
const router = express.Router();

router.post('/addevent', addEvent);
router.post('/readevent', readEvents);
router.post('/updateevent', updateEvent);
router.post('/deleteevent', deleteEvent);

module.exports = router;
