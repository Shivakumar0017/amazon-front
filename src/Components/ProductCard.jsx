import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import "./ProductCard.css";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({details}) => {
    return ( 
      <>
      
        <Link to="/productdetails" >
        <Card sx={{ Width: 345 ,height: 500}}  className="box">
      <CardActionArea>

        <CardMedia sx={{height: 300,position: "cover"}}
          component="img"
          alt="img"
          height="150"
          image={details.img}
          //   component={this.props.component}
          //   alt={this.props.alt}
          //   height={this.props.height}
          //   image={this.props.image}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {details.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rs.{details.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className="cartButton">Add To Cart  </Button>
          <div className="stars">
          <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
          </div>
        </CardActions>
        </CardActionArea>
      </Card>
          </Link>
          
          </>
       );
      }
      
      export default ProductCard;