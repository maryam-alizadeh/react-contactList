import { useState, useEffect } from "react";
import styles from "./AddContact.module.css";
import { v4 } from "uuid";

function AddContactModal({ onClose, onAdd, onEdit, editContact }) {
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    phone: "",
  });

  useEffect(() => {
    if (editContact) {
      setContact(editContact);
    }
  }, [editContact]);
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));
     setErrors({ name: "", lastName: "", phone: "" });
  };

  const addHandler = () => {
    let newErrors = { name: "", lastName: "", phone: "" };
    if (!contact.name.trim()) newErrors.name = "Name is required.";
    if (!contact.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!contact.phone.trim() || contact.phone.length < 5) newErrors.phone = "Enter a valid phone number.";
    if (newErrors.name || newErrors.lastName || newErrors.phone) {
      setErrors(newErrors);
      return;
    }
    if (editContact) {
      const confirmEdit = window.confirm("Are you sure you want to save changes?");
      if (!confirmEdit) return;
      onEdit(contact);
    } else {
      const newContact = { ...contact, id: v4() };
      onAdd(newContact);
    }

    setContact({ id: "", name: "", lastName: "", phone: "" });
    setErrors({ name: "", lastName: "", phone: "" });
    onClose();
  };

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <h1>Add Contact</h1>

          <input type="text" name="name" placeholder="Name" value={contact.name} onChange={changeHandler} />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
          <input type="text" name="lastName" placeholder="LastName" value={contact.lastName} onChange={changeHandler} />
          {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}
          <input type="number" name="phone" placeholder="Phone" value={contact.phone} onChange={changeHandler} />
          {errors.phone && <p className={styles.error}>{errors.phone}</p>}
          <button onClick={addHandler}>{editContact ? "Save Changes" : "Add"}</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </>
  );
}

export default AddContactModal;
