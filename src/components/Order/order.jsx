import "./order.css";
import { OrderItem } from "../OrderItem/orderItem";

export const Order = ({ items }) => {
  return (
    <main className="order">
      <div className="container order__content">
        <h1>Vaše objedávka</h1>
        {items.data.length === 0 ? (
          <p className="empty-order">Zatím nemáte nic objednáno</p>
        ) : (
          <div className="order__items">
            {items.data.map((item) => (
              <OrderItem 
                key={item.id}
                name={item.name}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};
