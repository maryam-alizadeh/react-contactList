import styles from "./Search.module.css"
function Search() {
  return (
    <div className={styles.container}>
        <input className={styles.input} type="text" placeholder='Search...' />
    </div>
  )
}

export default Search