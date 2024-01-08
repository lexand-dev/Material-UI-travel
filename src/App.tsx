import { Container, Grid, Typography } from "@mui/material";
import "./App.css";
import AppBar from "./components/AppBar";
import TourCard from "./components/TourCard";
import cities from "./data.json";
import { Cities, Tour } from "./types";

function App() {
  return (
    <>
      <div className="App">
        <AppBar />
        <Container sx={{ marginY: 5 }} maxWidth="lg">
          {cities.map((city: Cities) => (
            <>
              <Typography variant="h4" component="h2" marginY={3}>
                Top {city.name} Tours
              </Typography>

              <Grid container spacing={5}>
                {city.tours.map((tour: Tour) => (
                  <TourCard tour={tour} />
                ))}
              </Grid>
            </>
          ))}
        </Container>
      </div>
    </>
  );
}

export default App;
