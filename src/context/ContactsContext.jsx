import React, { createContext, useMemo, useReducer, useState, useContext, useEffect } from "react";

import contactsReducer from "./ContactsReducer";

export const ContactsContext = createContext(null);
const initialState = {
  contacts: [],
};
export function ContactsProvider({ children }) {
  const [state, dispatch] = useReducer(contactsReducer, initialState);
  const [showModal, setShowModal] = useState(false);
  const [editContact, setEditContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("contacts");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          dispatch({ type: "SET_CONTACTS", payload: parsed });
        }
      }
    } catch (err) {
      console.error("Failed to load contacts from localStorage", err);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    } catch (err) {
      console.error("Failed to save contacts to localStorage", err);
    }
  }, [state.contacts]);

  const openModal = () => setShowModal(true);

  const closeModal = () => {
    setShowModal(false);
    setEditContact(null);
  };

  const addContact = (contact) => {
    dispatch({ type: "ADD_CONTACT", payload: contact });
  };

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  const updateContact = (updatedContact) => {
    dispatch({ type: "UPDATE_CONTACT", payload: updatedContact });
  };

  const startEditContact = (contact) => {
    setEditContact(contact);
    setShowModal(true);
  };

  const filteredContacts = useMemo(() => {
    return state.contacts.filter((contact) => `${contact.name} ${contact.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [state.contacts, searchTerm]);

  const value = {
    contacts: state.contacts,
    filteredContacts,
    showModal,
    openModal,
    closeModal,
    editContact,
    startEditContact,
    addContact,
    deleteContact,
    updateContact,
    setSearchTerm,
  };
  return <ContactsContext.Provider value={value}>{children}</ContactsContext.Provider>;
}

export function useContacts() {
  const contactsContextValue = useContext(ContactsContext);
  if (!contactsContextValue) {
    throw new Error("useContacts must be used inside ContactsProvider");
  }

  return contactsContextValue;
}
