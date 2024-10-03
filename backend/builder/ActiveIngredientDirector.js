import PromptFacade from "../facade/promptFacade.js";
import JsonRepository from "../repository/JsonRepository.js";
import { getDiseasePrompt, getNamePrompt } from "../prompts/prompts.js";

const repository = new JsonRepository("./data/stock.json");

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
        .setAvailability(repository.exists(item?.principio_ativo))
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
        .setAvailability(repository.exists(item?.principio_ativo))
        .build();
    });
  }
}

export default ActiveIngredientDirector;
