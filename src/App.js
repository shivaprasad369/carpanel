import axios from "axios";
import CustomizedTables from "./Panel";
import { useEffect, useState } from "react";

function App() {
  const [data,setData]=useState()
useEffect(()=>{

    axios.get('https://carsbackend-3oe0.onrender.com/api/v1/post').then((data)=> console.log(data)).catch((error)=>console.log(error))
  },[]);
  return (
    <>
    <CustomizedTables data={data} setData={setData}/>
    </>
  );
}

export default App;
