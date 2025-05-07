package main

import (
	"net/http"
	"os"

	"github.com/PiotrNwk/WebDev/tree/main/go/table" // Adjust this import if needed
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	http.HandleFunc("/", table.TableHandler)

	http.ListenAndServe(":"+port, nil)
}
