import {
  Card,
  CardContent,
  Typography,
  Box,
  CardActions,
  Button,
} from "@mui/material";
import { useState } from "react";
import { getAuthToken } from "../util/auth";
import { useNavigate } from "react-router-dom";
import EditMeals from "./EditMeals";

const MealsCard = (props) => {
  const { meals } = props;

  const navigate = useNavigate();

  const token = getAuthToken();

  const [openEdit, setOpenEdit] = useState(false);

  const deleteMeals = (id) => {
    fetch(`http://localhost:8080/meals/${meals.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(() => {
      navigate("/meals");
    });
  };

  return (
    <>
      <Card sx={{ backgroundColor: "#fff299" }}>
        <CardContent>
          <Box sx={{ display: "flex", gap: "5%" }}>
            <Typography variant="h5" sx={{ fontFamily: "Salsa" }}>
              {meals.category}
            </Typography>
            <Typography variant="body1">{meals.date}</Typography>
          </Box>

          <Box sx={{ display: { md: "flex", xs: "block" }, gap: "2%" }}>
            <Typography
              variant="body1"
              sx={{ fontFamily: "Salsa", fontWeight: "bold" }}
            >
              {meals.mealItemList[0].name}
            </Typography>
            <Typography>amount:{meals.mealItemList[0].amount}</Typography>

            <Typography>
              carbohydrate:{meals.mealItemList[0].carbohydrate}
            </Typography>

            <Typography>protein:{meals.mealItemList[0].protein}</Typography>

            <Typography>fat:{meals.mealItemList[0].fat}</Typography>

            <Typography>calories:{meals.mealItemList[0].calories}</Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => deleteMeals(meals.id)}
            sx={{ backgroundColor: "green", color: "white" }}
          >
            Delete
          </Button>
          <Button
            onClick={() => setOpenEdit(true)}
            sx={{ backgroundColor: "green", color: "white" }}
          >
            Edit
          </Button>
        </CardActions>
      </Card>
      {openEdit && <EditMeals setOpenEdit={setOpenEdit} meals={meals} />}
    </>
  );
};

export default MealsCard;
