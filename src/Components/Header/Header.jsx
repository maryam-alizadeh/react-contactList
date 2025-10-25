
import styles from "./Header.module.css"


function Header({onAdd}) {
  return (
    <>
       <div className={styles.container}>
        <h1>Contacts</h1>
        <button className={styles.addBtn} onClick={onAdd} >+</button>
        </div> 
    </>
  )
}

export default Header