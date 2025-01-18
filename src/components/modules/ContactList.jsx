import PropTypes from "prop-types";
import List from "./List";

const ContactList = ({ contacts }) => {
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

ContactList.propTypes = {
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

export default ContactList;
