package main

import (
    "fmt"
)

func main() {
    var n int
    fmt.Print("Masukkan nilai n: ")
    fmt.Scan(&n)
    var hasil int
	fmt.Printf("1")
    for i := 1; i < n; i++ {
        hasil = (i * (i + 1) / 2 ) + 1
        fmt.Printf("-%d", hasil)
    }
    fmt.Print("\n")
}


