import { React } from "react";
import { Container, Grid, Typography, Link, Box } from "@mui/material";
import colors from "../utilities/color";

const drawerWidth = 240;

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: colors.primary,
        py: 2,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        zIndex: 1000,
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color={colors.white} fontWeight="bold">
              &copy; TOUS DROITS RÉSERVÉS 2015 - 2023 UNIVERSITÉ ESPOIR
            </Typography>

            <Typography
              variant="body2"
              color={colors.white}
              fontWeight="bold"
              style={{ display: "inline", marginRight: "5px" }}
            >
              UN MINISTÈRE DE
            </Typography>

            <Link
              href="https://uespoir.edu.ht/fr/"
              underline="none"
              target="_blank"
              rel="noopener"
              style={{ display: "inline" }}
            >
              <Typography
                variant="body2"
                color={colors.accent}
                fontWeight="bold"
                style={{ display: "inline" }}
              >
                CALVARY CHAPEL PORT-AU-PRINCE
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="body2"
              color={colors.white}
              fontWeight="bold"
              style={{ display: "inline", marginRight: "5px" }}
            >
              DEVELOPPÉ PAR
            </Typography>

            <Link
              href="https://zoomerdigital.tech/"
              underline="none"
              target="_blank"
              rel="noopener"
              style={{ display: "inline" }}
            >
              <Typography
                variant="body2"
                color={colors.accent}
                fontWeight="bold"
                style={{ display: "inline" }}
              >
                ZOOMER DIGITAL
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
