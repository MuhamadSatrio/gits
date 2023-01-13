package main

import "fmt"

func removeDuplicates(arr []int) []int {
    // menyimpan hasil array yang sudah dihilangkan duplikasinya
    var result []int
    // menyimpan data yang sudah di proses
    var seen = make(map[int]bool)

    for _, val := range arr {
        // jika data belum di proses, maka data akan di tambahkan ke result dan di mark sebagai sudah di proses
        if _, ok := seen[val]; !ok {
            seen[val] = true
            result = append(result, val)
        }
    }

    return result
}

func main() {
    var ranking int

	var m int
    fmt.Print("Masukkan jumlah nilai semua peserta: ")
    fmt.Scan(&m)

    // Deklarasi array dengan jumlah elemen yang sesuai dengan input user
    var rankingArray []int
    for i := 0; i < m; i++ {
        var y int
        fmt.Print("Masukkan nilai seluruh peserta: ")
        fmt.Scan(&y)
        rankingArray = append(rankingArray, y)
    }

	rankingArray = removeDuplicates(rankingArray)

	var n int
    fmt.Print("Masukkan jumlah nilai user/gits: ")
    fmt.Scan(&n)

    // Deklarasi array dengan jumlah elemen yang sesuai dengan input user
    var inputArray []int
    for i := 0; i < n; i++ {
        var x int
        fmt.Print("Masukkan nilai user/gits: ")
        fmt.Scan(&x)
        inputArray = append(inputArray, x)
    }

    for _, inputValue := range inputArray {
        ranking = 1
        for _, rankingValue := range rankingArray {
            if inputValue < rankingValue  {
				if inputValue == rankingValue {
					ranking--
				}
				ranking ++
            }
        }
        fmt.Println("Peringkat dari nilai ", inputValue, " adalah ", ranking)
    }
}