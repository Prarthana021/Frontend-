import { useCart } from "../context/CartContext";

function Cart() {
  const { items } = useCart();

  return (
    <div>
      <h1>Cart Page</h1>

      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.title} — qty: {item.qty}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
