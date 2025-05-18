import React, { useState, useEffect } from 'react';
import imgfile from '../imgfile/img1.jpg';
import axios from 'axios';
import { FaHeart } from "react-icons/fa6";
import { IoMdHeartDislike } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

function Cardview() {

  const [cardIMG, setCardIMG] = useState(['']);


  const valueFilim = useSelector((state) => state.searchFilim.inputValue)











  useEffect(() => {

    axios.get('https://mediasite-backend.onrender.com/cardimg').then((movieIMG) => {
      setCardIMG(movieIMG.data);
      console.log(movieIMG.data);
    })


  }, [])


  const FilterFilimSearch = cardIMG.filter(items =>
    items.Filim_Name && valueFilim &&
    items.Filim_Name.toLowerCase().includes(valueFilim.toLowerCase())
  );





  const detalsPath = (item) => {

    localStorage.setItem('object', JSON.stringify([
      item.filim_list_id,
      item.Filim_Name,
      item.Filim_Description,
      item.Filim_ratings,
      item.Filim_detals_img,
      item.filim_trailer
    ]));

  }


  return (
    <div className="grid-container">


      {
        valueFilim== "" ? (
    

   cardIMG.map((item) => (
            <div class="grid-item-1" style={{ cursor: 'pointer' }}>

              <Link to={'/detals'}>


                <div className='desc' onClick={() => { detalsPath(item) }}>

                  <img src={item.Filim_src_img} alt="" style={{ width: '200px', height: '300px' }} />
                  <div className='cardtext'>
                    <span>Entertainment</span>
                    <h2>{item.Filim_Name}</h2>
                    <span>6 months ago</span>
                    <div className='cardicons'>
                      <FaHeart className='hearticon' /><span className='heart'>{item.Filim_heart}</span>
                      <IoMdHeartDislike className='dislikeicon' /><span className='dislike'>{item.Filim_dislike}</span>
                      <FaRegEye className='viewicon' /><span className='view'>{item.Filim_view}</span>
                    </div>

                  </div>
                </div>
              </Link>


            </div>




          ))


        ) : (
       



      FilterFilimSearch.map((item) => (
            <div class="grid-item-1" style={{ cursor: 'pointer' }}>

              <Link to={'/detals'}>


                <div className='desc' onClick={() => { detalsPath(item) }}>

                  <img src={item.Filim_src_img} alt="" style={{ width: '200px', height: '300px' }} />
                  <div className='cardtext'>
                    <span>Entertainment</span>
                    <h2>{item.Filim_Name}</h2>
                    <span>6 months ago</span>
                    <div className='cardicons'>
                      <FaHeart className='hearticon' /><span className='heart'>{item.Filim_heart}</span>
                      <IoMdHeartDislike className='dislikeicon' /><span className='dislike'>{item.Filim_dislike}</span>
                      <FaRegEye className='viewicon' /><span className='view'>{item.Filim_view}</span>
                    </div>

                  </div>
                </div>
              </Link>


            </div>





          ))
        )
      }








    </div>

  )
}

export default Cardview


