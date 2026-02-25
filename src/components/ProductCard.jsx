import Button from "./Button";
import "../styles/ProductCard.css";

function ProductCard(props){
const p=props.product

return(
    <div className="card">
    <img className="card-img" src={p.image} alt={p.title} />
    <h3 className="card-title">{p.title}</h3>
    <p className="card-price">{p.price}</p>
    <Button onClick={props.onAdd}> Add to Cart</Button>

    </div>
)

}

export default ProductCard