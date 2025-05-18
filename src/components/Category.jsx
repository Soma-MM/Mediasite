import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import axios from 'axios'

function Category() {


const [listHorror,setListHorror] = useState('');


const SelectHorrorList = (eventListHorror) => {
  try {

    axios.post('https://mediasite-backend.onrender.com/listFilim', { eventListHorror })
      .then((res) => {
        setListHorror(res.data[0].filim_result_name);
      })
      .catch((error) => {
        console.log("Axios error:", error);
      });
  } catch (error) {
    console.log("Error in try block:", error);
  }
};



  // useEffect(() => {






  // }, [])




  const options1 = [
    { value: 'movie', label: 'Movie' },
    { value: 'tvshow', label: 'TV show' },
    { value: 'cartoon', label: 'Cartoon' }
  ]



  const options3 = [
    { value: 'award', label: 'Award winning' },
    { value: 'noaward', label: 'No awards' },
  ]

  const options4 = [
    { value: '2008', label: '2008' },
    { value: '2012', label: '2012' },
    { value: '2020', label: '2020' }
  ]

  const options5 = [
    { value: 'usa', label: 'USA' },
    { value: 'france', label: 'France' },
    { value: 'UK', label: 'UK' }
  ]

  const options6 = [
    { value: 'english', label: 'English' },
    { value: 'french', label: 'French' },

  ]



  return (
    <div className='categoryMain'>
      <div className='categoryContent'>

        <Select
          options={options1}
          placeholder='Category:'
          theme={(theme) => ({
            ...theme,
            borderRadius: '5px',
            colors: {
              ...theme.colors,
              primary25: 'rgb(150, 150, 150)',
              primary: 'rgb(76, 70, 135)',
              neutral0: 'rgb(224, 224, 224)',
              neutral10: 'black',
              neutral80: 'white', //Chosen option
              neutral50: 'white',  //Placeholder
              neutral20: 'white',

            }
          })}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: 'rgb(58, 58, 58)',
              border: 'none',
              width: '250px',
              height: '50px',
              outline: 'none',
            }),
          }} />

          

        <select style={{ color: 'white' }} name="" id="" onChange={(e) => { SelectHorrorList(e.target.value) }}>

          <option style={{ color: 'white' }} value="Horror">Horror</option>
          <option style={{ color: 'white' }} value="Comedy">Comedy</option>
          <option style={{ color: 'white' }} value="Drama">Drama</option>


        </select>

        <Select options={options3}
          placeholder='Certification:'
          theme={(theme) => ({
            ...theme,
            borderRadius: '5px',
            colors: {
              ...theme.colors,
              primary25: 'rgb(150, 150, 150)',
              primary: 'rgb(76, 70, 135)',
              neutral0: 'rgb(224, 224, 224)',
              neutral10: 'rgb(102, 76, 187)',
              neutral80: 'white', //Chosen option
              neutral50: 'white',  //Placeholder
              neutral20: 'white',

            }
          })}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: 'rgb(58, 58, 58)',
              border: 'none',
              width: '250px',
              height: '50px',
              outline: 'none'
            }),
          }} />
        <Select options={options4}
          placeholder='Release year:'
          theme={(theme) => ({
            ...theme,
            borderRadius: '5px',
            colors: {
              ...theme.colors,
              primary25: 'rgb(150, 150, 150)',
              primary: 'rgb(76, 70, 135)',
              neutral0: 'rgb(224, 224, 224)',
              neutral10: 'rgb(102, 76, 187)',
              neutral80: 'white', //Chosen option
              neutral50: 'white',  //Placeholder
              neutral20: 'white',

            }
          })}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: 'rgb(58, 58, 58)',
              border: 'none',
              width: '250px',
              height: '50px',
              outline: 'none'
            }),
          }} />
        <Select options={options5}
          placeholder='Country:'
          isMulti
          theme={(theme) => ({
            ...theme,
            borderRadius: '5px',
            colors: {
              ...theme.colors,
              primary25: 'rgb(150, 150, 150)',
              primary: 'rgb(76, 70, 135)',
              neutral0: 'rgb(224, 224, 224)',
              neutral10: 'rgb(102, 76, 187)',
              neutral80: 'white', //Chosen option
              neutral50: 'white',  //Placeholder
              neutral20: 'white',

            }
          })}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: 'rgb(58, 58, 58)',
              border: 'none',
              width: '250px',
              height: '50px',
              outline: 'none'
            }),
          }} />
        <Select options={options6}
          placeholder='Language:'
          isMulti
          theme={(theme) => ({
            ...theme,
            borderRadius: '5px',
            colors: {
              ...theme.colors,
              primary25: 'rgb(150, 150, 150)',
              primary: 'rgb(76, 70, 135)',
              neutral0: 'rgb(224, 224, 224)',
              neutral10: 'rgb(102, 76, 187)',
              neutral80: 'white', //Chosen option
              neutral50: 'white',  //Placeholder
              neutral20: 'white',

            }
          })}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: 'rgb(58, 58, 58)',
              border: 'none',
              width: '250px',
              height: '50px',
              outline: 'none'
            }),
          }} />
      </div>
    </div>
  )
}

export default Category