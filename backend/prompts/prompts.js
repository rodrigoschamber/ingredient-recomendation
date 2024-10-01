export const getPrompt = (payload) => {
  return {
    text: `Informar os princípios ativos para ${payload} e classificar quanto ao mecanismo de ação em formato json.
          descrição:
          mecanismo:
          principio ativo:`,
  };
};