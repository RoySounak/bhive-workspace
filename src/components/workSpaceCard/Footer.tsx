import { Box, Grid2, Theme, Typography } from "@mui/material";
import arrow from "../../assets/arrow-removebg-preview.png";

export default function Footer(
  isMediumScreen: boolean,
  isVeryExtraSmallScreen: boolean,
  isExtraSmallScreen: boolean,
  isSmallScreen: boolean,
  theme: Theme,
  price: string,
  discount: string | number
) {
  return (
    <Grid2 container m={"15px 0px 0px 12px"}>
      <Grid2 size={6}>
        <Box
          sx={{
            borderRadius: isMediumScreen ? "5px" : "6px",
            border: "0.5px solid #D6D9E0",
            boxShadow: "0px 3px 10px rgba(102, 124, 188, 0.25)",
            width: isVeryExtraSmallScreen
              ? "80px"
              : isExtraSmallScreen
              ? "122px"
              : isSmallScreen
              ? "132px"
              : isMediumScreen
              ? "142px"
              : "90%",
            height: isVeryExtraSmallScreen
              ? "48px"
              : isExtraSmallScreen
              ? "48px"
              : isSmallScreen
              ? "58px"
              : isMediumScreen
              ? "62px"
              : "66px",
            m: "0 auto",
            backgroundColor:
              theme.components?.MuiButton?.styleOverrides?.containedSecondary,
            cursor: "pointer",
          }}
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Box
              display="flex"
              flexDirection="column"
              p={isMediumScreen ? 1 : 1.5}
            >
              <Typography
                color={theme.palette.text.secondary}
                fontSize={isMediumScreen ? 10 : 12}
                fontWeight={600}
              >
                Day Pass
              </Typography>
              <Typography>
                <span
                  style={{
                    fontSize: isMediumScreen ? 10 : 12,
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                  }}
                >
                  {price}
                </span>{" "}
                <span
                  style={{ color: "gray", fontSize: isMediumScreen ? 8 : 10 }}
                >
                  / Day
                </span>
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              minWidth="26px"
              marginLeft={isMediumScreen ? "0.5rem" : "1rem"}
              marginRight={isMediumScreen ? "0.5rem" : "1rem"}
            >
              <img
                src={arrow}
                alt="arrow"
                style={{
                  width: isMediumScreen ? "22px" : "28px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Grid2>

      <Grid2 size={6}>
        <Box
          sx={{
            borderRadius: isMediumScreen ? "5px" : "6px",
            border: "0.5px solid #D6D9E0",
            boxShadow: "0px 3px 10px rgba(102, 124, 188, 0.25)",
            width: isVeryExtraSmallScreen
              ? "80px"
              : isExtraSmallScreen
              ? "122px"
              : isSmallScreen
              ? "132px"
              : isMediumScreen
              ? "142px"
              : "90%",
            height: isVeryExtraSmallScreen
              ? "48px"
              : isExtraSmallScreen
              ? "48px"
              : isSmallScreen
              ? "58px"
              : isMediumScreen
              ? "62px"
              : "66px",
            backgroundColor:
              theme.components?.MuiButton?.styleOverrides?.containedPrimary,
            position: "relative",
            m: "0 auto",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: isMediumScreen ? "-8px" : "-10px",
              left: isMediumScreen ? "30px" : "50px",
              backgroundColor: "#2B2B2B",
              color: "#FFF",
              fontSize: isMediumScreen ? "8px" : "10px",
              padding: isMediumScreen ? "1px 4px" : "2px 6px",
              borderRadius: "4px",
            }}
          >
            {discount}% <span style={{ marginLeft: "0.2rem" }}>Discount</span>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="100%"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexGrow={1}
              padding={isMediumScreen ? 1 : 1.5}
              overflow="hidden"
            >
              <Box display="flex" flexDirection="column">
                <Typography
                  color={theme.palette.text.secondary}
                  fontSize={isMediumScreen ? 10 : 12}
                  fontWeight={600}
                  noWrap
                >
                  Bulk Pass
                </Typography>
                <Typography noWrap>
                  <span
                    style={{
                      fontSize: isMediumScreen ? 10 : 12,
                      color: theme.palette.text.primary,
                      fontWeight: 600,
                    }}
                  >
                    ₹ 2400
                  </span>{" "}
                  <span
                    style={{
                      color: theme.palette.text.secondary,
                      fontSize: isMediumScreen ? 8 : 10,
                    }}
                  >
                    / 10 Days
                  </span>
                </Typography>
              </Box>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              minWidth="26px"
              marginRight={isMediumScreen ? "0.5rem" : "1rem"}
            >
              <img
                src={arrow}
                alt="arrow"
                style={{
                  width: isMediumScreen ? "22px" : "28px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  );
}
