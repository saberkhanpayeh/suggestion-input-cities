//this component not need to this project
import { useEffect, useState } from "react"

function GetData() {
    const[data,setData]=useState([]);
    useEffect(()=>{
        const fetchData= async()=>{
            try{
                const res=await fetch("/cities.json/");
                const json=await res.json();
                setData(json);
                console.log(json);
                console.log("data");
            }
            catch(error){
                console.log(error);
            }
        
        } 
        fetchData();
  
    },[])
  return (
    <div>getData
        {!data.length&&<h3>Data not fetch</h3>}
    </div>
  )
}

export default GetData