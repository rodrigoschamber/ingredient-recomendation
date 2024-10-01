class ActiveIngredientDirector {
  constructor(builder) {
    this.builder = builder;
  }

  constructByDisease(disease) {
    console.log(disease);
    return this.builder
      .setName("Aspirin")
      .setMechanism("Inhibits cyclooxygenase")
      .setDescription("Used to reduce pain, fever, or inflammation.")
      .setAvailability(true)
      .build();
  }

  constructByName(name) {
    console.log(name);
    return this.builder
      .setName("Ibuprofen")
      .setMechanism("Nonsteroidal anti-inflammatory drug (NSAID)")
      .setDescription("Used to reduce fever and treat pain or inflammation.")
      .setAvailability(true)
      .build();
  }
}

export default ActiveIngredientDirector;
