import { Box, Button, Container, Stack, TextField } from "@mui/material";
import {
  Form,
  useLoaderData,
  useLocation,
  redirect,
  useNavigate,
} from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import MealItemsInput from "./MealItemsInput";
import image from "../greenback1.jpg";
import { getAuthToken } from "../util/auth";

const MealItems = (props) => {
  const data1 = useLoaderData();

  const [dataid, setDataId] = useState("");

  const location = useLocation();
  const data = location.state;
  const dataName = data.name;
  const getDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}/${month}/${year}`;
  };

  const [currentDate, setCurrentDate] = useState(getDate());

  const navigate = useNavigate();
  const token = getAuthToken();

  const deleteMeals = (id) => {
    fetch(`http://localhost:8080/meal-items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(() => {
      navigate(0);
    });
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
      <Box
        sx={{
          display: "flex",
          gap: "4%",
          textAlign: "center",
          padding: "5%",
          marginTop: "3%",
        }}
      >
        {data1.map((items) => {
          return (
            <Box>
              <Button
                onClick={() => setDataId(items.id)}
                key={items.id}
                style={{
                  backgroundColor: "green",

                  padding: "1%",
                  color: "white",
                  borderRadius: "8%",
                  fontSize: "10px",
                  position: "absolute",
                }}
              >
                {items.name}
              </Button>
              <Button
                onClick={() => deleteMeals(items.id)}
                sx={{
                  color: "red",
                  position: "relative",
                  bottom: "55%",
                  left: "-15%",
                }}
              >
                <DeleteIcon />
              </Button>
            </Box>
          );
        })}
      </Box>
      <Form method="post">
        <Stack alignItems="center" width="30%" rowGap={5} mt={5}>
          <TextField value={dataName} name="category" />
          <TextField value={currentDate} name="date" />

          <Box>
            <MealItemsInput dataid={dataid} />
          </Box>
          <Box>
            <Button
              variant="contained"
              type="submit"
              sx={{ backgroundColor: "green", marginTop: "5%" }}
            >
              Save Meal
            </Button>
            <Button onClick={() => navigate(-1)} sx={{ color: "green" }}>
              Back
            </Button>
          </Box>
        </Stack>
      </Form>
    </Container>
  );
};

export default MealItems;

export const loader = () => {
  return fetch("http://localhost:8080/meal-items");
};

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
