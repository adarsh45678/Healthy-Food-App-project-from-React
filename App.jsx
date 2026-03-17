import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import './App.css';
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function app() {

  let [foodItems , setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if(event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }

  };

  return (
    <Container>
    <h2 className="food-heading">Healthy Food</h2>
    <FoodInput handleKeyDown={onKeyDown}></FoodInput>
    <ErrorMessage items = {foodItems}></ErrorMessage>
    <FoodItems items = {foodItems}></FoodItems>
    </Container>

);
}
export default app;