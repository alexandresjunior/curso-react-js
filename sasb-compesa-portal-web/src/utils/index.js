export const filtrarBarragens = (barragens, busca, risco, dpa) => {
  let barragensFiltradas = filtrarBarragensPeloNome(barragens, busca);
  barragensFiltradas = filtrarBarragensPeloRisco(barragensFiltradas, risco);
  return filtrarBarragensPeloDpa(barragensFiltradas, dpa);
};

export const filtrarBarragensPeloNome = (barragens, busca) => {
  if (!busca) {
    return barragens;
  }

  const regex = new RegExp(busca, "i");
  return barragens.filter((barragem) => regex.test(barragem.nome));
};

export const filtrarBarragensPeloRisco = (barragens, risco) => {
  if (!risco || risco === "Todos") {
    return barragens;
  }

  const regex = new RegExp(risco, "i");
  return barragens.filter((barragem) =>
    regex.test(barragem.seguranca?.classificacaoDeRisco)
  );
};

export const filtrarBarragensPeloDpa = (barragens, dpa) => {
  if (!dpa || dpa === "Todos") {
    return barragens;
  }

  const regex = new RegExp(dpa, "i");
  return barragens.filter((barragem) =>
    regex.test(barragem.seguranca?.danoPotencialAssociado)
  );
};
