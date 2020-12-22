import theme from "./components/theme";

import { ThemeProvider } from "@material-ui/core";

import Navigation from "./components/Appbar";
import MainLanding from "./Main";
import Contact from "./Contact";
import About from "./About";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <MainLanding />
      <About />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
