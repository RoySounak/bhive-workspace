import { Box, IconButton } from "@mui/material";
import logo from "../assets/logo.png";
import phone from "../assets/phone.svg";

export default function CustomHeader() {
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
        width: "100%", // Ensure header spans the full width
        maxWidth: "100vw", // Prevent overflow on very small screens
        boxSizing: "border-box", // Ensure padding doesn’t expand width
      }}
    >
      {/* Logo */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            height: { xs: 24, sm: 28, md: 32, lg: 36 },
            width: "auto",
            maxWidth: "100%", // Ensures logo never exceeds container width
            objectFit: "contain", // Maintain aspect ratio without stretching
          }}
        />
      </Box>

      {/* Call Icon Button */}
      {/* Call Icon Button */}
      {/* Call Icon Button */}
      <IconButton
        sx={{
          border: "solid #FFB300",
          borderWidth: { xs: "1px", sm: "1.5px", md: "2px" }, // Responsive border thickness
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
}
