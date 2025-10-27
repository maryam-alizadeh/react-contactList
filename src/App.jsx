import { useState } from "react";
import Header from "./Components/Header/Header";
import Search from "./Components/SearchBox/Search";
import AddContactModal from "./Components/AddContactModal/AddContactModal";
import ContactList from "./Components/ContactList/ContactList";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [contactList, setContactList] = useState([]);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const addContact = (newContact) => {
    setContactList([...contactList, newContact]);
  };

    const deleteContact = (id) => {
    const updatedList = contactList.filter((contact) => contact.id !== id);
    setContactList(updatedList);
  };
  return (
    <>
      <Header onAdd={openModal} />
      <Search />
      <ContactList contactList={contactList} onDelete={deleteContact}/>
      {showModal && <AddContactModal onClose={closeModal} onAdd={addContact} />}
    </>
  );
}

export default App;
