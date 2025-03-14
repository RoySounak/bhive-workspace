import { Box, Grid2, Typography, useTheme } from "@mui/material";
import direction from "../../assets/direction.svg";

type WorkSpaceCardProps = {
  address: string;
  distance?: number;
};

const Header: React.FC<WorkSpaceCardProps> = ({ address, distance }) => {
  const theme = useTheme();
  return (
    <Grid2 container spacing={2} p={1} m={"15px 15px 8px 12px"}>
      <Grid2 size={10}>
        <Box
          sx={{
            width: "250px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            [theme.breakpoints.down("sm")]: {
              width: "150px",
            },
            [theme.breakpoints.down("xs")]: {
              width: "120px",
            },
          }}
        >
          <Typography
            fontWeight={600}
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {address}
          </Typography>
        </Box>
      </Grid2>
      <Grid2 size={2}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"6px"}
          border={"1px solid #D6D9E0"}
          boxShadow={"0px 3px 10px rgba(102, 124, 188, 0.25)"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box>
            <img
              src={direction}
              alt="Direction"
              style={{ width: "10px", height: "10px", objectFit: "contain" }}
            />
          </Box>
          <Box>
            <Typography fontWeight={600} fontSize={6} color="gray">
              6 kms
            </Typography>
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default Header;
