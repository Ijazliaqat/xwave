import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Wardah from "../../assets/Wardah.jpg";
import Salah from "../../assets/Salah-NFT.gif";
import Misbah from "../../assets/Misbah-Shafi.jpg";
import Ommer from "../../assets/Ommer-Amer.jpeg";
import Abeera from "../../assets/Abeera-Khan.jpg";
import Zuhaib from "../../assets/Zuhaib-Shaikh.jpeg";
import Naqshab from "../../assets/Naqshab-Aqeel.jpg";
import Ijaz from "../../assets/1647750418001.jpg";
import Sania from "../../assets/Sania-Ijaz.png";

const Team = () => {
  const teams = [
    {
      img: Wardah,
      name: "Wardah Noor",
      job: "Founder/CEO",
    },
    {
      img: Salah,
      name: "Salahuddin",
      job: "Founder/Advisor",
    },
    {
      img: Misbah,
      name: "Misbah Shafi",
      job: "Learning & Development Lead",
    },
    {
      img: Ommer,
      name: "Ommer Amer",
      job: "Placements Manager",
    },
    {
      img: Abeera,
      name: "Abeera Khan",
      job: "Soft Skills Trainer",
    },
    {
      img: Zuhaib,
      name: "Zuhaib Shaikh",
      job: "Organizatioal Development Coach",
    },
    {
      img: Naqshab,
      name: "Naqshab Aqeel",
      job: "UI/UX Instructor",
    },
    {
      img: Ijaz,
      name: "Ijaz Liaqat",
      job: "Coding Instructor",
    },
    {
      img: Sania,
      name: "Sania Ijaz",
      job: "Academic Advisor",
    },
  ];
  return (
    <>
      <Box sx={{ textAlign: "center"}}>
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
          Meet xWave Team
        </Typography>
      </Box>

      <Container
        id="faq"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          position: "relative",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Grid container spacing={2}>
          {teams?.map((team) => {
            return (
              <>
                <Grid item xs={4}>
                  <Box
                    sx={(theme) => ({
                      flexShrink: 0,
                      borderRadius: "12px",
                      textAlign: "center",
                      padding: "20px",
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
                    <img
                      width="200px"
                      height={"200px"}
                      style={{ borderRadius: "80px" }}
                      src={team?.img}
                      alt=""
                    />

                    <h1>{team?.name}</h1>
                    <span>{team?.job}</span>
                  </Box>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Team;
