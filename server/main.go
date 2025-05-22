package main

import (
	"html/template"
	"net/http"
	"os"

	"go_project/server/table"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Serve the static folder
	fs := http.FileServer(http.Dir("./client/dist"))
	http.Handle("/", fs)

	tmpl := template.Must(template.ParseFiles("./client/dist/index.html"))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		data := struct {
			Title string
			Table template.HTML
		}{
			Title: "Dynamic Table Example",
			Table: table.GenerateTable(),
		}
		tmpl.Execute(w, data)
	})

	http.ListenAndServe(":"+port, nil)
}
