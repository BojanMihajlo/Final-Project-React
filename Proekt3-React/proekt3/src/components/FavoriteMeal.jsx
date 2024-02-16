import { useState } from "react";
import { Grid, Typography, Box, TextField, Button } from "@mui/material";

const FavoriteMeal = () => {
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  const [desc, setDesc] = useState([]);

  const getFile = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
    localStorage.setItem(
      "image",
      `${URL.createObjectURL(event.target.files[0])}`
    );
  };
  const getImage = localStorage.getItem("image") || [];
  const deleteFile = () => {
    setFile("");
    setDesc("");
    localStorage.removeItem("image");
    localStorage.removeItem("description");
  };
  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const saveDescription = (text) => {
    setDesc(...desc, description, text);

    setDescription("");
    const nDesc = [...desc, description];
    localStorage.setItem("description", JSON.stringify(nDesc));
  };
  const getDescription = JSON.parse(localStorage.getItem("description")) || [];

  return (
    <Grid
      sx={{
        marginBottom: "4%",
        backgroundColor: "#dff7e0",
        padding: "6%",
        borderBottomLeftRadius: "100px",
        borderBottomRightRadius: "100px",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontFamily: " Salsa", marginBottom: "3%" }}
      >
        Your Favourite Meal
      </Typography>
      <Box
        sx={{
          display: { md: "flex", sm: "block" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{ border: "3px solid green", paddingTop: "2%" }}
          width="380px"
          height="380px"
        >
          <img src={getImage} width="350px" height="350px" />
        </Box>
        <Box sx={{ margin: "8%" }}>
          <Typography variant="h6" sx={{ fontFamily: " Salsa" }}>
            {getDescription}
          </Typography>
        </Box>
        <Box sx={{ flexDirection: "row" }}>
          <Box>
            <input type="file" onChange={getFile}></input>

            <Button
              onClick={deleteFile}
              sx={{ backgroundColor: "green", color: "white" }}
            >
              Delete
            </Button>
          </Box>
          <Box>
            <TextField
              placeholder="Meal description.."
              onChange={descriptionHandler}
              value={description}
              type="text"
            />
            <Button onClick={saveDescription} sx={{ color: "green" }}>
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default FavoriteMeal;
