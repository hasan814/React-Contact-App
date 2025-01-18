import { useState } from "react";
import toast from "react-hot-toast";

const Contacts = ({ setContacts }) => {
  // ============ State ============
  const [contact, setContact] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });
  // ============ change Function ============
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  // ============ submit Function ============
  const submitHandler = () => {
    if (Object.values(contact).some((value) => !value.trim())) {
      toast.error("Please enter valid Data!");
      return;
    }
    setContacts((contacts) => [...contacts, contact]);
    setContact({ name: "" });
  };

  // ============ Rendering ============
  return (
    <div className="mt-10 flex items-center justify-center">
      <div className="border p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          Add a New Contact
        </h2>
        <form className="grid grid-cols-2 gap-4">
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={contact.name}
            onChange={changeHandler}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={contact.lastname}
            onChange={changeHandler}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={contact.email}
            onChange={changeHandler}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
          <input
            name="phone"
            type="number"
            placeholder="Phone"
            value={contact.phone}
            onChange={changeHandler}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
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

export default Contacts;
