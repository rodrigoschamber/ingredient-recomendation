import { getDiseasePrompt, getNamePrompt } from "../prompts/prompts.js";
import PromptFacade from "../facade/promptFacade.js";
import StockFacade from "../facade/stockFacade.js";

class ActiveIngredientDirector {
  constructor(builder) {
    this.builder = builder;
  }

  async constructByDisease(disease) {
    const api = new PromptFacade(getDiseasePrompt(disease));
    const response = await api.generateContent();

    return response?.map((item) => {
      let stock = new StockFacade(item?.principio_ativo)
      return this.builder
        .setName(item?.principio_ativo)
        .setMechanism(item?.mecanismo)
        .setDescription(item?.descricao)
        .setAvailability(stock.getAvailability())
        .build();
    });
  }

  async constructByName(name) {
    const api = new PromptFacade(getNamePrompt(name));
    const response = await api.generateContent();

    return response?.map((item) => {
      let stock = new StockFacade(item?.principio_ativo)
      return this.builder
        .setName(item?.principio_ativo)
        .setMechanism(item?.mecanismo)
        .setDescription(item?.descricao)
        .setAvailability(stock.getAvailability())
        .build();
    });
  }
}

export default ActiveIngredientDirector;
