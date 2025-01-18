import { createContext, useState } from "react";

import PropTypes from "prop-types";

export const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  // ============= State ===============
  const [contacts, setContacts] = useState([]);

  // ============= Delete Function ===============
  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };
  // ============= Rendering ===============
  return (
    <ContactContext.Provider value={{ contacts, setContacts, deleteContact }}>
      {children}
    </ContactContext.Provider>
  );
};
ContactProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactProvider;
