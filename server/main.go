package main

import (
	"fmt"
	"html/template"
	"net/http"
	"os"

	"go_project/table"
)

func main() {
	dir, _ := os.Getwd()
	fmt.Println("Current working directory:", dir)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	if !isDev {
		fs := http.FileServer(http.Dir("./server/dist"))
		http.Handle("/dist/", http.StripPrefix("/dist/", fs))
		http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("./server/dist/assets"))))
	}

	// Use correct template based on environment
	var tmpl *template.Template
	if isDev {
		tmpl = template.Must(template.ParseFiles("./client/index.html"))
	} else {
		tmpl = template.Must(template.ParseFiles("./server/dist/index.html"))
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		data := struct {
			Title  string
			Script template.HTML
			Table  template.HTML
		}{
			Title:  "Dynamic Table Example",
			Script: template.HTML(getScriptTag()),
			Table:  table.GenerateTable(),
		}
		err := tmpl.Execute(w, data)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})

	http.HandleFunc("/api/hello", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
		w.Header().Set("Content-Type", "text/plain")
		w.Write([]byte("Hello from Go!"))
	})

	http.ListenAndServe(":"+port, nil)
}
