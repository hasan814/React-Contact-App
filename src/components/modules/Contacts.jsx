import { InputsList } from "../../utils/InputsList";
import { useState } from "react";
import { v4 } from "uuid";

import InputField from "../elements/InputField";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

const Contacts = ({ setContacts }) => {
  // ============ State ============
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });

  // ============ Change Handler ============
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  // ============ Submit Handler ============
  const submitHandler = () => {
    if (
      !contact.name ||
      !contact.lastname ||
      !contact.email ||
      !contact.phone
    ) {
      toast.error("Please enter valid Data!");
      return;
    }
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setContact({ id: "", name: "", lastname: "", email: "", phone: "" });
  };

  // ============ Rendering ============
  return (
    <div className="mt-10 flex items-center justify-center">
      <div className="border p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          Add a New Contact
        </h2>
        <form className="grid grid-cols-2 gap-4">
          {InputsList.map((field) => (
            <InputField
              key={v4()}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={contact[field.name]}
              onChange={changeHandler}
            />
          ))}
          <button
            type="button"
            onClick={submitHandler}
            className="col-span-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-100 hover:text-blue-500 transition"
          >
            Add Contact
          </button>
        </form>
      </div>
    </div>
  );
};

Contacts.propTypes = {
  setContacts: PropTypes.func.isRequired,
};

export default Contacts;
