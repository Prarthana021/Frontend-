import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  // Load initial cart from localStorage (so refresh keeps cart)
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("cart_items");
    return saved ? JSON.parse(saved) : [];
  });

  // Save cart to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("cart_items", JSON.stringify(items));
  }, [items]);

  // Add product to cart (if exists -> qty + 1, else add with qty 1)
  function addToCart(product) {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);

      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }

      // Store only what you need in cart item (cleaner)
      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          qty: 1,
        },
      ];
    });
  }

  // Remove item completely
  function removeFromCart(id) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  // Increase quantity
  function increaseQty(id) {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
    );
  }

  // Decrease quantity (if qty becomes 0, remove item)
  function decreaseQty(id) {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  }

  // Clear entire cart
  function clearCart() {
    setItems([]);
  }

  // Totals (derived values)
  const { totalCount, totalPrice } = useMemo(() => {
    const totalCount = items.reduce((sum, i) => sum + i.qty, 0);
    const totalPrice = items.reduce((sum, i) => sum + i.qty * i.price, 0);
    return { totalCount, totalPrice };
  }, [items]);

  const value = {
    items,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    totalCount,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}