import { useEffect, useState } from "react";
import Input from "../components/Input";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/api";



function Shop() {
   const[product,setProducts] = useState([])
   const[loading, setLoading]=useState(true)
   const[error,setError]=useState("")

   useEffect(()=>{
    async function load() {
        try {
          setLoading(true);
          setError("");
          const data = await getProducts();
          setProducts(data);
        } catch (e) {
          setError(e.message);
        } finally {
          setLoading(false);
        }
      }
  
      load();

   },[])

   if (loading) return <h2>Loading...</h2>;
   if (error) return <h2>{error}</h2>;

      function handleAdd() {
        alert("Added to cart (later we’ll connect real cart)");
      }
    return (
      <div>

      <h1>Shop</h1>
      <div className="products-container">

      {product.map((p) => (
      <ProductCard
            key={p.id}
            product={p}
            onAdd={() => alert(`Added: ${p.title}`)}
          />
      ))}
      </div>
      <Input placeholder="Search products..." />

    </div>

  );

  }
  export default Shop;