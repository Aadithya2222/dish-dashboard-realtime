import { useEffect, useState } from "react";
import API from "../api/dishApi";
import socket from "../socket/socket";
import DishList from "../components/DishList";

function Dashboard() {
  const [dishes, setDishes] = useState([]);

  const fetchDishes = async () => {
    const res = await API.get("/dishes");
    setDishes(res.data);
  };

  const toggleDish = async (id) => {
    await API.patch(`/dishes/${id}/toggle`);
  };

  useEffect(() => {
    fetchDishes();

    socket.on("dishUpdated", (updatedDish) => {
      setDishes((prev) =>
        prev.map((dish) =>
          dish.dishId === updatedDish.dishId
            ? updatedDish
            : dish
        )
      );
    });

    return () => {
      socket.off("dishUpdated");
    };
  }, []);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "20px",
      }}
    >
      <h1>Dish Management Dashboard</h1>

      <DishList
        dishes={dishes}
        onToggle={toggleDish}
      />
    </div>
  );
}

export default Dashboard;