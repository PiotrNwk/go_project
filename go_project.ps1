# Start Go server in a new PowerShell window

Start-Process powershell -ArgumentList "cd C:\Users\piotr\git\go_project; go run .\server\ ." -PassThru | Out-Null

# Wait until port 8080 is listening (adjust as needed)
while (-not (Test-NetConnection -ComputerName localhost -Port 8080).TcpTestSucceeded) {
    Write-Host "Waiting for Go server to start..."
    Start-Sleep -Seconds 2
}

Write-Host "Go process started."

# Start React client in another new PowerShell window
Start-Process powershell -ArgumentList "cd C:\Users\piotr\git\go_project\client; npm run dev" -PassThru | Out-Null

while (-not (Test-NetConnection -ComputerName localhost -Port 5173).TcpTestSucceeded) {
    Write-Host "Waiting for React client to start..."
    Start-Sleep -Seconds 1
}

Write-Host "React process started."
