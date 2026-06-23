import DishCard from "./DishCard";

function DishList({ dishes, onToggle }) {
  return (
    <>
      {dishes.map((dish) => (
        <DishCard
          key={dish.dishId}
          dish={dish}
          onToggle={onToggle}
        />
      ))}
    </>
  );
}

export default DishList;