import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HomeMeals = (props) => {
  const { meals } = props;

  const navigate = useNavigate();

  const dateYesterday = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate() - 1;
    return `${date}/${month}/${year}`;
  };
  const [dateYes, setDateYes] = useState(dateYesterday());

  const toMealsPage = () => {
    navigate("meals");
  };

  const yestMeals = meals.filter((meal) => meal.date === dateYes);

  const carboHydrate = yestMeals
    .map((item) => item.mealItemList[0].carbohydrate)
    .map(Number);
  const carboSum = carboHydrate.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  const proTein = yestMeals
    .map((item) => item.mealItemList[0].protein)
    .map(Number);
  const proteinSum = proTein.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  const faT = yestMeals.map((item) => item.mealItemList[0].fat).map(Number);
  const fatSum = faT.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  const caloRies = yestMeals
    .map((item) => item.mealItemList[0].calories)
    .map(Number);
  const calorieSum = caloRies.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return (
    <Box
      sx={{
        border: "5px solid green",
        borderRadius: "10px",
        padding: "4%",
        backgroundColor: "#dff7e0",
      }}
    >
      <Typography variant="h5" sx={{ fontFamily: " Salsa, cursive" }}>
        Yesterday`s` Meals
      </Typography>
      {yestMeals.length !== 0 ? (
        <Box key={yestMeals.id} sx={{ padding: "2%" }}>
          <Box>
            <Box
              sx={{
                display: "flex",
                padding: "4%",
              }}
              onClick={toMealsPage}
            >
              <Typography sx={{ fontFamily: "Salsa" }}>Breakfast:</Typography>
              {yestMeals.map((meal, index) => {
                return (
                  <Box>
                    {meal.category === "Breakfast" ? (
                      <>
                        <Typography>{meal.mealItemList[0].name}</Typography>
                        <Typography>{meal.date}</Typography>
                      </>
                    ) : null}
                  </Box>
                );
              })}
            </Box>
            <Box
              sx={{
                display: "flex",
                padding: "4%",
              }}
              onClick={toMealsPage}
            >
              <Typography sx={{ fontFamily: "Salsa" }}>Lunch:</Typography>
              {yestMeals.map((meal, index) => {
                return (
                  <Box>
                    {meal.category === "Lunch" ? (
                      <>
                        <Typography>{meal.mealItemList[0].name}</Typography>
                        <Typography>{meal.date}</Typography>
                      </>
                    ) : null}
                  </Box>
                );
              })}
            </Box>
            <Box
              sx={{
                display: "flex",
                padding: "4%",
              }}
              onClick={toMealsPage}
            >
              <Typography sx={{ fontFamily: "Salsa" }}>Dinner:</Typography>
              {yestMeals.map((meal, index) => {
                return (
                  <Box>
                    {meal.category === "Dinner" ? (
                      <>
                        <Typography>{meal.mealItemList[0].name}</Typography>
                        <Typography>{meal.date}</Typography>
                      </>
                    ) : null}
                  </Box>
                );
              })}
            </Box>
            <Box
              sx={{
                display: "flex",
                padding: "4%",
              }}
              onClick={toMealsPage}
            >
              <Typography sx={{ fontFamily: "Salsa" }}>Snack:</Typography>
              {yestMeals.map((meal, index) => {
                return (
                  <>
                    <Box>
                      {meal.category === "Snack" ? (
                        <>
                          <Typography>{meal.mealItemList[0].name}</Typography>
                          <Typography>{meal.date}</Typography>
                        </>
                      ) : null}
                    </Box>
                  </>
                );
              })}
            </Box>
          </Box>
          <Box sx={{ marginTop: "8%" }}>
            <Typography sx={{ fontWeight: "bold", color: "green" }}>
              Total carbohydrate:{carboSum}
            </Typography>
            <Typography sx={{ fontWeight: "bold", color: "green" }}>
              Total protein:{proteinSum}
            </Typography>
            <Typography sx={{ fontWeight: "bold", color: "green" }}>
              Total fat:{fatSum}
            </Typography>
            <Typography sx={{ fontWeight: "bold", color: "green" }}>
              Total calories:{calorieSum}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box>
          <Typography variant="body1">
            "No meals entered. Head over to the tracker to enter a meal"
          </Typography>
          <Button
            sx={{ backgroundColor: "green", color: "black" }}
            onClick={toMealsPage}
          >
            Enter your daily meal
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default HomeMeals;
