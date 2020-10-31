import React from "react";
import { Switch, Route } from "react-router";
import { map } from "lodash";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/core/styles";
import { PersistGate } from "redux-persist/integration/react";

// theme
import theme from "./project.theme";

// routes
import routes from "./client/routes";

// persister
import { persister } from "./client/redux/store";

const App = () => {
  return (
    <PersistGate loading={null} persistor={persister}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <Switch>
            {map(routes, (route, idx) => {
              return <Route {...route} key={idx} />;
            })}
          </Switch>
        </Container>
      </ThemeProvider>
    </PersistGate>
  );
};

export default App;
