import styles from "./Search.module.css"
function Search({onSearch}) {
  
  const changeHandler = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className={styles.container}>
        <input className={styles.input} type="text" placeholder='Search...' onChange={changeHandler} />
    </div>
  )
}

export default Search