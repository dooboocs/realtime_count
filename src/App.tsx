import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { RecoilRoot } from "recoil";
import Dashboard from "./Dashboard";
import { GlobalStyles, MantineProvider, NormalizeCSS } from "@mantine/styles";

function App() {
  return (
    <RecoilRoot>
      <MantineProvider theme={{ colorScheme: "light" }}>
        <NormalizeCSS />
        <GlobalStyles />
        <Dashboard />
      </MantineProvider>
    </RecoilRoot>
  );
}

export default App;
