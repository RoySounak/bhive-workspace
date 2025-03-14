import { Box, Grid2, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import workspacelogo from "../../assets/workspace.svg";
import Header from "./Header";
import Footer from "./Footer";

type WorkSpaceCardProps = {
  key?: string;
  address: string;
  distance?: number;
  price: string;
  discount?: number;
  imagePath: string;
};

const WorkSpaceCard: React.FC<WorkSpaceCardProps> = ({
  address,
  distance,
  price,
  discount = "",
  imagePath,
}) => {
  const isVeryExtraSmallScreen = useMediaQuery("(max-width:260px)");
  const isExtraSmallScreen = useMediaQuery("(max-width:480px)");
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:965px)");

  const boxStyles = {
    borderRadius: "8px",
    border: "1.08px solid #D6D9E0",
    boxShadow: "0px 3px 10px rgba(102, 124, 188, 0.25)",
    width: isSmallScreen ? 280 : isMediumScreen ? 320 : 370,
    height: isSmallScreen ? 306 : isMediumScreen ? 336 : 370,
    top: isSmallScreen ? "auto" : isMediumScreen ? "800px" : "1090px",
    left: isSmallScreen ? "auto" : isMediumScreen ? "50px" : "120px",
    margin: isSmallScreen ? "10px auto" : "0",
  };

  const theme = useTheme();

  return (
    <Box sx={boxStyles}>
      <Header address={address} distance={distance} />
      <Box
        sx={{
          position: "relative",
          borderRadius: "6px",
          border: "1px solid #D6D9E0",
          boxShadow: "0px 3px 10px rgba(102, 124, 188, 0.25)",
          width: "90%",
          height: isSmallScreen ? 150 : isMediumScreen ? 180 : 202,
          m: "0 auto",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={imagePath}
          alt="workspace"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            backgroundColor: "#2D3748",
            color: theme.palette.primary.contrastText,
            padding: "4px 8px",
            borderRadius: "4px",
            fontWeight: "bold",
            fontSize: "14px",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.3)",
          }}
        >
          <Box>
            <img
              src={workspacelogo}
              alt="cafe icon"
              style={{
                width: 15,
                height: 15,
                verticalAlign: "text-top",
                marginRight: "0.1rem",
              }}
            />
          </Box>
          <Typography fontSize={isMediumScreen ? 10 : 12} fontWeight={600}>
            Workspace
          </Typography>
        </Box>
      </Box>
      {Footer(
        isMediumScreen,
        isVeryExtraSmallScreen,
        isExtraSmallScreen,
        isSmallScreen,
        theme,
        price,
        discount
      )}
    </Box>
  );
};

export default WorkSpaceCard;
