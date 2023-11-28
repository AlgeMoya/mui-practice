/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Button from "@mui/material/Button";
import {
  ButtonGroup,
  Container,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>welcome</h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>html</li>
        <li>html</li>
      </ol>
    </nav>
  );
}

function Article() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <article>
      <h2>Welcome</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        molestias nesciunt modi similique facilis autem deleniti placeat culpa
        aperiam repellat minus saepe sapiente, repudiandae repellendus. Iste
        sunt ullam voluptas dolorum!
      </p>
      <br />
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <br />
      <Button
        variant="contained"
        onClick={() => {
          navigate("/login");
        }}
      >
        로그인 페이지
      </Button>
      <br />
      <br />
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button
          variant="outlined"
          onClick={() => {
            setOpen(true);
          }}
        >
          Create
        </Button>
        <Button variant="outlined">Update</Button>
      </ButtonGroup>
      <Button variant="outlined">Delete</Button>
      <Dialog open={open}>
        <DialogTitle>Create</DialogTitle>
        <DialogContentText>Hello Create!!</DialogContentText>
        <DialogActions>
          <Button variant="outlined">Create</Button>
          <Button
            variant="outlined"
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </article>
  );
}

function Mainpage() {
  return (
    <>
      <Container fixed>
        <Header />
        <Grid container>
          <Grid item xs="2">
            <Nav />
          </Grid>
          <Grid item xs="10">
            <Article />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Mainpage;
