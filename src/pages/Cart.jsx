import Button from "../components/Button";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    items,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    totalCount,
    totalPrice,
  } = useCart();

  if (items.length === 0) {
    return (
      <div>
        <h1>Cart</h1>
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Cart</h1>

      <p>
        Total items: <b>{totalCount}</b>
      </p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 12,
              marginBottom: 10,
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: 60, height: 60, objectFit: "contain" }}
            />

            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700 }}>{item.title}</div>
              <div>${item.price}</div>
            </div>

            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <Button onClick={() => decreaseQty(item.id)}>-</Button>
              <span>{item.qty}</span>
              <Button onClick={() => increaseQty(item.id)}>+</Button>
            </div>

            <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
          </li>
        ))}
      </ul>

      <h3>Total price: ${totalPrice.toFixed(2)}</h3>

      <div style={{ display: "flex", gap: 10 }}>
        <Button onClick={clearCart}>Clear Cart</Button>
      </div>
    </div>
  );
}