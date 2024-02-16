import { Container, Stack, TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import {
  Form,
  useLocation,
  useNavigate,
  redirect,
  Link,
} from "react-router-dom";
import image from "../greenback1.jpg";

import { getAuthToken } from "../util/auth";
import NewItems from "./NewItems";

const PopupMeals = (props) => {
  const location = useLocation();
  const data = location.state;

  const [category, setCategory] = useState("");

  const onChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const [openNewItems, setOpenNewItems] = useState(false);
  const [openMealItems, setOpenMealItems] = useState(false);
  const navigate = useNavigate();

  const getDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}/${month}/${year}`;
  };

  const [currentDate, setCurrentDate] = useState(getDate());

  const toNewItem = () => {
    setOpenNewItems(true);
    setOpenMealItems(false);
  };
  return (
    <Container
      sx={{
        marginTop: "8%",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "2%",
        borderRadius: "5px",
      }}
    >
      <Form method="post">
        <Stack alignItems="center" width="30%" rowGap={5} mt={5}>
          <TextField
            label={data.name}
            value={category}
            name="category"
            onChange={onChangeCategory}
            sx={{ fontFamily: "Salsa" }}
          />
          <TextField value={currentDate} name="date" />
          <Box sx={{ textAlign: "right" }}>
            <Button onClick={toNewItem} sx={{ color: "green" }}>
              New meals{" "}
            </Button>
            <Link
              to="mealItem"
              state={data}
              style={{
                color: "green",
                textDecoration: "none",
              }}
            >
              MEAL ITEMS
            </Link>
          </Box>

          {openNewItems && <NewItems />}
          <Button
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "green" }}
          >
            Save meal
          </Button>
          <Button onClick={() => navigate(-1)} sx={{ color: "green" }}>
            Back
          </Button>
        </Stack>
      </Form>
    </Container>
  );
};

export default PopupMeals;

export const action = async ({ request }) => {
  const token = getAuthToken();
  const data = await request.formData();

  const response = await fetch(`http://localhost:8080/meals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      category: data.get("category"),
      date: data.get("date"),
      mealItemList: [
        {
          name: data.get("name"),
          amount: data.get("amount"),
          carbohydrate: data.get("carbohydrate"),
          protein: data.get("protein"),
          fat: data.get("fat"),
          calories: data.get("calories"),
        },
      ],
    }),
  });

  return redirect("/meals");
};
