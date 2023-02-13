import React from "react";
import "./ProductDetails.css"


const ProductDetails=(props)=>{
    return(
        <>
        {/* {props.details.map((value,index)=>( */}

            <div className="home-section">
           <section class="padding-y">
          <div class="container">
          <div class="row">
          <aside class="col-lg-6">
              <article class="gallery-wrap"> 
              <div class="img-big-wrap img-thumbnail">
              <div data-type="image" href=""> 
                  <img height="560" src="" alt="img"/> 
              </div>
              </div> 
              </article> 
          </aside>
          <main class="col-lg-6">
              <article class="ps-lg-3">
              <h4 class="title text-dark">Iphone 14 <br /> Mobile </h4>
              <div class="rating-wrap my-3">
              <ul class="rating-stars">
              <li style={{width:"80%"}} class="stars-active"> <img src="" alt=""/> </li>
              <li> <img src="" alt=""/> </li>
              </ul>
              <b class="label-rating text-warning"> 4.5</b>
              <i class="dot"></i>
              <span class="label-rating text-muted"> <i class="fa fa-shopping-basket"></i> 154 orders </span>
              <i class="dot"></i>
              <span class="label-rating text-success">In stock</span>
              </div> 
          
              <div class="mb-3"> 
              <var class="price h5">Rs.1,40,000</var> 
              <span class="text-muted">/per box</span> 
              </div> 
          
              <p>Description..........</p>
          
          
              <hr/>
          
              <div class="row mb-4">
              <div class="col-md-4 col-6 mb-2">
              <label class="form-label">Colour</label>
              <select class="form-select">
                  <option>Red</option>
                  <option>Pink</option>
                  <option>RoseGold</option>
              </select>
              </div> 
              <div class="col-md-4 col-6 mb-3">
              <label class="form-label d-block">Quantity</label>
              <div class="input-group input-spinner">
                  <button class="btn btn-icon btn-light" type="button"> 
                  
                  </button>
                  <input class="form-control text-center" placeholder="" value="14"/>
                  <button class="btn btn-icon btn-light" type="button"> 
                 
                  </button>
              </div> 
              </div> 
              </div> 
          
              <div href="#" class="btn  btn-warning"> Buy now </div>
              <div href="#" class="btn  btn-primary"> <i class="me-1 fa fa-shopping-basket"></i> Add to cart </div>
              
              </article> 
          </main> 
          </div> 
          
          </div> 
          </section>
          
          
         
              
  </div>
                {/* ))} */}
            </>
    )
}

export default ProductDetails;