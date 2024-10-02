export const getDiseasePrompt = (payload) => {
  return {
    text: `Informar os princípios ativos para ${payload} e classificar quanto ao mecanismo de ação em formato json.
          descrição:
          mecanismo:
          principio ativo:`,
  };
};

export const getNamePrompt = (payload) => {
  return {
    text: `Informar os princípios ativos com o mesmo mecanismo de ação de ${payload} em formato json.
          descrição:
          mecanismo:
          principio ativo:`,
  };
};