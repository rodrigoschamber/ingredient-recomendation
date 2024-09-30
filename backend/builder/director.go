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
    d.builder.SetName()
    d.builder.SetMechanism()
    d.builder.SetDescription()
    d.builder.SetAvailability()
}