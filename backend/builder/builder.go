package builder

type Builder interface {
    SetPartA()
    SetPartB()
    SetPartC()
    GetResult() Product
}