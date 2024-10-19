import { useEffect } from "react";
import { useState } from "react";
import Meal from "../Meal/Meal";

const Meals = () => {
  const URL = "https://run.mocky.io/v3/7a08a909-a30d-48b1-8b72-b91f38349103";

  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);
  return (
    <>
    <section className="flex flex-col">
    <h1 className="text-4xl font-extrabold text-center">Seasonal      </h1>
    <p>Enjoy Every Moment</p>
    </section>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 items-center justify-center">
      {meals.map((meal,index) => (
        <Meal  meal={meal} key={index}></Meal>
      ))}
      </div>
    </>
  );
};

export default Meals;
