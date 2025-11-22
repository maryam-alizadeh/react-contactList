import styles from "./Search.module.css"
import { useContacts } from "../../context/ContactsContext";

function Search() {
  const { setSearchTerm } = useContacts();
  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.container}>
        <input className={styles.input} type="text" placeholder='Search...' onChange={changeHandler} />
    </div>
  )
}

export default Search