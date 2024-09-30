package builder

type ConcreteBuilder struct {
    ingredient ActiveIngredient
}

func (b *ConcreteBuilder) SetName() {
    b.ingredient.Name = "Active Ingredient"
}

func (b *ConcreteBuilder) SetMechanism() {
    b.ingredient.Mechanism = "Mechanism"
}

func (b *ConcreteBuilder) SetDescription() {
    b.ingredient.Description = "Description"
}

func (b *ConcreteBuilder) SetAvailability() {
    b.ingredient.Availability = true
}

func (b *ConcreteBuilder) BuildIngredientByDisease() ActiveIngredient {
    return b.ingredient
}

func (b *ConcreteBuilder) BuildIngredientByName() ActiveIngredient {
    return b.ingredient
}