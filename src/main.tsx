import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

const globalCSS = css`
  body {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgb(207, 210, 212);
    background-image: url(https://r4.wallpaperflare.com/wallpaper/734/787/591/stock-macos-mojave-dunes-night-wallpaper-37afd2d4bf05cf9a4f92248191b18775.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Global styles={globalCSS} />
        <CSSReset />
        <Navbar />
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

