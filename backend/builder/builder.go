package builder

type Builder interface {
    SetName()
    SetMechanism()
    SetDescription()
    SetAvailability()
    BuildIngredientByDisease() ActiveIngredient
    BuildIngredientByName() ActiveIngredient
}