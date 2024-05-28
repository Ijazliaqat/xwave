import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";
import Dastaan from "../../assets/dastaan-logo.png";
import Gaming from "../../assets/gaming-logo.png";
import Sapling from "../../assets/sapling-logo.png";
import Tech from "../../assets/tech-logo.png";
import Spera from "../../assets/feedback/spera.png";
import Upwork from "../../assets/feedback/upwork.png";
import Fiverr from "../../assets/feedback/fiverr.png";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Container } from "@mui/material";

const whiteLogos = [
  { logo: Dastaan },
  { logo: Gaming },
  { logo: Sapling },
  { logo: Tech },
  { logo: Spera },
  { logo: Upwork },
  { logo: Fiverr },
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
    <Container
      id="feedback"
      sx={{
        pt: { xs: 4, sm: 12 },
        position: "relative",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box id="logoCollection" sx={{ py: 4 }}>
        <Typography
          component="p"
          sx={{ fontSize: "1.4rem" }}
          variant="subtitle2"
          align="center"
          color="text.secondary"
        >
          Trusted by the best companies
        </Typography>
        <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
          <Swiper
            slidesPerView={3}
            spaceBetween={80}
            freeMode={true}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            loop={true}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {logos.map((logo, index) => (
              <SwiperSlide>
                <Grid item key={index}>
                  <img
                    src={logo?.logo}
                    alt={`Fake company number ${index + 1}`}
                    style={logoStyle}
                  />
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Box>
    </Container>
  );
}
