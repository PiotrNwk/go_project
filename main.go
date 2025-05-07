package main

import (
	"html/template"
	"net/http"
	"os"

	"github.com/PiotrNwk/WebDev/tree/main/go/table"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Serve the static folder
	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		tmpl := `
<!DOCTYPE html>
<html>
<head>
    <title>Dynamic Table</title>
    <link href="./static/output.css" rel="stylesheet">
</head>
<body class="bg-gray-100 text-gray-800">
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold italic mb-4">Users</h1>
        {{.Table}}
    </div>
</body>
</html>
`
		t := template.Must(template.New("index").Parse(tmpl))
		data := struct {
			Table template.HTML
		}{
			Table: table.GenerateTable(),
		}
		t.Execute(w, data)
	})

	http.ListenAndServe(":"+port, nil)
}
