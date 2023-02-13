import React,{Component} from "react";
import"./Electronics.css";
import ProductCard from "../Components/ProductCard";

class Electronics extends Component {
    state = { 
        mobiles:[
            {img:"https://images.pexels.com/photos/15378955/pexels-photo-15378955.jpeg?auto=compress&cs=tinysrgb&w=600",title:"Iphone 14 ",price:"87,000"},
            {img:"https://images.pexels.com/photos/13780425/pexels-photo-13780425.jpeg?auto=compress&cs=tinysrgb&w=600",title:"Samsung Galaxy S22",price:"1,10,000"},
            {img:"https://images.pexels.com/photos/13588948/pexels-photo-13588948.jpeg?auto=compress&cs=tinysrgb&w=600",title:"Redmi",price:"40,000"},
            {img:"https://images.pexels.com/photos/9403824/pexels-photo-9403824.jpeg?auto=compress&cs=tinysrgb&w=600",title:"OnePlus Nord 2",price:"32,000"},
           // {img:"https://th.bing.com/th/id/OIP.zlJfK0HsYU1d7-Dese1VrgHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",title:"Samsung Z-fold 4",price:"145000"},
            
        ]
     } 
    render() { 
        return (
              <>
        <div className="Electronics">
            <h1>Electronics</h1>
        </div>
        <div>
                <h2>Mobiles</h2>
            </div>
            <div className="Products">
            <ProductCard details={this.state.mobiles}></ProductCard>
            </div>
            </>
        );
    }
}
 
export default Electronics
  
