package osdata

import (
	"fmt"
	"os"
	"os/exec"
)

type MainInfo struct {
	Hostname string
	OS       string
	CPUCores int
}

func GetOsData() (MainInfo, error) {
	hostname, err := os.Hostname()
	out, err := exec.Command("powershell", "-Command", "(Get-WmiObject Win32_OperatingSystem).Caption").Output()

	d := MainInfo{
		Hostname: hostname,
		OS:       string(out),
		CPUCores: 8,
	}

	if err != nil {
		return MainInfo{}, fmt.Errorf("GetOsData has caused an error: %w", err)
	}
	return d, nil
}
