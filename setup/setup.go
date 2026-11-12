package setup

import (
	"fmt"
	"os"
	"os/exec"
	"strings"

	"golang.org/x/text/encoding/unicode"
)

func WslInstall(distro string) (string, error) {
	installed, err := exec.Command("wsl.exe", "--list", "--verbose").Output()

	if err != nil {
		return "", fmt.Errorf("installed has caused an error: %w", err)
	}

	decoder := unicode.UTF16(unicode.LittleEndian, unicode.UseBOM).NewDecoder()
	decoded, err := decoder.Bytes(installed)

	if err != nil {
		return "", fmt.Errorf("decoded has caused an error: %w", err)
	}

	if strings.Contains(string(decoded), distro) {
		return fmt.Sprintf("Wsl Distro is already installed: %s", distro), nil
	}

	cmd := exec.Command("wsl.exe", "--install", distro)
	cmd.Stdout = os.Stdout // Display cmd output to console
	cmd.Stderr = os.Stderr
	err = cmd.Run()

	if err != nil {
		return "", fmt.Errorf("WslInstall has caused an error: %w", err)
	}
	return "", nil
}

func WslRun(distro string) error {
	err := exec.Command("wsl.exe", "--list", "--running").Run()

	if err != nil {
		fmt.Println("No running WSL instances, starting...")
	}

	err = exec.Command("wsl.exe", "-d", distro).Run()

	if err != nil {
		return fmt.Errorf("WSL Run has caused an error: %w", err)
	}

	fmt.Printf("WSL %s started successfully", distro)

	return nil
}
