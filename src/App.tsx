import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CalendarPage from './pages/CalendarPage';
import ClientsPage from './pages/ClientsPage';
// import MeetingsPage from './pages/MeetingsPage';
import { Box } from '@mui/material';

function App() {
  return (
    <Router>
      <Header />
      <Box display="flex">
        <Sidebar />
        <Box
          component="main"
          flexGrow={1}
          sx={{
            paddingTop: '64px', // Compensate for the header height
            marginLeft: '200px', // Set the left margin to the width of the sidebar
          }}
        >
          <Routes>
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            {/* <Route path="/meetings" element={<MeetingsPage />} /> */}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
