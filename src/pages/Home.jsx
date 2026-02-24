import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate() //lets your button move the user to another page when clicked.
  const handleShopClick =()=>{
    navigate("/shop")
  }

  return(
  <div>

  <h1>Home Page</h1>
  <p>Welcome to our store</p>   
    <Button onClick={handleShopClick}>
    Shop Now
  </Button>
  </div>
)
  }

  export default Home;