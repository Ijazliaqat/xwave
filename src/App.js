import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import "./App.css";
import AppAppBar from "./components/appbar/appbar";
import getLPTheme from "./theme/theme";
import Hero from "./components/hero/hero";
import LogoCollection from "./components/partners-section/partners-section";
import FAQs from "./components/faqs/faqs.jsx";
import Team from "./components/team/team.jsx"

// function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         width: "100dvw",
//         position: "fixed",
//         bottom: 24,
//       }}
//     >
//       <ToggleButtonGroup
//         color="primary"
//         exclusive
//         value={showCustomTheme}
//         onChange={toggleCustomTheme}
//         aria-label="Platform"
//         sx={{
//           backgroundColor: "background.default",
//           "& .Mui-selected": {
//             pointerEvents: "none",
//           },
//         }}
//       >
//         <ToggleButton value>
//           <AutoAwesomeRoundedIcon sx={{ fontSize: "20px", mr: 1 }} />
//           Custom theme
//         </ToggleButton>
//         <ToggleButton value={false}>Material Design 2</ToggleButton>
//       </ToggleButtonGroup>
//     </Box>
//   );
// }

function App() {
  const [mode, setMode] = useState("light");
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <>
      <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
        <CssBaseline />
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Hero />
        <Box sx={{ bgcolor: 'background.default' }}>
          <LogoCollection />
          <FAQs />
          <Team />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
