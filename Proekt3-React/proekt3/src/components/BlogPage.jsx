import {
  Box,
  Grid,
  Typography,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  CardHeader,
  Container,
} from "@mui/material";
import image from "../blogback1.jpg";
import image1 from "../platefood.jpg";
import image3 from "../apple1.jpg";
import image4 from "../exercise.jpeg";
import image2 from "../recipe1.jpg";
import image5 from "../blueberyblog.jpg";
import image6 from "../recipe2.jpg";
import Footer from "./Footer";

const BlogPage = () => {
  return (
    <Grid>
      <Box
        sx={{
          padding: "4%",
          backgroundImage: ` linear-gradient(rgba(0, 155, 0, 0.4), rgba(0, 155, 0, 0.4)) ,url(${image}) `,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "240px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Salsa",
            marginTop: { md: "5%", xs: "15%" },
            textShadow: "2px 2px 2px black",
            color: "white",
            fontSize: { md: "65px", xs: "30px" },
          }}
        >
          Welcome To Our Blog
        </Typography>
        <Typography
          sx={{
            fontFamily: "Salsa",
            padding: "2%",
            textShadow: "2px 2px 2px green",
            color: "white",
            fontSize: { md: "25px", xs: "18px" },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
          voluptates quisquam quod ratione
        </Typography>
      </Box>

      <Grid sx={{ backgroundColor: "#dff7e0", padding: "4%" }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Salsa",
            textAlign: "left",
            paddingLeft: "7%",
            marginBottom: { md: "2%", xs: "5%" },
          }}
        >
          Recent blog posts
        </Typography>
        <Container sx={{ display: "flex", gap: "7%" }}>
          <Grid
            item
            width={550}
            height={650}
            sx={{
              marginTop: { md: "2%", xs: "0" },
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Card elevation={5}>
              <CardMedia component="img" image={image2} alt="platefood" />
              <CardHeader title="New recipe" />
              <CardContent>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  assumenda blanditiis cumque, eaque fuga numquam possimus quas
                  quibusdam quis voluptas? A aliquam assumenda cum fugiat ipsa
                  minus nisi officia voluptates!
                </Typography>
              </CardContent>
              <CardActions>
                <Button color="secondary">more</Button>
                <Button color="secondary">Share</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid
            item
            width={450}
            height={200}
            sx={{
              marginTop: { md: "2%", xs: "0" },
              flexDirection: { xs: "column", md: "row" },
              display: { md: "block", xs: "none" },
            }}
          >
            <Card sx={{ display: "flex" }} elevation={5}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    New recipe
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="div"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    assumenda blanditiis cumque, eaque fuga numquam possimus
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button color="secondary">more</Button>
                  <Button color="secondary">Share</Button>
                </CardActions>
              </Box>
              <CardMedia component="img" sx={{ width: 250 }} image={image1} />
            </Card>
            <Card sx={{ display: "flex", marginTop: "8%" }} elevation={5}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    New recipes
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="div"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    assumenda blanditiis cumque, eaque fuga numquam possimus
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button color="secondary">more</Button>
                  <Button color="secondary">Share</Button>
                </CardActions>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 250 }}
                image={image5}
                alt="Live from space album cover"
              />
            </Card>
          </Grid>
        </Container>

        <Typography
          variant="h4"
          sx={{
            fontFamily: "Salsa",
            textAlign: "left",
            paddingLeft: "7%",
            marginTop: { md: "0", xs: "-25%" },
          }}
        >
          All posts
        </Typography>
      </Grid>
      <Grid
        sx={{
          display: { md: "flex", xs: "block" },
          justifyContent: "center",
          alignItems: "center",
          gap: "5%",
          paddingBottom: { md: "5%", xs: "15%" },
          backgroundColor: "#dff7e0",
        }}
      >
        <Grid
          item
          width={350}
          height={350}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            marginLeft: { md: "0", xs: "9%" },
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
              <Button color="secondary">more</Button>
              <Button color="secondary">Share</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          width={350}
          height={350}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            marginTop: { md: "0", xs: "18%" },
            marginLeft: { md: "0", xs: "9%" },
          }}
        >
          <Card elevation={5}>
            <CardMedia component="img" height={150} image={image} alt="apple" />
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
              <Button color="secondary">more</Button>
              <Button color="secondary">Share</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          width={350}
          height={350}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            marginTop: { md: "0", xs: "18%" },
            marginLeft: { md: "0", xs: "9%" },
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
              <Button color="secondary">more</Button>
              <Button color="secondary">Share</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Grid
        sx={{
          display: { md: "flex", xs: "block" },
          justifyContent: "center",
          alignItems: "center",
          gap: "5%",
          paddingBottom: { md: "5%", xs: "15%" },
          paddingTop: "3%",
          backgroundColor: "#dff7e0",
        }}
      >
        <Grid
          item
          width={350}
          height={350}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            marginTop: { md: "0", xs: "2%" },
            marginLeft: { md: "0", xs: "9%" },
          }}
        >
          <Card elevation={5}>
            <CardMedia
              component="img"
              height={150}
              image={image6}
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
              <Button color="secondary">more</Button>
              <Button color="secondary">Share</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          width={350}
          height={350}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            marginTop: { md: "0", xs: "18%" },
            marginLeft: { md: "0", xs: "9%" },
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
              <Button color="secondary">more</Button>
              <Button color="secondary">Share</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          width={350}
          height={350}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            marginTop: { md: "0", xs: "18%" },
            marginLeft: { md: "0", xs: "9%" },
          }}
        >
          <Card elevation={5}>
            <CardMedia
              component="img"
              height={150}
              image={image5}
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
              <Button color="secondary">more</Button>
              <Button color="secondary">Share</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ backgroundColor: "#dff7e0", padding: "1%" }}>
        <Button sx={{ color: "white", backgroundColor: "green" }}>
          See more
        </Button>

        <Footer />
      </Box>
    </Grid>
  );
};

export default BlogPage;
