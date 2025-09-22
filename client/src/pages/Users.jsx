import { useState } from "react";
import FilterButton from "../components/table/FilterButton";
import Table from "../components/table/Table";
import { filters } from "../data/filters";
import usersData from "../data/users";
import { filterUsers } from "../utils/filterUsers";

export default function Users() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(true);

  const filteredUsers = filterUsers(usersData, activeFilter);

  return (
    <>
      {/* Toggle button */}
      <div className="mb-4">
        <button
          type="button"
          onClick={() => setShowFilters((prev) => !prev)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-800 transition-colors duration-200"
        >
          Filters
        </button>
      </div>

      {/* Filters */}
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
    </>
  );
}
