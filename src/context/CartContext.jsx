// Import React hooks needed to create and use context and state
import { createContext, useContext, useState, useEffect } from "react";


// Create the CartContext object
// This is like creating a global storage container
const CartContext = createContext();


// Create the Provider component
// This component will wrap your whole app and provide cart data to all components
export function CartProvider({ children }) {

  // Create state to store cart items
  // items = current cart array
  // setItems = function to update cart
  // Initially cart is empty []
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("cart_items");
    return saved ? JSON.parse(saved) : [];
   });
   
   useEffect(() => {
    localStorage.setItem("cart_items", JSON.stringify(items));
  }, [items]);

  // Function to add product to cart
  // This will be called when user clicks "Add to Cart"
  function addToCart(product) {

    // setItems updates the cart
    // prev = previous cart state
    setItems((prev) => {

      // Check if this product already exists in cart
      // find() searches the array
      const existing = prev.find((i) => i.id === product.id);


      // If product already exists in cart
      if (existing) {

        // map creates a new array
        // we update only the matching product
        return prev.map((i) =>

          // If this is the same product
          i.id === product.id

            // copy item and increase quantity by 1
            ? { ...i, qty: i.qty + 1 }

            // otherwise keep item unchanged
            : i
        );
      }


      // If product does NOT exist in cart

      // ...prev copies all old cart items
      // { ...product, qty: 1 } adds new product with quantity 1
      return [...prev, { ...product, qty: 1 }];
    });
  }



  // Provider makes cart data available to whole app
  return (

    <CartContext.Provider

      // value is what we want to share globally
      value={{

        items,       // cart items array

        addToCart    // function to add item

      }}
    >

      {/* children means render the rest of your app */}
      {children}

    </CartContext.Provider>

  );
}



// Create custom hook for easy access to cart
export function useCart() {

  // This lets any component access cart data
  return useContext(CartContext);

}