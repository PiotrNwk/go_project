## osdata docs

branch: 
```
package-os-related-data
```

```
http://localhost:8080/osdata
```
```
Invoke-WebRequest http://localhost:8080/osdata
```

Test new package separately from main application
cmd/test_osdata/main.go
```
func main() {
    d, err := osdata.GetOsData()
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Printf("%+v\n", d)
}
```

Changed ifDev

Added client/osdata.html
