import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/system";
import downloadImageNoOverlay from "../../assets/download_no_overlay.png";
import apple_badge from "../../assets/apple-store-badge.png";
import google_play_badge from "../../assets/google-play-badge.png";

const DownloadSection = styled(Box)(({ theme }) => ({
  padding: "20px",
  margin: "10px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  minHeight: "500px",
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
    justifyContent: "center",
  },
}));

const TopSection = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "80px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: "40px",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "2.25rem",
  textAlign: "start",
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1rem",
  },
  color: "#263238",
}));

const MainContent = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "8px",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  height: "200px",
  marginTop: "100px",
  width: "100%",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("md")]: {
    height: "auto",
    marginTop: 0,
    padding: "20px",
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: "20px",
  display: "flex",
  justifyContent: "center",
  height: "350px",
  [theme.breakpoints.down("md")]: {
    position: "static",
    height: "auto",
    marginBottom: "20px",
  },
  "& img": {
    maxWidth: "100%",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      maxWidth: "300px",
    },
  },
}));

const TextSection = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  paddingTop: "20px",
  paddingLeft: "700px",
  paddingRight: "32px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  [theme.breakpoints.down("md")]: {
    padding: "20px 0 0 0",
  },
}));

const StoreLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "12px",
  justifyContent: "flex-start",
  paddingLeft: "32px",
  [theme.breakpoints.down("md")]: {
    justifyContent: "space-around",
    paddingLeft: 0,
    flexWrap: "wrap",
  },
  "& img": {
    width: "146px",
    height: "45px",
    [theme.breakpoints.down("md")]: {
      width: "150px",
      height: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "140px",
      height: "50px",
    },
  },
}));

const AppInstallComponent = () => {
  return (
    <DownloadSection>
      <TopSection>
        <Title variant="h2">Download our app now</Title>
      </TopSection>

      <MainContent>
        <ImageContainer>
          <img src={downloadImageNoOverlay} alt="download overlay" />
        </ImageContainer>

        <TextSection>
          <Typography
            variant="body1"
            sx={{
              color: "#605F5F",
              fontSize: "18px",
              display: { xs: "none", md: "block" },
              fontWeight: 500,
            }}
          >
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
          </Typography>

          <StoreLinks>
            <Link
              href="https://play.google.com/store/apps/details?id=com.bhive.workspace"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={google_play_badge}
                draggable={false}
                alt="Google Play Badge"
              />
            </Link>
            <Link
              href="https://apps.apple.com/in/app/bhive-workspace/id6463923684"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={apple_badge}
                draggable={false}
                alt="Apple Store Badge"
              />
            </Link>
          </StoreLinks>
        </TextSection>
      </MainContent>
    </DownloadSection>
  );
};

export default AppInstallComponent;
