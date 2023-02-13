import React,{useState} from "react";
import"./Clothing.css";
import ProductCard from "../Components/ProductCard";

const Clothing =()=>{
    // state = { 
    //     clothing:[
    //         {img:"https://th.bing.com/th/id/OIP._rF4kLZLD_lHlG9SjFJRwAHaIe?w=203&h=233&c=7&r=0&o=5&dpr=1.5&pid=1.7",title:"Mens Short Sleeved Shirt",price:"700"},
    //         {img:"https://th.bing.com/th/id/OIP.q9843oJ1Rw0ZZYEMxR4BnwHaKX?w=203&h=284&c=7&r=0&o=5&dpr=1.5&pid=1.7",title:"Womens Short Sleeved Shirt",price:"1,200"},
    //         {img:"https://th.bing.com/th/id/OIP.NebbX55R7-HZUi15Mus-fAHaI_?w=203&h=247&c=7&r=0&o=5&dpr=1.5&pid=1.7",title:"Casuals Shirt",price:"1,500"},

            
    //     ]
    //  } 

     const [clothing, setclothing] = useState(
        [
            {img:"https://th.bing.com/th/id/OIP._rF4kLZLD_lHlG9SjFJRwAHaIe?w=203&h=233&c=7&r=0&o=5&dpr=1.5&pid=1.7",title:"Mens Short Sleeved Shirt",price:"700",id:1},
            {img:"https://th.bing.com/th/id/OIP.q9843oJ1Rw0ZZYEMxR4BnwHaKX?w=203&h=284&c=7&r=0&o=5&dpr=1.5&pid=1.7",title:"Womens Short Sleeved Shirt",price:"1,200",id:2},
            {img:"https://th.bing.com/th/id/OIP.NebbX55R7-HZUi15Mus-fAHaI_?w=203&h=247&c=7&r=0&o=5&dpr=1.5&pid=1.7",title:"Casuals Shirt",price:"1,500",id:3},

            
        ]
     );
    
        return (
              <>
        <div className="Electronics">
            <h1>Clothing</h1>
        </div>
        <div>
                <h2>Shirt</h2>
            </div>
            <div className="Products">
            {clothing.map((details)=>(
                    <ProductCard details={details} key={details.id}></ProductCard>
                ))}
            </div>
            </>
        );
    
}
 
export default Clothing;