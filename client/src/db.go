package main

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

var db *sql.DB

func initDB() {
	var err error
	db, err = sql.Open("sqlite3", "./data.db")
	if err != nil {
		log.Fatal(err)
	}

	// Create a table if it doesn't exist
	_, err = db.Exec(`CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY, content TEXT)`)
	if err != nil {
		log.Fatal(err)
	}
}
