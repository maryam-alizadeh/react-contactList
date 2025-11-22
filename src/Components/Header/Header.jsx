
import styles from "./Header.module.css"
import { useContacts } from "../../context/ContactsContext";

function Header() {
 const { openModal } = useContacts();
  return (
    <>
       <div className={styles.container}>
        <h1>Contacts</h1>
        <button className={styles.addBtn} onClick={openModal} >+</button>
        </div> 
    </>
  )
}

export default Header