import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Found404 from './pages/Found404';
import Home from './pages/Home';
import Detals from './pages/Detals';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Found404 />} />
      <Route path="/detals" element={<Detals />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;










///db 


// import React, { useEffect, useState } from 'react';


// function App() {

//   const [valueInput,setValueInput] = useState('')

//   const datFilim = [
//     { id: 1, name: "Ali" },
//     { id: 2, name: "Veli" },
//     { id: 3, name: "Nigar" },
//     { id: 4, name: "Elvin" }
//   ];

//   const filteredData = datFilim.filter(item =>
//     item.name.toLowerCase().includes(valueInput)
//   );


//   return (
//     <div style={{ backgroundColor: 'white' }}>

//       <center>
//         <span>SearchFilim:</span>  <input type="text" onChange={(e)=>setValueInput(e.target.value)} />

//         <hr />

//         <ul>

//           {
//             filteredData.map((item) => (


//               <li key={item.id}>{item.name}</li>
//             ))
//           }


//         </ul>

//       </center>
//     </div>
//   )
// }

// export default App