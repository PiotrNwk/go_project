import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Table from "./components/Table/Table";
import usersData from "./data/users"; // <-- import your local data
import Footer from "./components/layout/Footer";

function App() {
  const [users, setUsers] = useState(usersData); // preload with local data

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 p-4">
        <div className="py-6 text-center">
          Static data loaded from frontend:
        </div>
        {users.length > 0 ? <Table data={users} /> : <div>No users found</div>}
        <div className="bg-red-500 text-white p-4 hidden">
          Tailwind is working!
        </div>
      </main>

      <Footer companyName="Piotr Nowak" />
    </div>
  );
}

export default App;
