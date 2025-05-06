package main

import (
    "net/http"
    "github.com/PiotrNwk/WebDev/go/api" // Adjust this import if needed
)

func main() {
    // Serve static files from the "static" directory
    http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))

    // Route root URL to your handler
    http.HandleFunc("/", api.Handler)

    // Start the web server
    http.ListenAndServe(":8080", nil)
}