/* eslint-disable @typescript-eslint/no-unused-vars */
import { Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import { Container } from "@mui/material";
import Login from "./components/Login";

function App() {
  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        mx: 0,
        height: "100%",
        width: "100%",
      }}
    >
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Container>
  );
}

export default App;
