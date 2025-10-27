import { useState } from "react";
import ContactItem from "../ContactItem/ContactItem";
import styles from "./ContactList.module.css";

function ContactList({ contactList, onDelete }) {
  const [selected, setSelected] = useState([]);

  const selectHandler = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };
  const deleteSelected = () => {
    selected.forEach((id) => onDelete(id));
    setSelected([]);
  };
  return (
    <>
      {!contactList.length ? (
        <p className={styles.empty}>No Contacts Yet</p>
      ) : (
        <div className={styles.container}>
          <h3>Contact List</h3>
          {selected.length > 0 && <button onClick={deleteSelected}>Delete Selected</button>}
          <div className={styles.list}>
            {contactList.map((contact) => (
              <ContactItem key={contact.id} data={contact} onDelete={onDelete} onSelect={selectHandler}  isSelected={selected.includes(contact.id)} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
export default ContactList;
