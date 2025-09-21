export function filterUsers(users, activeFilter) {
  if (activeFilter === "All") return users;
  return users.filter((u) => u.category === activeFilter);
}
