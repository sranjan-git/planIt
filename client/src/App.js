import React from "react";
import MyCalendar from "./components/Calendar";
import NavBar from "./components/Navbar"; 
import Home from "./components/Home"; 
import { Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { UserProvider } from "./context/ct"; // Import UserProvider

const App = () => {
  return (
    <UserProvider>
      <Router>
        {/* Navbar component will always be visible */}
        <NavBar />

        {/* Routes will handle page navigation */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        {/* Calendar is conditionally rendered if the user is logged in */}
        <Container>
          <MyCalendar />
        </Container>
      </Router>
    </UserProvider>
  );
};

export default App;
