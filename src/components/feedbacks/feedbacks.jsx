import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import required modules
import { SwiperSlide, Swiper } from "swiper/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Muzammil from "../../assets/feedback/muzammil-xwave.jpeg";
import Zeeshan from "../../assets/feedback/zeeshan-xwave.jpeg";
import Aqsa from "../../assets/feedback/Aqsa-Sajjad.jpg";

const Feedbacks = () => {
  const feedbackArr = [
    {
      img: Muzammil,
      feedback: `I learnt a very in-demand skill – video editing from xWave. It
            helped me in finding a good job. I freelance as well and now I
            am finally earning my own income. I am satisfied with my
            decision to join xWave.`,
      name: "Muhammad Muzammil",
      job: "Video Editor @Fiverr",
    },
    {
      img: Zeeshan,
      feedback: `xWave isn’t merely a center; it’s a gateway to success. My mentor Ms. Anum helped me unlock my skills. Today, I proudly hold a position at Daastan, and my earnings now provide crucial support to my family.`,
      name: "Zeeshan Akran",
      job: "Designer @Dastaan",
    },
    {
      img: Aqsa,
      feedback: `The coordination and courses offered by xWave were exceptional. The graphics and the support from the team were truly impressive, making my journey as a graduate truly worthwhile.`,
      name: "Aqsa Sajjad",
      job: "Top Rated @Upwork",
    },
  ];
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          component="span"
          variant="h1"
          sx={{
            fontSize: "clamp(2.5rem, 2.2vw, 2.5rem)",
            marginLeft: "10px",
            color: (theme) =>
              theme.palette.mode === "light" ? "primary.main" : "primary.light",
          }}
        >
          Our Succes Stories
        </Typography>
      </Box>
      <Container
        id="feedback"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          position: "relative",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Swiper
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {feedbackArr?.map((feedback) => {
            return (
              <SwiperSlide>
                <Box
                  sx={(theme) => ({
                    flexShrink: 0,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "60px",
                    bgcolor:
                      theme.palette.mode === "light"
                        ? "rgba(255, 255, 255, 0.4)"
                        : "rgba(0, 0, 0, 0.4)",
                    backdropFilter: "blur(24px)",
                    border: "1px solid",
                    borderColor: "divider",
                    boxShadow:
                      theme.palette.mode === "light"
                        ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                        : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
                  })}
                >
                  <Grid container>
                    <Grid item xs={12} md={8} sx={{ textAlign: "center" }}>
                      <p>{feedback?.feedback}</p>
                      <h4>{feedback?.name}</h4>
                      <span>{feedback?.job}</span>
                    </Grid>

                    <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                      <img
                        height={"180px"}
                        width={"180px"}
                        style={{ borderRadius: "100%" }}
                        src={feedback?.img}
                        alt="Muzammil"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
};

export default Feedbacks;
