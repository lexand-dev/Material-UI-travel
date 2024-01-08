import { AccessTime } from "@mui/icons-material";
import { Box, Grid, Paper, Rating, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/";
import { styled } from "@mui/material/styles";

interface TourProps {
  tour: {
    name: string;
    duration: number;
    rating: number;
    numberOfReviews: number;
    price: number;
    image: string;
  };
}

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "body2" },
          style: {
            fontSize: 11,
            fontWeight: "bold",
          },
        },
        {
          props: { variant: "caption" },
          style: {
            fontSize: 10,
          },
        },
      ],
    },
  },
});

const Img = styled("img")({
  width: "100%",
  height: "5rem",
  objectFit: "cover",
});

const TourCard: React.FC<TourProps> = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <Img src={tour.image} alt="" />
          <Box p={1}>
            <Typography variant="h6">{tour.name}</Typography>
            <Box display="flex" alignItems="center" p={1}>
              <AccessTime sx={{ mr: 1, width: 12.5 }} />
              <Typography variant="body2">{tour.duration}</Typography>
            </Box>
            <Box display="flex" alignItems="center" p={1} sx={{ mt: 3 }}>
              <Rating
                name="read-only"
                value={tour.rating}
                precision={0.5}
                readOnly
                size="medium"
              />
              <Typography variant="body2" sx={{ ml: 0.5 }}>
                {tour.rating}
              </Typography>
              <Typography variant="caption" sx={{ ml: 1.5, lineHeight: 0 }}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box p={1}>
              <Typography variant="body2">From</Typography>
              <Typography
                variant="h6"
                component="h3"
                sx={{ fontWeight: "bold" }}
              >
                ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
