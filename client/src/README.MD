client/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Table.jsx
│   │   ├── FilterButton.jsx
│   │   └── index.js              # optional barrel file
│   │
│   ├── data/
│   │   ├── filters.js            # export const filters = [...]
│   │   └── usersData.js          # mock/static users data
│   │
│   ├── utils/
│   │   └── filterUsers.js        # export function filterUsers(...)
│   │
│   ├── App.jsx
│   ├── main.jsx                  # entry point
│   └── index.css / tailwind.css  # styles
│
├── package.json
└── vite.config.js / webpack.config.js
