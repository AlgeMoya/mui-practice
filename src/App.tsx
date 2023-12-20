/* eslint-disable @typescript-eslint/no-unused-vars */
import { Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import { Container } from "@mui/material";
import Login from "./components/Login";
import SignInSide from "./pages/Signin";
import Album from "./components/Album";

function App() {
  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        mx: 0,
        height: "100%",
        width: "100%",
        // backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
        // backgroundRepeat: "no-repeat",
        // backgroundColor: (t) =>
        //   t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignInSide />} />
        <Route path="/album" element={<Album />} />
      </Routes>
    </Container>
  );
}

export default App;
