import { useState } from "react";
import ContactItem from "../ContactItem/ContactItem";
import styles from "./ContactList.module.css";
import { useContacts } from "../../context/ContactsContext.jsx";


function ContactList() {
  const { filteredContacts, deleteContact, startEditContact } = useContacts();
  const [selected, setSelected] = useState([]);

  const selectHandler = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const deleteSelected = () => {
    if (!selected.length) return;

    const confirmDelete = window.confirm(
      "Are you sure you want to delete selected contacts?"
    );
    if (!confirmDelete) return;

    selected.forEach((id) => deleteContact(id));
    setSelected([]);
  };

  return (
    <>
      {!filteredContacts.length ? (
        <p className={styles.empty}>No Contacts Yet</p>
      ) : (
        <div className={styles.container}>
          <h3>Contact List</h3>

          {selected.length > 0 && (
            <button onClick={deleteSelected}>Delete Selected</button>
          )}

          <div className={styles.list}>
            {filteredContacts.map((contact) => (
              <ContactItem
                key={contact.id}
                data={contact}
                onDelete={deleteContact}
                onSelect={selectHandler}
                isSelected={selected.includes(contact.id)}
                onEdit={startEditContact}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ContactList;
