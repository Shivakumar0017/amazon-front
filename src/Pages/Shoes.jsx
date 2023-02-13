import React,{Component} from "react";
import"./Shoes.css";
import ProductCard from "../Components/ProductCard";

class Shoes extends Component {
    state = { 
        shoes:[
            {img:"https://th.bing.com/th/id/OIP.UGt3pxPwM9TrXstusD9gPAHaGJ?w=233&h=193&c=7&r=0&o=5&dpr=1.5&pid=1.7",title:"Adidas Mens Shoe",price:"27,000"},
            {img:"https://th.bing.com/th/id/OIP.kPl3bkL_jJLLODSKyt-QIAHaE7?w=274&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",title:"Basket Ball Shoes",price:"45,000"},
            {img:"https://th.bing.com/th/id/OIP.9U_rYsBX-4bM4ligWUriIQHaHa?w=196&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7",title:"Womens Asics Shoes",price:"11,000"},

            
        ]
     } 
    render() { 
        return (
              <>
        <div className="Electronics">
            <h1>Shoes</h1>
        </div>
        <div>
                <h2>Sneakers</h2>
            </div>
            <div className="Products">
            <ProductCard details={this.state.shoes}></ProductCard>
            </div>
            </>
        );
    }
}
 
export default Shoes
  