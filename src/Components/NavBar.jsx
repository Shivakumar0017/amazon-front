import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
    return ( 
        <nav className="header">
            <div className="headerTop">
                <Link to="/"><img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" className="logo" /></Link>
                <div className="headerSearch">
                    <input type="text" className="searchInput" placeholder="...Search"></input>
                    <SearchIcon className="searchIcon"></SearchIcon>
                </div>
                <div className="headerNavbar">
                    <Link to="/" className="link">
                        <div className="options">
                        <span className="options_one">Hello</span>
                        <span className="options_Two">Signup!</span>
                        </div>
                    </Link>

                    <Link to="/" className="link">
                        <div className="options">
                        <span className="options_one">Return&</span>
                        <span className="options_Two">Orders</span>
                        </div>
                    </Link>

                    <Link to="/" className="link">
                        <div className="options_cart">
                        <ShoppingCartIcon/>
                        <span className="cart_count">Cart</span>
                        </div>
                    </Link>

                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;