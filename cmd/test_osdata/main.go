package main

import (
	"fmt"
	"go_project/osdata"
	"go_project/setup"
	"log"
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

	var i string
	i, err = setup.WslInstall("FedoraLinux-44")
	fmt.Println(i)

	err = setup.WslRun("FedoraLinux-44")
	if err != nil {
		log.Fatal(err)
	}
}
