function DishCard({ dish, onToggle }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "20px",
        textAlign: "center",
      }}
    >
      <img
        src={dish.imageUrl}
        alt={dish.dishName}
        width="250"
        style={{ borderRadius: "10px" }}
      />

      <h2>{dish.dishName}</h2>

      <p>
        Status:
        <strong>
          {dish.isPublished ? " Published" : " Unpublished"}
        </strong>
      </p>

      <button onClick={() => onToggle(dish.dishId)}>
        Toggle Status
      </button>
    </div>
  );
}

export default DishCard;