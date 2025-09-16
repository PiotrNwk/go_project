cd C:\Users\piotr\git\go_project
go run .\server\ .

cd client
npm run dev

client/
      └── dist/
               └── assets
      └── node_modules
      └── src
              └── assets
              └── components


# go_dynamic

my-app/
│
├── backend/                  # Go (Golang) backend
│   ├── cmd/                  # Main applications for this project
│   │   └── server/           # Entry point for API server
│   │       └── main.go
│   ├── internal/             # Private application and library code
│   │   ├── handler/          # HTTP handlers / controllers
│   │   ├── service/          # Business logic
│   │   ├── model/            # Structs, database models
│   │   ├── repository/       # Data access layer (e.g., DB queries)
│   │   ├── middleware/       # Custom middlewares (auth, logging, etc.)
│   │   └── config/           # Configuration handling
│   ├── pkg/                  # Shared libraries (can be used outside project)
│   ├── go.mod
│   └── go.sum
│
├── frontend/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/           # Images, icons, etc.
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Top-level page components
│   │   ├── services/         # API calls (Axios, Fetch)
│   │   ├── hooks/            # Custom React hooks
│   │   ├── context/          # React context providers
│   │   └── App.tsx          # Main React component
│   ├── package.json
│   └── vite.config.js / webpack.config.js
│
├── docker-compose.yml       # Optional Docker setup
├── README.md
└── .gitignore
