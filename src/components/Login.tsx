/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from "@mui/material/Button";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      {/* maxwidth xs는 최대 사이즈를 extra Small로 */}
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar> */}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {/* <Box component="form" onSubmit={handleSubmit} noValidate></Box> */}
          <TextField
            margin="normal"
            label="Email Address"
            required
            fullWidth
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            type="password"
            label="Password"
            required
            fullWidth
            name="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign in
          </Button>
          <Grid container>
            {/* xs는 남은 여백을 다 사용해서 좌우 정렬 */}
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot Password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Sign up
              </Link>
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              navigate("/");
            }}
          >
            돌아가기
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Login;
