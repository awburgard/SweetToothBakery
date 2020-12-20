import theme from "./components/theme";

import { ThemeProvider } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/Appbar";
import MainLanding from "./Main";
import Contact from "./Contact";
import About from "./About";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      {/* <Switch>
        <Route exact path="/" component={MainLanding} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </Switch> */}
      <MainLanding />
      <About />
    </ThemeProvider>
  );
}

export default App;
