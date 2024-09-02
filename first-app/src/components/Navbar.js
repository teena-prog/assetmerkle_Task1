import React, {useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { 
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
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
        text: "Testimonials",
        Icon: <CommentRoundedIcon />
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
         <a href="">Home</a>
         <a href="">About</a>
         <a href="">Testimonials</a>
         <a href="">Contact</a>
         <a href="">
           <BsCart2 className="navbar-cart-ion" />
         </a>
         <button className = "primary-button">Bookings Now</button>
       </div>
       <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={ () => setOpenMenu(true)} />
       </div>
       <Drawer open = {openMenu} onClose={ () => setOpenMenu(false)}
       anchor="right">
        <Box 
          sx={{width : 250}}>
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
           <List>
                {menuOptions.map((item) => (
                      <ListItem key={item.text} disablePadding >
                          <ListItemButton>
                              <ListItemIcon>{item.Icon}</ListItemIcon>
                              <ListItemText primary = {item.text} />
                          </ListItemButton>
                      </ListItem>
                ) )}

             </List>

         </Box>
       </Drawer>
     </nav>
  );
};

export default Navbar;