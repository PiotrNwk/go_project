package main

import (
	"log"
	"net/http"
	"os"

	"github.com/PiotrNwk/WebDev/tree/main/go/api"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080" // Fallback locally
	}

	http.HandleFunc("/", api.Handler) // your handler here
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
