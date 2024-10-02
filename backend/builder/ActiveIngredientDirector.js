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
      .setName(response[0].principio_ativo)
      .setMechanism(response[0].mecanismo)
      .setDescription(response[0].descricao)
      .setAvailability(true)
      .build();
  }

  async constructByName(name) {
    const api = new PromptFacade(getDiseasePrompt(name));
    const response = await api.generateContent();
    console.log(response);
    return this.builder
      .setName(response[0].principio_ativo)
      .setMechanism(response[0].mecanismo)
      .setDescription(response[0].descricao)
      .setAvailability(true)
      .build();
  }
}

export default ActiveIngredientDirector;
