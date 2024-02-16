import {
  Box,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  Typography,
  Autocomplete,
} from "@mui/material";
import Footer from "./Footer";
import image from "../heroback3.png";
import image1 from "../platefood.jpg";
import image2 from "../plate1.jpg";
import image3 from "../apple1.jpg";
import image4 from "../exercise.jpeg";
import image5 from "../kiwiback.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HomeMeals from "./HomeMeals";
import FavoriteMeal from "./FavoriteMeal";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/meals")
      .then((response) => response.json())
      .then((response) => {
        setMeals(response);
      });
  }, []);
  const [meals, setMeals] = useState([]);

  const filtered = meals.filter((item) => item);
  const namesOfMeals = filtered.map((item) => item.mealItemList[0].name);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginTop: "4.2%",
          height: "380px",
        }}
      >
        <Typography
          // variant="h2"
          sx={{
            color: "whitesmoke",
            fontSize: { md: "60px", xs: "40px" },
            paddingTop: { md: "8%", xs: "25%" },
            fontFamily: " Salsa, cursive",
          }}
        >
          Food Tracking
        </Typography>
        <Box
          sx={{
            marginTop: "2%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={namesOfMeals}
            onChange={() => navigate("meals")}
            sx={{
              width: { md: 350, xs: 250 },
              backgroundColor: "#dff7e0",
              borderRadius: "10px",
              border: "4px solid green",
            }}
            renderInput={(params) => (
              <TextField {...params} label="Search meals" />
            )}
          />
        </Box>
      </Box>
      <Container
        sx={{
          marginTop: "5%",
        }}
      >
        <Box
          sx={{
            display: { md: "flex", sm: "block" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <HomeMeals meals={meals} />

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <img src={`${image2}`} />
          </Box>
        </Box>
      </Container>

      <Grid
        sx={{
          backgroundImage: `url(${image5})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginTop: "6%",
          height: "500px",
          borderTopRightRadius: "100px",
          borderTopLeftRadius: "100px",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontFamily: " Salsa", textAlign: "center", paddingTop: "5%" }}
        >
          "Lorem ipsum dolor sit amet consectetur, corporis animi, odit quidem
          tenetur?"
        </Typography>
      </Grid>

      {/* green section */}

      <FavoriteMeal />

      {/* favourite meal section */}

      <Grid
        sx={{
          display: { md: "flex", xs: "block" },
          justifyContent: "center",
          alignItems: "center",
          gap: { md: "5%", xs: "0%" },
          padding: "5%",
        }}
      >
        <Box
          item
          width={350}
          height={350}
          sx={{
            marginTop: "2%",
            flexDirection: { xs: "column", md: "row" },
            marginLeft: { md: "0", xs: "4%" },
          }}
        >
          <Card elevation={5}>
            <CardMedia
              component="img"
              height={150}
              image={image1}
              alt="platefood"
            />
            <CardHeader title="Premium recipes" />
            <CardContent>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                assumenda blanditiis cumque, eaque fuga numquam possimus quas
                quibusdam quis voluptas? A aliquam assumenda cum fugiat ipsa
                minus nisi officia voluptates!
              </Typography>
            </CardContent>
            <CardActions>
              <Link
                to="blog"
                style={{
                  marginLeft: "4%",
                  padding: "2%",
                  textDecoration: "none",
                }}
              >
                MORE
              </Link>
              <Button color="secondary">Share</Button>
            </CardActions>
          </Card>
        </Box>
        <Grid
          item
          width={350}
          height={350}
          sx={{
            marginTop: { md: "2%", xs: "20%" },
            flexDirection: { xs: "column", md: "row" },
            marginLeft: { md: "0", xs: "4%" },
          }}
        >
          <Card elevation={5}>
            <CardMedia
              component="img"
              height={150}
              image={image3}
              alt="apple"
            />
            <CardHeader title="Easy Tracking" />
            <CardContent>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                assumenda blanditiis cumque, eaque fuga numquam possimus quas
                quibusdam quis voluptas? A aliquam assumenda cum fugiat ipsa
                minus nisi officia voluptates!
              </Typography>
            </CardContent>
            <CardActions>
              <Link
                to="blog"
                style={{
                  marginLeft: "4%",
                  padding: "2%",
                  textDecoration: "none",
                }}
              >
                MORE
              </Link>
              <Button color="secondary">Share</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          width={350}
          height={350}
          sx={{
            marginTop: { md: "2%", xs: "20%" },
            flexDirection: { xs: "column", md: "row" },
            marginLeft: { md: "0", xs: "4%" },
          }}
        >
          <Card elevation={5}>
            <CardMedia
              component="img"
              height={150}
              image={image4}
              alt="platefood"
            />
            <CardHeader title="Perfect exercises" />
            <CardContent>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                assumenda blanditiis cumque, eaque fuga numquam possimus quas
                quibusdam quis voluptas? A aliquam assumenda cum fugiat ipsa
                minus nisi officia voluptates!
              </Typography>
            </CardContent>
            <CardActions>
              <Link
                to="blog"
                style={{
                  marginLeft: "4%",
                  padding: "2%",
                  textDecoration: "none",
                }}
              >
                MORE
              </Link>
              <Button color="secondary">Share</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Button
        sx={{
          backgroundColor: "green",
          color: "white",
          marginTop: { md: "1%", xs: "15%" },
          marginBottom: { md: "1%", xs: "5%" },
        }}
        onClick={() => navigate("blog")}
      >
        More
      </Button>
      {/* card content section */}
      <Footer />
    </>
  );
};

export default HomePage;
