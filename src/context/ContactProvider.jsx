import { useEffect, useState } from "react";
import { ContactContext } from "./ContactContext";

import PropTypes from "prop-types";

const ContactProvider = ({ children }) => {
  // ============= State ===============
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  // ============= Save to LocalStorage ===============
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

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
