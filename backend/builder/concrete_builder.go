package builder

type ConcreteBuilder struct {
    product Product
}

func (b *ConcreteBuilder) SetPartA() {
    b.product.PartA = "PartA"
}

func (b *ConcreteBuilder) SetPartB() {
    b.product.PartB = "PartB"
}

func (b *ConcreteBuilder) SetPartC() {
    b.product.PartC = "PartC"
}

func (b *ConcreteBuilder) GetResult() Product {
    return b.product
}