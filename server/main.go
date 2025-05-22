package main

import (
	"html/template"
	"net/http"
	"os"

	"go_project/table"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	fs := http.FileServer(http.Dir("./server/dist"))
	http.Handle("/dist/", http.StripPrefix("/dist/", fs))

	tmpl := template.Must(template.ParseFiles("./server/dist/index.html"))

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
