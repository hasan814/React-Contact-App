import { Toaster } from "react-hot-toast";

import ContactList from "./components/modules/ContactList";
import Contacts from "./components/modules/Contacts";

const App = () => {
  // ============ Rendering ==============
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <Toaster />
      <h1 className="text-white text-4xl font-bold shadow-lg">Contact App</h1>
      <Contacts />
      <ContactList />
    </div>
  );
};

export default App;
