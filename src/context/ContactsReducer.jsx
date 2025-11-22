function contactsReducer(state, action) {
  switch (action.type) {
    case "ADD_CONTACT": {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }

    case "UPDATE_CONTACT": {
      const updated = state.contacts.map((item) => (item.id === action.payload.id ? action.payload : item));
      return { ...state, contacts: updated };
    }

    case "DELETE_CONTACT": {
      const filtered = state.contacts.filter((contact) => contact.id !== action.payload);
      return {
        ...state,
        contacts: filtered,
      };
    }

    case "SET_CONTACTS":{
      return{
        ...state,contacts:action.payload||[]
      }
    }
    default:
      return state;
  }
}

export default contactsReducer;
