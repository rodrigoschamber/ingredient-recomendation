import ActiveIngredient from './ActiveIngredient.js';

class ActiveIngredientBuilder {
    constructor() {
        this.reset();
    }

    reset() {
        this.name = '';
        this.mechanism = '';
        this.description = '';
        this.availability = false;
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setMechanism(mechanism) {
        this.mechanism = mechanism;
        return this;
    }

    setDescription(description) {
        this.description = description;
        return this;
    }

    setAvailability(availability) {
        this.availability = availability;
        return this;
    }

    build() {
        const activeIngredient = new ActiveIngredient(this.name, this.mechanism, this.description, this.availability);
        this.reset();
        return activeIngredient;
    }
}

export default ActiveIngredientBuilder;