import React, { useState, useEffect } from 'react';
import axios from 'axios';
import wallpaper from '../imgfile/wallpaperdetails.jpg';
import { IoMdArrowBack } from "react-icons/io";
import { RiStarFill } from "react-icons/ri";
import { RiStarHalfFill } from "react-icons/ri";
import { RiStarLine } from "react-icons/ri";
import { RiPlayLargeFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

function Detals() {
  const data = JSON.parse(localStorage.getItem('object'));
  console.log(data); 

  const Modal = () => (
    <Popup trigger={ <button className='buttonDetailsBTN2'>TRAILER</button>} 
    modal  
     
    >
      <iframe src={[data[5]]} frameborder="0" style={{width:'100%',height:'100%'}}></iframe>
    </Popup>
  );
  
  return (
    <div className='mainDetails' >
      <div className='imgDetails' style={{ backgroundImage: `url(${data[4]})` }}>

        <div className='itemDetails'>
          <div className='btnDetails'  >
            <Link to={'/'}>
            <button className='DetailsBTN'><IoMdArrowBack /> Browse</button>
            </Link>
          </div>

          <div className='textDetails1'>
            <div></div>
            <div></div>
            <h3>{data[1]}</h3>
          </div>

          <div className='textDetails2'>
          <span>{data[2]}</span>

                 
          </div>


          <div className='ratingDetails'>
            <RiStarFill/>
            <RiStarFill/>
            <RiStarFill/>
            <RiStarHalfFill/>
            <RiStarLine/>
            <span>{data[3]} stars rating</span>
          </div>
          


          <div className='buttonDetails'>
            <button className='buttonDetailsBTN1'>
            <RiPlayLargeFill className='buttonDetailsPLAYBTN'/> PLAY NOW
            </button>
            <Modal/>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Detals