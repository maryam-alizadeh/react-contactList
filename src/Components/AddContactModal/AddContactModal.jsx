import { useState } from "react";
import styles from "./AddContact.module.css";
import { v4 } from "uuid";

function AddContactModal({ onClose, onAdd }) {
  const [contact, setContact] = useState({
    id:"",
    name: "",
    lastName: "",
    phone: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (!contact.name || !contact.phone) return;
    const newContact={...contact,id:v4()}
    onAdd(newContact);
    setContact({ name: "", lastName: "", phone: "" });
    onClose();
  };
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <h1>Add Contact</h1>

          <input type="text" name="name" placeholder="Name" value={contact.name} onChange={changeHandler} />
          <input type="text" name="lastName" placeholder="LastName" value={contact.lastName} onChange={changeHandler} />
          <input type="number" name="phone" placeholder="Phone" value={contact.phone} onChange={changeHandler} />
          <button onClick={addHandler}>Add</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </>
  );
}

export default AddContactModal;
