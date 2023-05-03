import { InteractionStatus } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import react, { useCallback, useState } from "react";
import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import { ErrorMessage } from "../../components";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { instance, inProgress } = useMsal();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    instance
      .handleRedirectPromise()
      .then((tokenResponse) => {
        if (!tokenResponse) {
          const accounts = instance.getAllAccounts();

          if (accounts.length === 0) {
            // No user signed in
            if (inProgress === InteractionStatus.None) {
              instance.loginRedirect();
              navigate("/projects");
            }
          }
        } else {
          // Do something with the tokenResponse
        }
      })
      .catch((err) => {
        setError(err);
      });
  }, [instance, inProgress]);

  return (
    <Container maxWidth="xs" data-testid="login-page">
      <Stack justifyContent="center" sx={{ minHeight: "100vh" }}>
        <Paper elevation={5} sx={{ borderRadius: 3, p: 5 }}>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            sx={{ marginBottom: 2 }}
          >
            Login
          </Typography>
          <Button
            color="primary"
            variant="contained"
            onClick={handleLogin}
            sx={{ float: "right", textTransform: "none" }}
            data-testid="login-page-login-button"
          >
            Login
          </Button>
          <ErrorMessage error={error} />
          <Typography
            variant="caption"
            fontSize={11}
            color="grey"
            component="div"
            sx={{ float: "right", marginTop: 3 }}
          >
            By logging in you accept the{" "}
            {<a href="https://www.lcacollect.dk">terms and conditions</a>} for
            LCAcollect.
          </Typography>
        </Paper>
      </Stack>
    </Container>
  );
};
