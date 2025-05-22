package table

import (
	"encoding/json"
	"html/template"
	"net/http"
)

type User struct {
	ID       int    `json:"id"`
	Name     string `json:"name"`
	Username string `json:"username"`
	Email    string `json:"email"`
}

// fetchUsers fetches user data from JSONPlaceholder
func fetchUsers() ([]User, error) {
	resp, err := http.Get("https://jsonplaceholder.typicode.com/users")
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	var users []User
	err = json.NewDecoder(resp.Body).Decode(&users)
	if err != nil {
		return nil, err
	}
	return users, nil
}

// ServeUsersPage serves the HTML page with user data
func ServeUsersPage(w http.ResponseWriter, r *http.Request) {
	users, err := fetchUsers()
	if err != nil {
		http.Error(w, "Failed to fetch users", http.StatusInternalServerError)
		return
	}

	tmpl := `
        <table class="table-auto border-collapse border border-gray-400 w-full">
            <thead>
                <tr>
                    <th class="border border-gray-300 px-4 py-2">ID</th>
                    <th class="border border-gray-300 px-4 py-2">Name</th>
                    <th class="border border-gray-300 px-4 py-2">Username</th>
                    <th class="border border-gray-300 px-4 py-2">Email</th>
                </tr>
            </thead>
            <tbody>
                {{range .}}
                <tr>
                    <td class="border border-gray-300 px-4 py-2">{{.ID}}</td>
                    <td class="border border-gray-300 px-4 py-2">{{.Name}}</td>
                    <td class="border border-gray-300 px-4 py-2">{{.Username}}</td>
                    <td class="border border-gray-300 px-4 py-2">{{.Email}}</td>
                </tr>
                {{end}}
            </tbody>
        </table>
`
	t := template.Must(template.New("index").Parse(tmpl))
	t.Execute(w, users)
}
