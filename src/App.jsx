import { Toaster } from "react-hot-toast";

import ContactList from "./components/modules/ContactList";
import Contacts from "./components/modules/Contacts";

const App = () => {
  // ============ Rendering ==============
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 via-purple-200 to-pink-300">
      <Toaster />
      <h1 className="text-white text-4xl font-bold shadow-lg mb-8">
        Contact App
      </h1>
      <div className="w-full max-w-4xl bg-transparent rounded-lg shadow-lg p-6">
        <Contacts />
        <hr className="my-6 border-gray-200" />
        <ContactList />
      </div>
    </div>
  );
};

export default App;
