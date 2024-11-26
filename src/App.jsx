import { useEffect, useRef, useState } from "react";
import Input from "./Input";
import Data from "./cities.json";
import SuggestionList from "./SuggestionList";
import styles from "./App.module.css";
function App() {
   const [data,setData]=useState(Data);
   const [citiesList,setCitiesList]=useState([]);

   return (
      <div className={styles.container}>
      <Input data={data} citiesList={citiesList} setCitiesList={setCitiesList}  />
      <SuggestionList citiesList={citiesList}/>
      </div>
      )
}

export default App;
