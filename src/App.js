import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import Electronics from './Pages/Electronics';
import Shoes from './Pages/Shoes';
import Clothing from './Pages/Clothing';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar";
import "./App.css";
import ProductDetails from "./Components/ProductDetails";
import setmobiles from "./Pages/Electronics"



function App() {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/electronics" element={<Electronics/>}></Route>
          <Route path="/clothing" element={<Clothing/>}></Route>
          <Route path='/shoes' element={<Shoes/>}></Route>
          <Route path='/productdetails' element={<ProductDetails details={setmobiles}/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
