import styles from "../ContactList/ContactList.module.css";
function ContactItem({ data, onDelete, onSelect, isSelected, onEdit }) {
  const { id, name, lastName, phone } = data;
  const deleteContactHandler = () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${name}?`);
    if (!confirmDelete) return;
    onDelete(id);
  };
  const selectHandler = () => {
    onSelect(id);
  };

const editHandler = () => {
  const confirmEdit = window.confirm(`Do you want to edit ${name}'s contact?`);
  if (!confirmEdit) return;
  onEdit(data);
};
  return (
    <div className={styles.item}>
      <input type="checkbox" checked={isSelected} onChange={selectHandler} />

      <div className={styles.actions}>
        <button className={`${styles.actionBtn} ${styles.editBtn}`} onClick={editHandler}>
          🖋️
        </button>
        <button className={`${styles.actionBtn} ${styles.deleteBtn}`} onClick={deleteContactHandler}>
          🗑️
        </button>
      </div>

      <span className={styles.phone}>{phone}</span>
      <span className={styles.lastName}>{lastName}</span>
      <span className={styles.name}>{name}</span>
    </div>
  );
}

export default ContactItem;
