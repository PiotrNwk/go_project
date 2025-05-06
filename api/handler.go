// filepath: api/main.go
package api

import (
	"html/template"
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles("index.html"))
	data := map[string]string{"Title": "Hello from Go!"}
	tmpl.Execute(w, data)
}
