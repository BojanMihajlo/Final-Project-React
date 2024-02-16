import { Container, TextField } from "@mui/material";
import { useState, useEffect } from "react";

const MealItemsInput = (props) => {
  const [datameal, setDataMeal] = useState({
    name: "",
    amount: "",
    carbohydrate: "",
    protein: "",
    fat: "",
    calories: "",
  });

  useEffect(() => {
    fetch(`http://localhost:8080/meal-items/${props.dataid}`)
      .then((response) => response.json())
      .then((response) => {
        setDataMeal(response);
      });
  }, [props.dataid]);

  return (
    <>
      <Container>
        <TextField type="text" name="name" label="name" value={datameal.name} />
        <TextField
          label=" amount"
          value={datameal.amount}
          type="text"
          name="amount"
        />
        <TextField
          label="carbohydrate"
          type="text"
          name="carbohydrate"
          value={datameal.carbohydrate}
        />
        <TextField
          label="protein"
          type="text"
          name="protein"
          value={datameal.protein}
        />
        <TextField label="fat" type="text" name="fat" value={datameal.fat} />
        <TextField
          label="calories"
          type="text"
          name="calories"
          value={datameal.calories}
        />
      </Container>
    </>
  );
};

export default MealItemsInput;
