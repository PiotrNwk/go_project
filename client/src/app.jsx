import { useState } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table/Table";
import usersData from "./data/users"; // <-- import your local data

function App() {
  const [users, setUsers] = useState(usersData); // preload with local data

  return (
    <div className="p-4">
        <Navbar />
      <div className="pt-6">Static data loaded from frontend:</div>
      {users.length > 0 ? <Table data={users} /> : <div>No users found</div>}
      <div className="bg-red-500 text-white p-4">Tailwind is working!</div>
    </div>
  );
}

export default App;
