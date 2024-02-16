import { Container, Box, TextField, Button } from "@mui/material";

import { useState } from "react";
import { getAuthToken } from "../util/auth";

const NewItems = () => {
  const [name, setNameDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [carbohydrate, setCarbohydrate] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [calories, setCalories] = useState("");

  const onChangeFoodDescriptionHandler = (event) => {
    setNameDescription(event.target.value);
  };
  const onChangeAmountHandler = (event) => {
    setAmount(event.target.value);
  };
  const onChangeCarboHandler = (event) => {
    setCarbohydrate(event.target.value);
  };
  const onChangeProteinHandler = (event) => {
    setProtein(event.target.value);
  };
  const onChangeFatHandler = (event) => {
    setFat(event.target.value);
  };
  const onChangeCaloriesHandler = (event) => {
    setCalories(event.target.value);
  };

  const saveItems = () => {
    const token = getAuthToken();
    fetch("http://localhost:8080/meal-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        amount: amount,
        carbohydrate: carbohydrate,
        protein: protein,
        fat: fat,
        calories: calories,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <Container>
      <Box>
        <TextField
          label="name"
          variant="standard"
          fullWidth
          value={name}
          onChange={onChangeFoodDescriptionHandler}
          name="name"
        />
        <TextField
          label="Amount -gram"
          variant="standard"
          fullWidth
          value={amount}
          onChange={onChangeAmountHandler}
          name="amount"
        />
        <TextField
          label="Carbohydrate"
          variant="standard"
          fullWidth
          value={carbohydrate}
          onChange={onChangeCarboHandler}
          name="carbohydrate"
        />
        <TextField
          label="Protein"
          variant="standard"
          fullWidth
          value={protein}
          onChange={onChangeProteinHandler}
          name="protein"
        />
        <TextField
          label="Fat"
          variant="standard"
          fullWidth
          value={fat}
          onChange={onChangeFatHandler}
          name="fat"
        />
        <TextField
          label="Calories"
          variant="standard"
          fullWidth
          value={calories}
          onChange={onChangeCaloriesHandler}
          name="calories"
        />
      </Box>
      <Button
        variant="contained"
        sx={{ backgroundColor: "green", marginTop: "4%" }}
        onClick={saveItems}
      >
        Save MealItem
      </Button>
    </Container>
  );
};

export default NewItems;
