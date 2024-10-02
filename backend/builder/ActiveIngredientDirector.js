import { getDiseasePrompt, getNamePrompt } from "../prompts/prompts.js";
import PromptFacade from "../facade/promptFacade.js";

class ActiveIngredientDirector {
  constructor(builder) {
    this.builder = builder;
  }

  async constructByDisease(disease) {
    const api = new PromptFacade(getDiseasePrompt(disease));
    const response = await api.generateContent();

    return response?.map((item) => {
      return this.builder
        .setName(item?.principio_ativo)
        .setMechanism(item?.mecanismo)
        .setDescription(item?.descricao)
        .setAvailability(true)
        .build();
    });
  }

  async constructByName(name) {
    const api = new PromptFacade(getNamePrompt(name));
    const response = await api.generateContent();

    return response?.map((item) => {
      return this.builder
        .setName(item?.principio_ativo)
        .setMechanism(item?.mecanismo)
        .setDescription(item?.descricao)
        .setAvailability(true)
        .build();
    });
  }
}

export default ActiveIngredientDirector;
