import { getDiseasePrompt, getNamePrompt } from "../prompts/prompts.js";
import PromptFacade from "../facade/promptFacade.js";

class ActiveIngredientDirector {
  constructor(builder) {
    this.builder = builder;
  }

  async constructByDisease(disease) {
    const api = new PromptFacade(getDiseasePrompt(disease));
    const response = await api.generateContent();
    console.log(response);
    return this.builder
      .setName("Aspirin")
      .setMechanism("Inhibits cyclooxygenase")
      .setDescription("Used to reduce pain, fever, or inflammation.")
      .setAvailability(true)
      .build();
  }

  async constructByName(name) {
    const api = new PromptFacade(getDiseasePrompt(name));
    const response = await api.generateContent();
    console.log(response);
    return this.builder
      .setName("Ibuprofen")
      .setMechanism("Nonsteroidal anti-inflammatory drug (NSAID)")
      .setDescription("Used to reduce fever and treat pain or inflammation.")
      .setAvailability(true)
      .build();
  }
}

export default ActiveIngredientDirector;
