package table

import (
	"bytes"
	"html/template"
)

type Row struct {
	Name  string
	Age   int
	Email string
}

func GenerateTable() template.HTML {
	data := []Row{
		{"Alice", 30, "alice@example.com"},
		{"Bob", 25, "bob@example.com"},
		{"Charlie", 35, "charlie@example.com"},
	}

	tmpl := `
        <table class="table-auto border-collapse border border-gray-300 w-full bg-white shadow-md rounded-lg">
            <thead>
                <tr class="bg-gray-200">
                    <th class="border border-gray-300 px-4 py-2 text-left">Name</th>
                    <th class="border border-gray-300 px-4 py-2 text-left">Age</th>
                    <th class="border border-gray-300 px-4 py-2 text-left">Email</th>
                </tr>
            </thead>
            <tbody>
                {{range .}}
                <tr class="hover:bg-gray-100">
                    <td class="border border-gray-300 px-4 py-2">{{.Name}}</td>
                    <td class="border border-gray-300 px-4 py-2">{{.Age}}</td>
                    <td class="border border-gray-300 px-4 py-2">{{.Email}}</td>
                </tr>
                {{end}}
            </tbody>
        </table>
    `

	t := template.Must(template.New("table").Parse(tmpl))
	var buf bytes.Buffer
	err := t.Execute(&buf, data)
	if err != nil {
		return ""
	}
	return template.HTML(buf.String())
}
