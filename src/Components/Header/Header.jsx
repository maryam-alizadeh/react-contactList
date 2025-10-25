
import styles from "./Header.module.css"
function Header() {
  return (
    <>
       <div className={styles.container}>
        <h1>Contacts</h1>
        <button className={styles.addBtn}>+</button>
        </div> 
    </>
  )
}

export default Header