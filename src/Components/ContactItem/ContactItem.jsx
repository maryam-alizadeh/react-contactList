import styles from "../ContactList/ContactList.module.css";
function ContactItem({ data, onDelete, onSelect, isSelected, onEdit }) {
    const { id, name, lastName, phone } = data;
  const handleDeleteContact = () => {
    onDelete(id);
  };
  const selectHandler = () => {
    onSelect(id);
  };

  const editHandler = () => {
    onEdit(data);
  };
  return (
    <div className={styles.item}>
      <input type="checkbox" checked={isSelected} onChange={selectHandler} />
      <div className={styles.info}>
        <span className={styles.name}>
          {name} {lastName}
        </span>
        <span className={styles.phone}>{phone}</span>
        <button onClick={handleDeleteContact}>
          <span>🗑️</span>
        </button>
        <button>
          <span onClick={editHandler}>🖋️</span>
        </button>
      </div>
    </div>
  );
}

export default ContactItem;
