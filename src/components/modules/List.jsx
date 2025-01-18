import { MdDeleteOutline } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { v4 } from "uuid";

import PropTypes from "prop-types";

const List = ({ contacts }) => {
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
          <button>
            <MdDeleteOutline />
          </button>
        </li>
      ))}
    </ul>
  );
};
List.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default List;
