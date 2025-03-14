import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import hero from "../../assets/hero_illustration_video.mp4";
import background from "../../assets/background.png";

const MarketingComponent = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery(
    "(min-width:601px) and (max-width:1199px)"
  );
  const isLargeScreen = useMediaQuery("(min-width:1200px)");

  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        alignItems: "center",
        position: "relative",
      }}
    >
      {!isSmallScreen && !isMediumScreen && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "80%",
            height: "100%",
            zIndex: -1,
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      <Box
        sx={{
          width: "100%",
          height: isSmallScreen ? "300px" : isMediumScreen ? "400px" : "514px",
          display: "flex",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "flex-end",
          },
          alignItems: "center",
          order: isSmallScreen ? 0 : 1,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: isSmallScreen ? "80%" : "60%",
            height: "100%",
          }}
        >
          <video
            src={hero}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#FFBB00",
              opacity: 0.09,
              clipPath: "polygon(100% 0, 100% 86%, 62% 100%, 0 59%, 0 0)",
              zIndex: 1,
            }}
          />
        </Box>
      </Box>

      <Box
        ml={3}
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: isLargeScreen ? "center" : "center",
          px: 2,
          mb: isSmallScreen ? 2 : 0,
          mt: isSmallScreen ? 2 : 0,
          order: isSmallScreen ? 1 : 0,
        }}
      >
        <Box sx={{ zIndex: 1, position: "relative" }}>
          <Typography
            variant={isSmallScreen ? "h6" : isMediumScreen ? "h5" : "h2"}
            sx={{
              fontWeight: "bold",
              color: theme.palette.text.primary,
              lineHeight: isSmallScreen ? 1.1 : 1.2,
              fontSize: isSmallScreen
                ? "0.8rem"
                : isMediumScreen
                ? "1.2rem"
                : "3.625rem",
              textAlign: isSmallScreen ? "center" : "left",
            }}
          >
            Host your meeting with <br />
            world-class amenities.
          </Typography>
          <Typography
            variant={isSmallScreen ? "h6" : isMediumScreen ? "h5" : "h2"}
            sx={{
              fontWeight: "bold",
              color: theme.palette.text.primary,
              lineHeight: isSmallScreen ? 1.1 : 1.2,
              fontSize: isSmallScreen
                ? "0.8rem"
                : isMediumScreen
                ? "1.2rem"
                : "3.625rem",
              textAlign: isSmallScreen ? "center" : "left",
            }}
          >
            Starting at
            <Typography
              component="span"
              sx={{
                color: theme.palette.primary.contrastText,
                fontWeight: "bold",
                fontSize: isSmallScreen
                  ? "1rem"
                  : isMediumScreen
                  ? "2rem"
                  : "3.4rem",
                marginLeft: "0.5rem",
                display: isSmallScreen ? "block" : "inline",
                textAlign: "center",
              }}
            >
              ₹199/-!
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MarketingComponent;
