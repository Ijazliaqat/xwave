import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CourseImage from "../../assets/feedback/course.png";

const Courses = () => {
  const courserArr = [
    {
      img: CourseImage,
      name: "Full Stack Developer",
      description:
        "Learn to build complete web applications from the ground up in a Full Stack Development course. Gain expertise in front-end technologies like HTML, CSS, and JavaScript frameworks, as well as back-end skills with server-side languages, databases, and deployment strategies.",
    },
    {
      img: CourseImage,
      name: "Frontend Developer",
      description:
        "Learn to design interactive web applications with a Front-End Development course. Become skilled in creating user interfaces using HTML, CSS, and JavaScript. Gain experience in responsive design principles, optimize workflows with Git, and master best practices.",
    },
    {
      img: CourseImage,
      name: "UI/UX Designing",
      description:
        "Learn the principles of crafting engaging digital experiences in a UI/UX Design course. Explore the visual aspects of user interface design, like color theory, typography, and layout, while gaining insight into user experience through wireframing, prototyping, and understanding user behavior.",
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
          Explore Courses
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
          {courserArr?.map((course) => {
            return (
              <>
                <Grid item xs={12} md={6} lg={4}>
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
                      src={course?.img}
                      alt=""
                    />

                    <h1>{course?.name}</h1>
                    <span>{course?.description}</span>
                    <Box mt={2} >
                      <Button fullWidth color="primary" variant="contained" size="small">
                        Apply Now
                      </Button>
                    </Box>
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

export default Courses;
