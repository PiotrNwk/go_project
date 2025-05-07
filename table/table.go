package table

import (
	"html/template"
	"net/http"
)

type Row struct {
	Name  string
	Age   int
	Email string
}

// TableHandler serves the HTML table
func TableHandler(w http.ResponseWriter, r *http.Request) {
	// Sample data for the table
	data := []Row{
		{"Alice", 30, "alice@example.com"},
		{"Bob", 25, "bob@example.com"},
		{"Charlie", 35, "charlie@example.com"},
	}

	// Define the HTML template
	tmpl := `
    <!DOCTYPE html>
    <html>
    <head>
        <title>HTML Table</title>
    </head>
    <body>
        <h1>Users</h1>
        <table border="1">
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
            </tr>
            {{range .}}
            <tr>
                <td>{{.Name}}</td>
                <td>{{.Age}}</td>
                <td>{{.Email}}</td>
            </tr>
            {{end}}
        </table>
    </body>
    </html>
    `

	// Parse and execute the template
	t := template.Must(template.New("table").Parse(tmpl))
	t.Execute(w, data)
}
