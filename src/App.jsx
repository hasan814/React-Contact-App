import Contacts from "./components/modules/Contacts";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <h1 className="text-white text-4xl font-bold shadow-lg">Contact App</h1>
      <Contacts />
    </div>
  );
};

export default App;
