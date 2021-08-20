import React from "react";
import "./App.css";
import { Router } from "@reach/router";
//Pages
import Home from "./pages/Home";
import Country from "./pages/Country";
//Apollo
import { ApolloProvider } from "@apollo/client/react";
import { client } from "./graphql/client/Client";
//Theme
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/globalStyles";
import useDarkMode from "./hooks/useDarkMode";
import Navbar from "./components/navbar/Navbar";

const themes = {
  light: {
    label: "Ligth Mode",
    colors: {
      body: "hsl(0, 0%, 98%)",
      text: "hsl(200, 15%, 8%)",
      elements: "hsl(0, 0%, 100%)",
      input: "hsl(0, 0%, 52%)",
      shadow: "0px 0px 20px 2px rgba(43,57,69,0.46)",
      shadowInput: "0px 1px 8px 0px rgba(133, 133, 133, 0.65)",
    },
  },
  dark: {
    label: "Dark Mode",
    colors: {
      body: "hsl(207, 26%, 17%)",
      text: "hsl(0, 0%, 100%)",
      elements: "hsl(209, 23%, 22%)",
      shadow: "0px 0px 20px -6px rgba(250,250,250,0.75)",
    },
  },
};

const App = () => {
  const [theme, togglerTheme] = useDarkMode();

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <ApolloProvider client={client}>
        <Navbar toggler={togglerTheme} theme={theme} />
        <Router>
          <Home exact path="/" />
          <Country path="/country/:alpha2Code" />
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
};
export default App;
