import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import FilterButton from "./components/table/FilterButton";
import Table from "./components/table/Table";
import usersData from "./data/users"; // <-- import your local data
import Footer from "./components/layout/Footer";

function App() {
  const [users, setUsers] = useState(usersData);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false); // NEW toggle

  const filters = ["All", "Name", "Age", "Email"];

  const filteredUsers =
    activeFilter === "All"
      ? users
      : users.filter((u) => u.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 p-4">
        {/* Toggle button */}
        <div className="mb-4">
          <button
            onClick={() => setShowFilters((prev) => !prev)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors"
          >
            Filters
          </button>
        </div>

        {/* Filters appear only if showFilters is true */}
        {showFilters && (
          <div className="flex gap-2 mb-4">
            {filters.map((f) => (
              <FilterButton
                key={f}
                label={f}
                active={activeFilter === f}
                onClick={() => setActiveFilter(f)}
              />
            ))}
          </div>
        )}

        <div className="py-6 text-center">Static data loaded from frontend:</div>

        {filteredUsers.length > 0 ? (
          <Table data={filteredUsers} />
        ) : (
          <div>No users found</div>
        )}
      </main>

      <Footer companyName="Piotr Nowak" />
    </div>
  );
}

export default App;
