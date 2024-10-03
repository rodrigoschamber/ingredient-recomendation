export const getIngredientByDisease = (payload) => {
  return {
    text: `Informar os princípios ativos para ${payload} e classificar quanto ao mecanismo de ação em formato json.
          descrição:
          mecanismo:
          principio ativo:`,
  };
};

export const getIngredientList = (payload) => {
  return {
    text: `Listar os princípios ativos para o tratamento da ${payload} com uma descrição e mecanismo de ação em formato json.
          descrição:
          mecanismo:
          principio ativo:`,
  };
};

export const getIngredientByName = (payload) => {
  return {
    text: `Informar os princípios ativos com o mesmo mecanismo de ação de ${payload} em formato json.
          descrição:
          mecanismo:
          principio ativo:`,
  };
};
