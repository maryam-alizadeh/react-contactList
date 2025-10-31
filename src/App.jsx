import { useState } from "react";
import Header from "./Components/Header/Header";
import Search from "./Components/SearchBox/Search";
import AddContactModal from "./Components/AddContactModal/AddContactModal";
import ContactList from "./Components/ContactList/ContactList";
import "./global.css";


function App() {
  const [showModal, setShowModal] = useState(false);
  const [contactList, setContactList] = useState([]);
  const [searchContact, setSearchContact] = useState("");
  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setEditContact(null);
  };
  const [editContact, setEditContact] = useState(null);
  const addContact = (newContact) => {
    setContactList([...contactList, newContact]);
  };

  const deleteContact = (id) => {
    const updatedList = contactList.filter((contact) => contact.id !== id);
    setContactList(updatedList);
  };

  const editHandler = (contact) => {
    setEditContact(contact);
    openModal();
  };

  const updateContact = (updatedContact) => {
    const updatedList = contactList.map((item) => (item.id === updatedContact.id ? updatedContact : item));
    setContactList(updatedList);
    closeModal();
  };

  const filteredContacts = contactList.filter((contact) => `${contact.name} ${contact.lastName}`.toLowerCase().includes(searchContact.toLowerCase()));
  return (
    <div className="appContainer">
      <Header onAdd={openModal} />
      <Search onSearch={setSearchContact} />
      <div className="contactArea">
        <ContactList contactList={filteredContacts} onDelete={deleteContact} onEdit={editHandler} />
        {showModal && <AddContactModal onClose={closeModal} onAdd={addContact} onEdit={updateContact} editContact={editContact} />}
      </div>
    
    </div>
  );
}

export default App;
