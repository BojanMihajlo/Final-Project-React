import { Container, Paper, Typography, Box, Grid } from "@mui/material";
import image from "../greenback1.jpg";

import { Link, useLoaderData } from "react-router-dom";

import MealsCard from "./MealsCard";

const MealsPage = () => {
  const data = useLoaderData();
  const meals = data;

  const category = [
    { name: "Breakfast", id: 1 },
    { name: "Lunch", id: 2 },
    { name: "Dinner", id: 3 },
    { name: "Snack", id: 4 },
  ];

  return (
    <>
      <Container sx={{ marginTop: { md: "10%", xs: "18%" } }}>
        <Paper
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Typography
            sx={{
              fontFamily: " Salsa",
              padding: "4%",
              fontSize: { md: "60px", xs: "25px" },
            }}
          >
            Daily Entered Meals
          </Typography>
          <Box>
            {category.map((cat) => (
              <Link
                key={cat.id}
                style={{
                  backgroundColor: "green",
                  margin: "1%",
                  color: "white",
                  textDecoration: "none",
                  padding: "1%",
                  borderRadius: "10px",
                }}
                to="popup"
                state={cat}
              >
                {cat.name}
              </Link>
            ))}
          </Box>
        </Paper>
      </Container>
      <Grid
        sx={{
          marginTop: "5%",
          backgroundColor: "#c3edbe",
          borderTopLeftRadius: "50px",
          borderTopRightRadius: "50px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Salsa",
            padding: "2% 0",
            fontSize: { md: "60px", xs: "35px" },
          }}
        >
          Meals
        </Typography>

        <Container>
          {meals.map((meal, index) => {
            return (
              <Box
                key={meal.id}
                sx={{
                  backgroundColor: "green",
                  borderRadius: "10px",
                  padding: "1%",
                  margin: "1% 0",
                }}
              >
                <Grid>
                  <MealsCard meals={meal} />
                </Grid>
              </Box>
            );
          })}
        </Container>
      </Grid>
    </>
  );
};

export default MealsPage;

export const loader = () => {
  return fetch("http://localhost:8080/meals");
};
