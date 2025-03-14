import { Box, IconButton } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";
import phone from "../../assets/phone.svg";

const HeaderComponent = () => {
  return (
    <Box
      component="header"
      sx={{
        height: 64,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: { xs: 2, md: 6 },
        boxShadow: 1,
        backgroundColor: "white",
        position: "sticky",
        top: 0,
        zIndex: 1100,
        width: "100%",
        maxWidth: "100vw",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            height: { xs: 24, sm: 28, md: 32, lg: 36 },
            width: "auto",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </Box>

      <IconButton
        sx={{
          border: "solid #FFB300",
          borderWidth: { xs: "1px", sm: "1.5px", md: "2px" },
          borderRadius: 1,
          ":hover": { backgroundColor: "#FFF8E1" },
          maxWidth: "100%",
          padding: { xs: "4px", md: "8px" },
        }}
      >
        <Box
          component="img"
          src={phone}
          alt="phone"
          sx={{
            height: { xs: 16, sm: 18, md: 20, lg: 22 },
            width: "auto",
            maxWidth: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </IconButton>
    </Box>
  );
};

export default HeaderComponent;
