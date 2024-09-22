import React, { useState, useEffect } from "react";
import axios from "axios";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  Button,
  Container,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const localizer = momentLocalizer(moment);

const MyCalendar = ({ user }) => {
  const [events, setEvents] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    start: new Date(),
    end: new Date(),
  });

  useEffect(() => {
    if (user) {
      fetchEvents();
    }
  }, [user]);

  const fetchEvents = async () => {
    try {
      const response = await axios.post("http://localhost:5005/api/readevent", {
        email: user.email,
      });
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events", error);
    }
  };

  const handleOpenDialog = (event = null) => {
    if (event) {
      setNewEvent({
        title: event.title,
        description: event.description,
        start: new Date(event.start),
        end: new Date(event.end),
      });
      setCurrentEvent(event);
    } else {
      setNewEvent({
        title: "",
        description: "",
        start: new Date(),
        end: new Date(),
      });
      setCurrentEvent(null);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveEvent = async () => {
    const newEventData = {
      ...newEvent,
      email: user.email,
      start: moment(newEvent.start).utc().format(),
      end: moment(newEvent.end).utc().format(),
    };

    if (currentEvent) {
      await axios.post("http://localhost:5005/api/updateevent", {
        oldtitle: currentEvent.title,
        oldemail: user.email,
        newtitle: newEventData.title,
        description: newEventData.description,
        start: newEventData.start,
        end: newEventData.end,
      });
    } else {
      await axios.post("http://localhost:5005/api/addevent", newEventData);
    }
    fetchEvents();
    handleCloseDialog();
  };

  const handleDeleteEvent = async (event) => {
    await axios.post("http://localhost:5005/api/deleteevent", {
      title: event.title,
      email: user.email,
    });
    fetchEvents();
  };

  const handleSelectSlot = ({ start, end }) => {
    setNewEvent({
      ...newEvent,
      start,
      end,
    });
    handleOpenDialog();
  };

  return (
    <Container>
      <h1>Calendar</h1>
      <Box sx={{ marginBottom: "20px" }}>
        {/* <Button variant="contained" onClick={() => setEvents([])}>
          Clear Events
        </Button> */}
      </Box>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={(event) => handleOpenDialog(event)}
      />

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {currentEvent ? "Edit Event" : "Add New Event"}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            name="title"
            fullWidth
            margin="normal"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
          <TextField
            label="Description"
            name="description"
            fullWidth
            margin="normal"
            value={newEvent.description}
            onChange={(e) =>
              setNewEvent({ ...newEvent, description: e.target.value })
            }
          />
          <TextField
            label="Start Date & Time"
            type="datetime-local"
            name="start"
            fullWidth
            margin="normal"
            value={moment(newEvent.start).format("YYYY-MM-DDTHH:mm")}
            onChange={(e) => {
              setNewEvent({ ...newEvent, start: new Date(e.target.value) });
            }}
          />
          <TextField
            label="End Date & Time"
            type="datetime-local"
            name="end"
            fullWidth
            margin="normal"
            value={moment(newEvent.end).format("YYYY-MM-DDTHH:mm")}
            onChange={(e) => {
              setNewEvent({ ...newEvent, end: new Date(e.target.value) });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveEvent} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Box>
        <h2>All Events</h2>
        <List>
          {events.map((event, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={event.title}
                secondary={moment(event.start).format("MMMM Do YYYY, h:mm a")}
              />
              <IconButton
                onClick={() => handleOpenDialog(event)}
                color="primary"
              >
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => handleDeleteEvent(event)}
                color="secondary"
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default MyCalendar;