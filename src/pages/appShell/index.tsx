import React from "react";
import { Box } from "@mui/material";
import HeaderContainer from "../headerContainer";
import ContentContainer from "../contentContainer";
import FooterContainer from "../footerContainer";

const AppShell = () => {
  return (
    <Box>
      <HeaderContainer />
      <ContentContainer />
      <FooterContainer />
    </Box>
  );
};

export default AppShell;
