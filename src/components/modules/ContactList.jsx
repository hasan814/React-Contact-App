import List from "./List";
import { useContext } from "react";
import { ContactContext } from "../../context/ContactProvider";

const ContactList = () => {
  // ============== Context =============
  const { contacts } = useContext(ContactContext);

  // ============== Rendering =============
  return (
    <div>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <List contacts={contacts} />
      ) : (
        <h1>No Contact Added!</h1>
      )}
    </div>
  );
};

export default ContactList;
