import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

const CalendarPage: React.FC = () => {


  type CustomEvent = {
    title: string;
    start: Date;
    end?: Date;
    allDay: boolean;
    backgroundColor: string;
    borderColor: string;
  };

  type Event = {
    title: string;
    start: Date;
    duration: number;
    allDay: boolean;
    backgroundColor: string;
    fee: number;
    borderColor: string;
    end?: Date;
    color?: string;
  };

  const clientsData_init = [
    { id: 1, name: 'Brad Pitt' },
    { id: 2, name: 'Adam Cohen' },
    // Add more clients
  ];

  const [clientsData, setClientsData] = useState(clientsData_init);

  const [appointment, setAppointment] = useState<Event[]>([]);
  const [newClientDrawerOpen, setNewClientDrawerOpen] = useState(false);
  const [clientDetails, setClientDetails] = useState({
    id: clientsData.length + 1,
    name: '',
    lastname: '',
    email: '',
    phone: '',
  });


  const handleNewClientDrawerOpen = () => {
    setNewClientDrawerOpen(true);
    handleClose();
  };

  const handleNewClientDrawerClose = () => {
    setNewClientDrawerOpen(false);
  };




  const [formDetails, setFormDetails] = useState<Event>({
    title: '',
    start: new Date(),
    duration: 0,
    allDay: false,
    backgroundColor: '#ade9cd',
    fee: 0,
    borderColor: '#ade9cd',
    color: 'black',
  });

  const [events, setEvents] = useState<CustomEvent[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  useEffect(() => {
    const localDate = new Date();
    const timezoneOffsetInMinutes = localDate.getTimezoneOffset();
    const adjustedDate = new Date(
      localDate.getTime() - timezoneOffsetInMinutes * 60 * 1000
    );
    setSelectedDate(adjustedDate);
  }, []);

  const handleNewClientsave = () => {
    setNewClientDrawerOpen(false);
    // form details to client list
    clientsData.push(clientDetails);
    setClientsData(clientsData);
    console.log(clientDetails);
    setClientDetails({
      id: clientsData.length + 1,
      name: '',
      lastname: '',
      email: '',
      phone: '',
    });
  };


  const handleDateClick = (arg: any) => {
    const localDate = new Date(arg.date);
    const timezoneOffsetInMinutes = localDate.getTimezoneOffset();
    const adjustedDate = new Date(
      localDate.getTime() - timezoneOffsetInMinutes * 60 * 1000
    );
    console.log(arg.date);
    console.log(adjustedDate);
    setSelectedDate(adjustedDate);
    // setFormDetails({ ...formDetails, duration: 60 });
    // setSelectedDate(arg.date);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  // const handleSave = () => {
  //   if (!selectedDate) {
  //     alert("Please select a date and time.");
  //     return;
  //   }

  //   const newEvent: CustomEvent = {
  //     title: clientName + ' - ' + eventDuration,
  //     start: selectedDate,
  //     allDay: false,
  //     backgroundColor: '#ade9cd',
  //     borderColor: '#3f51b5',
  //   };
  //   setEvents([...events, newEvent]);
  //   setOpen(false);
  //   setClientName('');
  //   setEventDuration('');
  // };

  const addDurationToDate = (date: Date, duration: number) => {
    const newDate = new Date(date);
    newDate.setMinutes(newDate.getMinutes() + Number(duration));
    return newDate;
  };

  const submitHandler = () => {
    console.log(formDetails);
    console.log(selectedDate);
    // adjust selected date to local timezone
    const localDate = new Date(selectedDate);
    const timezoneOffsetInMinutes = localDate.getTimezoneOffset();
    const adjustedDate = new Date(
      localDate.getTime() + timezoneOffsetInMinutes * 60 * 1000
    );
    setSelectedDate(adjustedDate);
    const endDate = addDurationToDate(adjustedDate, formDetails.duration);
    console.log(endDate);
    const newEvent: Event = {
      title: formDetails.title,
      start: adjustedDate,
      duration: formDetails.duration,
      allDay: formDetails.allDay,
      backgroundColor: '#ade9cd',
      borderColor: '#ade9cd',
      end: endDate,
      fee: formDetails.fee,
      color: 'black',
    };
    setAppointment([...appointment, newEvent]);
    setOpen(false);
    setFormDetails({
      title: '',
      start: new Date(),
      duration: 0,
      allDay: false,
      backgroundColor: '#ade9cd',
      fee: 0,
      borderColor: '',
      color: 'black',
    });
    console.log(appointment);

  };



  return (
    <div style={{
      // overflow:"hidden",
    }}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={appointment}
        dateClick={handleDateClick}
        initialView="timeGridWeek"
        // make half an hour line invisible
        nowIndicator={true}
        height="90vh"
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Appointment</DialogTitle>
        <DialogContent>
          <div>
            <TextField
              select
              margin="dense"
              label="Client Name"
              value={formDetails.title || ''}
              onChange={(e) => setFormDetails({ ...formDetails, title: e.target.value })
              }
              sx={{
                width: '70%',
              }}
            >
              {clientsData.map((client) => (
                <MenuItem key={client.id} value={client.name}>
                  {client.name}
                </MenuItem>
              ))}
            </TextField>
            {/*  new clent button*/}
            <Button variant="outlined" onClick={handleNewClientDrawerOpen} sx={{
              marginLeft: '10px',
              marginTop: '20px',
            }}>New Client</Button>

          </div>

          <TextField margin='dense' type="datetime-local" value={selectedDate?.toISOString().substring(0, 16)} onChange={(e) => {
            const localDate = new Date(e.target.value);
            const timezoneOffsetInMinutes = localDate.getTimezoneOffset();
            const adjustedDate = new Date(
              localDate.getTime() - timezoneOffsetInMinutes * 60 * 1000
            );
            setSelectedDate(adjustedDate);
          }} />
          <TextField
            margin="dense"
            label="Event Duration"
            value={formDetails.duration || 0}
            type='number'
            onChange={(e) => setFormDetails({ ...formDetails, duration: parseInt(e.target.value) })}
            sx={{
              marginLeft: '10px',
            }}
          />
          <TextField
            margin="dense"
            label="Fee"
            value={0 || formDetails.fee}
            type='number'
            onChange={(e) => setFormDetails({ ...formDetails, fee: parseInt(e.target.value) })}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={formDetails.allDay}
                onChange={(e) => setFormDetails({ ...formDetails, allDay: e.target.checked })}
              />
            }
            label="All Day"
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitHandler}>Add Event</Button>
        </DialogActions>
      </Dialog>

      <Drawer anchor="right" open={newClientDrawerOpen} onClose={handleNewClientDrawerClose}>
        <Box sx={{ width: 650, padding: 2 }}>
          <DialogTitle>New Client</DialogTitle>
          <DialogContent>
            <TextField margin="dense" label="Legal First Name"
              onChange={(e) => {
                setClientDetails({ ...clientDetails, name: e.target.value })
              }
              }
            />
            <TextField
              sx={
                {
                  marginLeft: '20px',
                }
              }
              onChange={(e) => {
                setClientDetails({ ...clientDetails, lastname: e.target.value })
              }
              }
              margin="dense" label="Legal Last Name" />
            <TextField margin="dense" label="Email Address"
              onChange={(e) => {
                setClientDetails({ ...clientDetails, email: e.target.value })
              }
              }
              fullWidth />
            <TextField margin="dense" label="Phone" fullWidth
              onChange={(e) => {
                setClientDetails({ ...clientDetails, phone: e.target.value })
              }
              }
            />
            {/* Add more fields as needed */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleNewClientDrawerClose}>Cancel</Button>
            <Button onClick={handleNewClientsave}>Save</Button>
          </DialogActions>
        </Box>
      </Drawer>

    </div>
  );
};

export default CalendarPage;
// export client data from file
