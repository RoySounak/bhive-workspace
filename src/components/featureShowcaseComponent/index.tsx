import { Box, Typography, Grid, useTheme } from "@mui/material";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import cafe from "../../../public/icons/feat_cafe.svg";
import events from "../../../public/icons/feat_events.svg";
import gym from "../../../public/icons/feat_gym.svg";
import wifi from "../../../public/icons/feat_wifi.svg";
import money from "../../../public/icons/feat_affordable.svg";
import hotel from "../../../public/icons/feat_lounges.svg";
import book from "../../../public/icons/feat_quick_book.svg";
import sports from "../../../public/icons/feat_sports.svg";

const features = [
  {
    icon: (
      <img src={events} alt="cafe icon" style={{ width: 24, height: 24 }} />
    ),
    text: "Community Events",
    secondaryText: "Join our vibrant community",
  },
  {
    icon: <img src={gym} alt="cafe icon" style={{ width: 24, height: 24 }} />,
    text: "Gym Facilities",
    secondaryText: "Stay fit with our modern equipment",
  },
  {
    icon: <img src={wifi} alt="cafe icon" style={{ width: 24, height: 24 }} />,
    text: "High-Speed WiFi",
    secondaryText: "Fast and reliable internet",
  },
  {
    icon: <img src={cafe} alt="cafe icon" style={{ width: 24, height: 24 }} />,
    text: "Cafe & Tea Bar",
    secondaryText: "Relax with a cup of coffee",
  },
  {
    icon: <img src={money} alt="cafe icon" style={{ width: 24, height: 24 }} />,
    text: "Affordable",
    secondaryText: "Prices that fit your budget",
  },
  {
    icon: <img src={hotel} alt="cafe icon" style={{ width: 24, height: 24 }} />,
    text: "Comfort Lounges",
    secondaryText: "Unwind in our cozy lounges",
  },
  {
    icon: <img src={book} alt="cafe icon" style={{ width: 24, height: 24 }} />,
    text: "Quick Booking",
    secondaryText: "Book your stay with ease",
  },
  {
    icon: (
      <img src={sports} alt="cafe icon" style={{ width: 24, height: 24 }} />
    ),
    text: "Sports Area",
    secondaryText: "Get active with our sports facilities",
  },
];

export default function FeatureShowcaseComponent() {
  const theme = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>();

  const isExtraSmall = useMediaQuery("(max-width: 400px)");
  const isSmall = useMediaQuery("(max-width: 600px)");
  const isMedium = useMediaQuery("(max-width: 900px)");

  return (
    <Box sx={{ p: { xs: 1, md: 2 }, overflowX: "hidden" }} mb={8} mt={7}>
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          fontWeight: "bold",
          fontSize: isExtraSmall
            ? "1rem"
            : isSmall
            ? "1.2rem"
            : isMedium
            ? "1.3rem"
            : "2.25rem",
          textAlign: "start",
          color: theme.palette.text.primary,
        }}
      >
        Why Choose us?
      </Typography>
      <Grid container spacing={0.5} sx={{ justifyContent: "center" }}>
        {features.map((feature, index) => (
          <Grid
            item
            key={index}
            xs={isExtraSmall ? 6 : isSmall ? 4 : 3}
            sm={isExtraSmall ? 6 : isSmall ? 4 : 3}
            md={isExtraSmall ? 6 : isSmall ? 4 : 3}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
              },
              alignItems: "center",
              justifyContent: "center",
              gap: {
                xs: 0.5,
                sm: 0.5,
                md: 0.5,
                lg: 2,
              },
              p: isExtraSmall ? 0.5 : 1,
              border: `1px solid ${theme.palette.grey[600]}`,
              borderRadius: "4px",
              height: isExtraSmall ? "80px" : isSmall ? "90px" : "100px",
              textAlign: "center",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Box
              sx={{
                color: "#FFB300",
                fontSize: isExtraSmall ? 16 : isSmall ? 18 : isMedium ? 20 : 28,
              }}
            >
              {feature.icon}
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              <Typography
                variant="body1"
                sx={{
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  fontSize: isExtraSmall
                    ? "0.7rem"
                    : isSmall
                    ? "0.8rem"
                    : isMedium
                    ? "0.9rem"
                    : "1.2rem",
                  mt: 1,
                  mb: 0,
                  textAlign: "start",
                  alignItems: "center",
                }}
              >
                {feature.text}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  fontSize: isExtraSmall
                    ? "0.5rem"
                    : isSmall
                    ? "0.6rem"
                    : isMedium
                    ? "0.7rem"
                    : "0.9rem",
                  opacity: hoveredIndex === index ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out",
                }}
              >
                {feature.secondaryText}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
