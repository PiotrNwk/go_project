package main

import (
	"fmt"
	"go_project/osdata"
)

func main() {
	d, err := osdata.GetOsData()
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Printf("Hostname: %s\n", d.Hostname)
	fmt.Printf("OS:       %s", d.OS)
	fmt.Printf("CPUCores: %d\n", d.CPUCores)
}
