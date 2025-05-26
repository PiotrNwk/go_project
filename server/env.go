package main

import (
	"os"
)

var isDev = os.Getenv("APP_ENV") == "development"

func getScriptTag() string {
	if isDev {
		return `<script type="module" src="http://localhost:5173/@vite/client"></script>
<script type="module" src="http://localhost:5173/src/App.jsx"></script>`
	}
	return `<script type="module" src="/static/assets/index.js"></script>`
}
