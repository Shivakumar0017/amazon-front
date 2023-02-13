import React from "react";
import "./Home.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from "react-router-dom";


const Home = () => {
    return ( 
        
            <>
            
            <div className="productHeader"><h1>Latest products</h1></div>
            <div className="home">
              <div className="card1">
                <Link to="/electronics">
                <Card sx={{ maxWidth: "md" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Electronics
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
            </div>
            <div className="card2">
              <Link to="/clothing">
            <Card sx={{ maxWidth: "md" }}>
      <CardActionArea>
       <CardMedia
          component="img"
          height="140"
          image="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="pic"
          
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Clothing
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </Link>
            </div>
                <div className="card3">
                  <Link to="shoes">
                <Card sx={{ maxWidth: "md" }}>
      <CardActionArea LinkComponent="/electronics">
        <CardMedia
          component="img"
          height="140"
          image="https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Shoes
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </Link>
                </div>
            </div>
            </>
        
     );
}
 
export default Home;
