package main

import (
	"fmt"

	"backend/builder"
)

func main() {
    concreteBuilder := &builder.ConcreteBuilder{}
    director := builder.NewDirector(concreteBuilder)
    director.Construct()
    product := concreteBuilder.GetResult()
    fmt.Printf("Product: %+v\n", product)
}