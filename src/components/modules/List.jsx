import { MdDeleteOutline } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { ContactContext } from "../../context/ContactContext";
import { FaPhoneAlt } from "react-icons/fa";
import { useContext } from "react";
import { v4 } from "uuid";

const List = () => {
  // ============== Context =============
  const { deleteContact, contacts } = useContext(ContactContext);

  // ============== Rendering =============
  return (
    <ul className="space-y-4">
      {contacts.map((contact) => (
        <li
          key={v4()}
          className="flex justify-between items-center bg-gray-50 border rounded-lg p-4 shadow hover:shadow-lg"
        >
          <div>
            <p className="text-lg font-semibold text-gray-700">
              {contact.name} {contact.lastname}
            </p>
            <p className="text-sm text-gray-600 flex items-center">
              <SiMinutemailer className="mr-2 text-blue-500" />
              {contact.email}
            </p>
            <p className="text-sm text-gray-600 flex items-center">
              <FaPhoneAlt className="mr-2 text-green-500" />
              {contact.phone}
            </p>
          </div>
          <button
            onClick={() => deleteContact(contact.id)}
            className="text-red-300 hover:text-red-700"
          >
            <MdDeleteOutline size={24} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
