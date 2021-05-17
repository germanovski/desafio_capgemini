const knex = require("../database/connection");

class Calculadora {
  calculaViews(investimento) {
    const totalViews = investimento * 30;
    return totalViews;
  }

  calculaQtdCliques(views) {
    return views * 0.12;
  }

  calculaQtdCompartilhamento(clicks) {
    return clicks * 0.15;
  }

  calculaTotalPessoasCompartilharam(view) {
    return calculaQtdCompartilhamento(calculaQtdCliques(view));
  }

  contabilizaTotalViews(totalViews) {
    let totalCompartilhamentos;
    let aux = totalViews;
    let totalViewGerada = 0;

    for (index = 0; index < 4; index++) {
      totalCompartilhamentos = calculaTotalPessoasCompartilharam(aux);
      totalViewGerada = totalCompartilhamentos * 40;
      aux = totalViewGerada;
      totalViews += aux;
    }

    return totalViews;
  }

  consolidarTotalViews(investimento) {
    const views = calculaViews(investimento);
    // Double qtdPessoasCompartilharam = calculaTotalPessoasCompartilharam(views);

    views += contabilizaTotalViews(views);

    return round(views);
  }
}

const calc = new Calculadora()

module.exports = {
    
  async index(request, response) {
    const { cliente_id, data_inicio, data_termino } = request.params;

    const anuncios = await knex("anuncios")
      .where({ cliente_id })
      .join("clientes", "clientes.id", "=", "anuncios.cliente_id")
      .select("anuncios.*", "clientes.nome as cliente");

    //AQUI VC VAI PRECISAR PECORRER OS ANUNCIOS E APLICAR O ALGORITMO EM CIMA DE CADA UM
    console.log(anuncios);
    anuncios.map(() => calc.conso)
    calc.consolidarTotalViews(anuncios.investimento);
    return response.json(anuncios);
  },
};
