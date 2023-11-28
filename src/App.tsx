/* eslint-disable @typescript-eslint/no-unused-vars */
import { Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import { Container } from "@mui/material";
import Login from "./components/Login";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Container>
  );
}

export default App;
