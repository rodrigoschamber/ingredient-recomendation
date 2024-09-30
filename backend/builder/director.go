package builder

type Director struct {
    builder Builder
}

func NewDirector(b Builder) *Director {
    return &Director{
        builder: b,
    }
}

func (d *Director) Construct() {
    d.builder.SetPartA()
    d.builder.SetPartB()
    d.builder.SetPartC()
}