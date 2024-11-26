import styles from "./SuggestionList.module.css";
function SuggestionList({citiesList}) {
  return (
    <div className={styles.container}>
       <h2>Suggestion List Of Cities</h2>
       {citiesList.length?(<ul>
        {citiesList.map((city,index) =>(<li key={index}>
            {city}
        </li>))}
       </ul>):<p>No Suggestion Exist!!</p>}

    </div>
  )
}

export default SuggestionList