import { MdDeleteOutline } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { ContactContext } from "../../context/ContactProvider";
import { FaPhoneAlt } from "react-icons/fa";
import { useContext } from "react";
import { v4 } from "uuid";

const List = () => {
  // ============== Context =============
  const { deleteContact, contacts } = useContext(ContactContext);

  // ============== Rendering =============
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={v4()}>
          <p>
            {contact.name} {contact.lastname}
          </p>
          <p>
            <SiMinutemailer />
            {contact.email}
          </p>
          <p>
            <FaPhoneAlt />
            {contact.phone}
          </p>
          <button onClick={() => deleteContact(contact.id)}>
            <MdDeleteOutline />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
