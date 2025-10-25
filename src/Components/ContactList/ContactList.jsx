import styles from "./ContactList.module.css";

function ContactList({ contactList }) {
  return (
    <>
      {!contactList.length ? (
        <p className={styles.empty}>No Contacts Yet</p>
      ) : (
         <div className={styles.list}>
          {contactList.map((contact, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.info}>
                <span className={styles.name}>
                  {contact.name} {contact.lastName}
                </span>
                <span className={styles.phone}>{contact.phone}</span>
              </div>
             
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default ContactList;
