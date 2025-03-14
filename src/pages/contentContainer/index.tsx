import React, { ReactNode } from "react";
import MarketingPageContainer from "../marketingPageContainer";
import WorkSpaceShowcaseContainer from "../workSpaceShowcaseContainer";
import FeatureShowcaseContainer from "../featureShowcaseContainer";
import AppInstallPageContainer from "../appInstallPageContainer";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";

interface ContentLayoutProps {
  children: ReactNode;
}

const ContentContainer = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const ContentLayout = ({ children }: ContentLayoutProps) =>
    isLargeScreen ? (
      <Box p={{ xs: "1rem", lg: "1rem 5rem" }}>{children}</Box>
    ) : (
      <Container maxWidth="lg">{children}</Container>
    );

  return (
    <>
      <MarketingPageContainer />
      <ContentLayout>
        <FeatureShowcaseContainer />
        <WorkSpaceShowcaseContainer />
        <AppInstallPageContainer />
      </ContentLayout>
    </>
  );
};

export default ContentContainer;
