import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import WorkSpaceCard from "../workSpaceCard";

export interface Response {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  google_maps_url: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description?: string | null;
  rules?: Record<string, unknown> | null;
  amenities: string[];
  images: string[];
  working_hours_start: string;
  working_hours_end: string;
  contact_person_name: string;
  facilities?: Record<string, unknown> | null;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: {
    [key: string]: {
      value: number;
      message: string;
    };
  };
  manager_id?: string | null;
}

const WorkSpaceShowcaseComponent = () => {
  const [workspaces, setWorkspaces] = useState<Response[]>([]);
  const theme = useTheme();

  const isExtraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const fetchData = async () => {
    try {
      const response = await axios.get("/data.json"); 
      setWorkspaces(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to load workspace data...");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={{ p: { xs: 1, md: 2 }, overflowX: "hidden" }}>
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          fontWeight: "bold",
          fontSize: isExtraSmall ? "1rem" : isSmall ? "1.2rem" : "2.25rem",
          textAlign: "start",
          color: theme.palette.text.primary,
        }}
      >
        Our Space Overview
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: theme.spacing(4),
          mt: theme.spacing(5),
        }}
      >
        {workspaces.map((workspace) => (
          <WorkSpaceCard
            key={workspace.id}
            address={workspace.address}
            distance={Math.floor(Math.random() * (10 - 6 + 1)) + 6}
            price={`₹ ${workspace.day_pass_price}`}
            discount={workspace.day_pass_discounts_percentage["10"]?.value}
            imagePath={workspace.images[0]}
          />
        ))}
      </Box>
    </Box>
  );
};

export default WorkSpaceShowcaseComponent;
