import { useEffect, useState } from "react";
import Input from "../components/Input";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/api";

function Shop() {
   const[products,setProducts] = useState([])
   const[loading, setLoading]=useState(true)
   const[error,setError]=useState("")
   const[search,setSearch]=useState("")
   const[category, setCategory]=useState("all")


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

   const filteredProducts = products
   .filter((p) => (category === "all" ? true : p.category === category))
   .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));      
   
   function handleAdd() {
        alert("Added to cart (later we’ll connect real cart)");
      }

  const categories=["all", ...new Set(products.map((p)=> p.category))] 

    return (
      <div>

      <h1>Shop</h1>
      <Input placeholder="Search products..." 
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />

      <select value={category} onChange={(e)=>setCategory(e.target.value)}>
      {categories.map((c) => (
    <option key={c} value={c}>
      {c}
    </option>
     ))}

      </select>


      <div className="products-container">

      {filteredProducts.map((p) => (
      <ProductCard
            key={p.id}
            product={p}
            onAdd={() => alert(`Added: ${p.title}`)}
          />
      ))}
      </div>

    </div>

  );

  }
  export default Shop;

