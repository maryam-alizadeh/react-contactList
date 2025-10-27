import styles from "../ContactList/ContactList.module.css";
function ContactItem({ data: { id, name, lastName, phone }, onDelete, onSelect, isSelected }) {
  const handleDeleteContact = () => {
    onDelete(id);
  };
  const selectHandler = () => {
    onSelect(id);
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
          <span>🖋️</span>
        </button>
      </div>
    </div>
  );
}

export default ContactItem;
