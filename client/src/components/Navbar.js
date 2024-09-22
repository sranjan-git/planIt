// src/NavBar.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { signInWithGoogle, signOutUser } from "../firebase";

const NavBar = ({ user, setUser }) => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();
      setUser(null);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          PlanIt.
        </Typography>

        {user ? (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body1" sx={{ marginRight: "20px" }}>
              Welcome, {user.displayName}
            </Typography>
            <Button color="inherit" onClick={handleSignOut}>
              Sign Out
            </Button>
          </Box>
        ) : (
          <Button
            color="inherit"
            onClick={handleGoogleSignIn}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google"
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
            Sign in 
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
