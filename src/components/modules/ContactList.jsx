import { ContactContext } from "../../context/ContactProvider";
import { useContext } from "react";

import List from "./List";

const ContactList = () => {
  // ============== Context =============
  const { contacts } = useContext(ContactContext);

  // ============== Rendering =============
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-700 mb-4">Contacts List</h3>
      {contacts.length ? (
        <List contacts={contacts} />
      ) : (
        <h1 className="text-gray-500 text-center">No Contact Added!</h1>
      )}
    </div>
  );
};

export default ContactList;
