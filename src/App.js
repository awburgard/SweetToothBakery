import theme from "./components/theme";

import {
  ThemeProvider,
  Typography,
  Container,
  Divider,
} from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/Appbar";
import MainLanding from "./Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Divider />
      <main>
        <MainLanding />
      </main>
      <Switch>
        <Route exact from="/" render={(props) => <div>Home</div>} />
        <Route exact path="/contact" render={(props) => <div>contact</div>} />
        <Route exact path="/about" render={(props) => <div>about</div>} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
