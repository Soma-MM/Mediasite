import React,{useState,useEffect} from 'react'
import axios from 'axios';
function Navbar() {
const [navimg,setNavimg] = useState();

useEffect(()=>{

  axios.get('https://mediasite-backend.onrender.com/navbarimg').then((navbarIMG1)=>{
    setNavimg(navbarIMG1.data[1].navimglink);
    console.log(navbarIMG1.data[1].navimglink);
  })

},[])


  return (
    <div className='navbarMain'>
      <div className='navbarContent'>
        <div className='navbarimg'>
        <img src={navimg} alt="" style={{width:'76px',height:'76px'}}/>
        <span>Media site</span>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div className='navbarlinks'>
          <a href="">Home</a>
          <a href="">Movies</a>
          <a href="">TV series</a>
          <a href="">Games</a>
          <a href="">Profile</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar