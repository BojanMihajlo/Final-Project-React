import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Container, Grid, Typography, Modal, Box } from "@mui/material";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState, useEffect } from "react";
import image from "../backfood2.webp";

const localizer = momentLocalizer(moment);

const MealsCalendar = () => {
  useEffect(() => {
    fetch("http://localhost:8080/meals")
      .then((response) => response.json())
      .then((response) => {
        setMeals(response);
      });
  }, []);
  const [meals, setMeals] = useState([]);

  const events = meals.map((meal) => {
    return {
      id: meal.id,
      title: `${meal.category}`,
      description: `${meal.mealItemList[0].name} amount: ${meal.mealItemList[0].amount}g
       carbohydrate:${meal.mealItemList[0].carbohydrate}g  protein:${meal.mealItemList[0].protein}g 
       fat:${meal.mealItemList[0].fat}g   calories:${meal.mealItemList[0].calories}`,
      start: moment(meal.date, "DD/MM/YYYY").toDate(),
      end: moment(meal.date, "DD/MM/YYYY").toDate(),
    };
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const handleSelect = (slotinfo) => {
    setShowModal(true);
    setSelectedDate(slotinfo);
  };

  const handleSelectMeal = (event) => {
    setShowModal(true);
    setSelectedMeal(event);
  };

  return (
    <Grid
      sx={{
        padding: "4% 4% 8% 4%",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <Typography
        sx={{
          padding: "3%",
          fontFamily: "Salsa",
          textShadow: "2px 2px 2px black",
          color: "white",
          fontSize: { md: "60px", xs: "30px" },
          marginTop: { md: "0.5%", xs: "10%" },
        }}
      >
        All Meals Calendar
      </Typography>
      <Container
        sx={{
          height: "500px",
          backgroundColor: "#cdf2bb",
          border: "2px solid green",
          outline: "8px solid green",
        }}
      >
        <Calendar
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultDate={moment().toDate()}
          localizer={localizer}
          selectable={true}
          onSelectEvent={handleSelectMeal}
        />
      </Container>
      {showModal && (
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "400",
              backgroundColor: "#fff299",
              border: "2px solid green",
              padding: "2%",
              borderRadius: "8px",
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ fontFamily: "Salsa", color: "green" }}
            >
              {selectedMeal.title}
            </Typography>
            <Typography
              variant="h6"
              id="modal-modal-description"
              sx={{ mt: 2, fontFamily: "Salsa" }}
            >
              {selectedMeal.description}
            </Typography>
          </Box>
        </Modal>
      )}
    </Grid>
  );
};

export default MealsCalendar;
