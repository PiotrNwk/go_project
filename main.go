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

	tmpl := template.Must(template.ParseFiles("index.html"))

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
