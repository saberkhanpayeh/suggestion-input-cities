/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
const Input = ({data,citiesList,setCitiesList}) => {
  const inputRef=useRef(null);
  const [city,setCity]=useState("");
  const [input,setInput]=useState("");
  
  useEffect(()=>{
    const changeHandler=(e)=>{
      if(!input)
        {
         setCitiesList([]);
        }
       setInput(e.target.value);
       const findCity=data.find((city)=>
          city.startsWith(input) && city[0]===input[0]);
       
       const cityList=data.filter((city)=>
          city.includes(input)&&city[0]===input[0]);
        setCitiesList(cityList);
       if(findCity)
       {
        setCity(findCity);
       }
       else{
        setCity("");
       }

    };
     const inputElement = inputRef.current;
 
     inputElement.addEventListener("input", changeHandler);

     return () => {
       inputElement.removeEventListener("input", changeHandler);
       console.log("Input listener removed!");
     };
     
 },[input])
 console.log(input);
 console.log(citiesList)
  return (
    <>
      <div className="input">
        <h1>Suggestion City App</h1>
        <p>
          <a href="#">MySite</a> | React.js Full Course
        </p>
      <label htmlFor="input" >
        {input&&city}
      </label>
      <input
        ref={inputRef}
        type="text"
        id="input"
        placeholder="Enter City Name"
      />
    </div>
    </>

  );
};

export default Input;
