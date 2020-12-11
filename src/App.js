import "./App.css";
import theme from "./components/theme";

import { ThemeProvider, Typography, Container } from "@material-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h1">Sweet Tooth Bakery</Typography>
        <Typography variant="p">Hey there buddy</Typography>
      </Container>
    </ThemeProvider>
  );
}

export default App;
