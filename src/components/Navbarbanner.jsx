import React, { useState, useEffect } from 'react'
import { ImSearch } from "react-icons/im";
import {useDispatch } from 'react-redux'
import { ValueInputSearch} from '../features/SearchSlice'
import axios from 'axios';
function Navbarbanner() {
 const dispatch = useDispatch()

    const searchdata = JSON.parse(localStorage.getItem('object'));
    console.log(searchdata);







    return (
        <div className='bannermain'>


            <div className='bannerContent'>

                <div className='bannerIMG'>


                    <div className='bannerSearchbar'>

                        <input type="text" placeholder='Search for movies or TV shows' onChange={(e) => { dispatch(ValueInputSearch(e.target.value)) }} />
                        <ImSearch className='searchIcon' style={{ color: 'white' }} />

                    </div>

                </div>




            </div>
        </div>
    )
}

export default Navbarbanner