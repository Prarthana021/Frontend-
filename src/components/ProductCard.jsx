import Button from "./Button";
import "../styles/ProductCard.css";
import { useCart } from "../context/CartContext";

function ProductCard(props){

const p = props.product;

// step 2: get function from context
const { addToCart } = useCart();

return(
    <div className="card">

        <img className="card-img" src={p.image} alt={p.title} />

        <h3 className="card-title">{p.title}</h3>

        <p className="card-price">{p.price}</p>

        {/* step 3: call addToCart */}
        <Button onClick={() => addToCart(p)}>
            Add to Cart
        </Button>

    </div>
)

}

export default ProductCard