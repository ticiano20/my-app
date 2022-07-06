import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Home = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <ItemListContainer />
      </ThemeProvider>
    </div>
  );
};

export default Home;
