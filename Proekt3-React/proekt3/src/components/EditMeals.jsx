import { Stack, TextField, Button, Modal, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuthToken } from "../util/auth";

const EditMeals = (props) => {
  const [category, setCategory] = useState(props.meals.category);
  const [date, setDate] = useState(props.meals.date);
  const [name, setName] = useState(props.meals.mealItemList[0].name);
  const [amount, setAmount] = useState(props.meals.mealItemList[0].amount);
  const [carbohydrate, setCarbohydrate] = useState(
    props.meals.mealItemList[0].carbohydrate
  );
  const [protein, setProtein] = useState(props.meals.mealItemList[0].protein);
  const [fat, setFat] = useState(props.meals.mealItemList[0].fat);
  const [calories, setCalories] = useState(
    props.meals.mealItemList[0].calories
  );

  const onChangeCategoryHandler = (event) => {
    setCategory(event.target.value);
  };

  const onChangeDateHandler = (event) => {
    setDate(event.target.value);
  };
  const onChangeNameHandler = (event) => {
    setName(event.target.value);
  };
  const onChangeAmountHandler = (event) => {
    setAmount(event.target.value);
  };
  const onChangeCarbohydrateHandler = (event) => {
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

  const navigate = useNavigate();
  const token = getAuthToken();
  const editMeals = () => {
    fetch(`http://localhost:8080/meals/${props.meals.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        category: category,
        date: date,
        mealItemList: [
          {
            name: name,
            amount: amount,
            carbohydrate: carbohydrate,
            protein: protein,
            fat: fat,
            calories: calories,
          },
        ],
      }),
    }).then(() => {
      navigate("/meals");
      props.setOpenEdit(false);
    });
  };

  return (
    <Container sx={{ width: "50%" }}>
      <Stack width="40%" mt={2}>
        <TextField
          label="Category"
          variant="standard"
          value={category}
          onChange={onChangeCategoryHandler}
          name="category"
        />
        <TextField
          label="Date"
          variant="standard"
          placeholder="dd.MM.YYYY"
          value={date}
          onChange={onChangeDateHandler}
          name="date"
        />
        <TextField
          label="Name"
          variant="standard"
          value={name}
          onChange={onChangeNameHandler}
          name="name"
        />
        <TextField
          label="Amount"
          variant="standard"
          value={amount}
          onChange={onChangeAmountHandler}
          name="amount"
        />
        <TextField
          label="Carbohydrate"
          variant="standard"
          value={carbohydrate}
          onChange={onChangeCarbohydrateHandler}
          name="carbohydrate"
        />
        <TextField
          label="Protein"
          variant="standard"
          value={protein}
          onChange={onChangeProteinHandler}
          name="protein"
        />
        <TextField
          label="Fat"
          variant="standard"
          value={fat}
          onChange={onChangeFatHandler}
          name="fat"
        />
        <TextField
          label="Calories"
          variant="standard"
          value={calories}
          onChange={onChangeCaloriesHandler}
          name="calories"
        />
        <Button
          onClick={editMeals}
          variant="contained"
          sx={{ marginTop: "2%", backgroundColor: "#c3edbe", color: "black" }}
        >
          Update meal
        </Button>
      </Stack>
    </Container>
  );
};

export default EditMeals;
