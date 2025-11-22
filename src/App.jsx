import Header from "./Components/Header/Header";
import Search from "./Components/SearchBox/Search";
import AddContactModal from "./Components/AddContactModal/AddContactModal";
import ContactList from "./Components/ContactList/ContactList";
import "./global.css";

import { ContactsProvider, useContacts } from "./context/ContactsContext.jsx";

function App() {
  return (
    <ContactsProvider>
      <AppContent />
    </ContactsProvider>
  );
}

function AppContent() {
  const { showModal, addContact, updateContact, closeModal, editContact } = useContacts();
  return (
    <div className="appContainer">
      <Header />
      <Search />

      <div className="contactArea">
        <ContactList />
        {showModal && <AddContactModal onClose={closeModal} onAdd={addContact} onEdit={updateContact} editContact={editContact} />}
      </div>
    </div>
  );
}

export default App;
