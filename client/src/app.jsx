import { useEffect, useState } from "react";
import Table from "./components/Table/Table";

function App() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
  fetch("http://localhost:8080/api/hello")
    .then((res) => res.text())
    .then((data) => {
      console.log("Fetched message:", data); // <-- log message
      setMessage(data);
    });

  fetch("http://localhost:8080/api/users")
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched users:", data); // <-- log users array
      setUsers(data);
    })
    .catch((err) => console.error("Error fetching users:", err));
}, []);


  return (
    <div className="p-4">
      <div className="mb-4">{message} - changed!</div>

      {/* Render table only if users are loaded */}
      {users.length > 0 ? <Table data={users} /> : <div>Loading users...</div>}
    </div>
  );
}

export default App;
