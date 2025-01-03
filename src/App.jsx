import "./App.scss";

import { Footer } from "./Components/Footer/Footer";
import { Main } from "./Components/Main/Main";
import { Grid } from "./Components/Grid/Grid";
import { Header } from "./Components/Header/Header";
import { Navbar } from "./Components/NavBar/NavBar";

import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <Grid>
      <Header />
      <Navbar />
      <Main>
        <AppRoutes />
      </Main>
      <Footer />
    </Grid>
  );
}

export default App;
