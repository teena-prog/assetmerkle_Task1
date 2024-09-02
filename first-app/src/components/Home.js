import React from 'react';
import Navbar from "./Navbar";
// import BannerBackground from "../Assets/home-banner-background.png";
import { FiArrowRight } from "react-icons/fi";

export const Home = () => {
  return (  <div className="home-container">
        <Navbar/>
        <div className="home-banner-container" >
          {/* <div className="home-bannerImage-conatainer" >
               <img src={BannerBackground} alt="" />
          </div> */}
          <div className="home-text-section" >
               <h1 className="primary-heading" >
                   HEY THERE , TEENA CHOUDHARY HERE !!
                   </h1>
                   <p className="primary-text">
                     I  AM  FROM  ECE-AI  BRANCH  OF  IGDTUW  ,  I  ATTENDED  ASSETMERKEL'S  ORIENTATION 
                      AND  I  WAS  VERY  INSPIRED  BY  IT  ,  NOW  I  REALLY  WANTS  TO  WORK  WITH  YOU  GUYS  AND
                      ALSO  WANTS  TO  ENJOY  MORE  PIZZA  SLICES.  
                                         HAHAHA!!
                   </p>
                   <button className="secondary-button" >
                    Select Me < FiArrowRight />
                   </button>
          </div>
        </div>
    </div>
  );

};

export default Home;