import React, {useState } from "react";
import Logo from "../Assets/Logo.png";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Home from './Home';

const Navbar = () => {

    const [openMenu,setOpenMenu] = useState(false);
    const menuOption = [
      {
        text: "Home",
        Icon: <HomeIcon />,
      },
      {
        text: "About",
        Icon: <InfoIcon />,
      },


      {
        text: "Contact",
        Icon: <PhoneRoundedIcon />,
      },

      {
        text: "Cart",
        Icon: <ShoppingCartRoundedIcon />,
      },
    ];
 
  return(
    <nav>
       <div className="nav-logo-container" >
         <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-conatainer" >
         <a className="home" href="">Home</a>
         <a className="about" href="">About</a>
         <a className="blog" href="">Blogs</a>
         <a className="contact" href="contact">Contact</a>

         <button className = "primary-button">Wishlist</button>
       </div>
    </nav>
  );
};

export default Navbar;