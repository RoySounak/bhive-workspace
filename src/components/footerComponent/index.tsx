import { Box, Typography } from "@mui/material";

const FooterComponent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2C3E50",
        color: "#fff",
        textAlign: "center",
        padding: "10px 0",
        position: "relative",
        width: "100%",
        bottom: 0,
        fontSize: "16px",
        "@media (max-width: 600px)": {
          fontSize: "12px",
          padding: "8px 0",
        },
        "@media (min-width: 600px) and (max-width: 960px)": {
          fontSize: "14px",
          padding: "9px 0",
        },
      }}
    >
      <Typography variant="body2">
        © Copyright 2024. Bhive Private Limited
      </Typography>
    </Box>
  );
};

export default FooterComponent;
