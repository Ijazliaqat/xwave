import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";
import Dastaan from "../../assets/dastaan-logo.png";
import Gaming from "../../assets/gaming-logo.png";
import Sapling from "../../assets/sapling-logo.png";
import Tech  from "../../assets/tech-logo.png";

const whiteLogos = [
  { logo: Dastaan },
  { logo: Gaming },
  { logo: Sapling },
  { logo: Tech },
];



const logoStyle = {
  width: "100px",
  height: "80px",
  margin: "0 32px",
  opacity: 0.7,
};

export default function LogoCollection() {
  const theme = useTheme();
  //   will change with dark logos
  const logos = theme.palette.mode === "light" ? whiteLogos : whiteLogos;

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        sx={{fontSize:"1.4rem"}}
        variant="subtitle2"
        align="center"
        color="text.secondary"
      >
        Trusted by the best companies
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo?.logo}
              alt={`Fake company number ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
