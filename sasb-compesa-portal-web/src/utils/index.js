export const filtrarBarragens = (barragens, busca, risco, dpa) => {
  let barragensFiltradas = filtrarBarragensPeloNome(barragens, busca);
  barragensFiltradas = filtrarBarragensPeloRisco(barragensFiltradas, risco);
  return filtrarBarragensPeloDpa(barragensFiltradas, dpa);
};

export const filtrarBarragensPeloNome = (barragens, busca) => {
  if (!busca) {
    return barragens;
  }

  const buscaLowerCase = busca.toLowerCase();

  const regex = new RegExp(buscaLowerCase, "i");
  return barragens.filter((barragem) => regex.test(barragem.nome));
};

export const filtrarBarragensPeloRisco = (barragens, risco) => {
  const riscoLowerCase = risco.toLowerCase();

  if (!riscoLowerCase || riscoLowerCase === "todos") {
    return barragens;
  }

  const regex = new RegExp(riscoLowerCase, "i");
  return barragens.filter((barragem) =>
    regex.test(barragem.seguranca?.classificacaoDeRisco)
  );
};

export const filtrarBarragensPeloDpa = (barragens, dpa) => {
  const dpaLowerCase = dpa.toLowerCase();

  if (!dpaLowerCase || dpaLowerCase === "todos") {
    return barragens;
  }

  const regex = new RegExp(dpaLowerCase, "i");
  return barragens.filter((barragem) =>
    regex.test(barragem.seguranca?.danoPotencialAssociado)
  );
};

export const aplicarEstilo = (info) => {
  const infoLowerCase = info.toLowerCase();

  if (infoLowerCase === "em dia" || infoLowerCase === "entregue") {
    return { color: "#078104", fontWeight: "bold" };
  } else if (infoLowerCase === "a fazer" || infoLowerCase === "pendente") {
    return { color: "#992020", fontWeight: "bold" };
  } else {
    return { color: "#979A00", fontWeight: "bold" };
  }
};

export const retornarStatus = (info, data) => {
  const infoLowerCase = info.toLowerCase();

  if (infoLowerCase === "entregue") {
    return (
      <>
        <span style={aplicarEstilo(info)}>{info}</span> no dia <b>{data}</b>
      </>
    );
  } else {
    return <span style={aplicarEstilo(info)}>{info}</span>;
  }
};
