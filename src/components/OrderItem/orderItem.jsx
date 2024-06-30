import "./orderItem.css";

export const OrderItem = ({ name, image }) => {
  const imageUrl = `http://localhost:4000${image}`;

  return (
    <div className="order-item">
      <img
        src={imageUrl}
        className="order-item__image"
        alt={name}
      />
      <div className="order-item__name">
        {name}
      </div>
    </div>
  );
};
