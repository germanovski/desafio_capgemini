import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import TableCustom from '../../components/TableCustom';

export default function Relatorio() {

  const [clientes, setClientes] = useState([]);
  const [anuncios, setAnuncios] = useState([]);

  const [filtros, setFiltros] = useState({
    clienteId: '',
    dataInicio: '',
    dataTermino: '',
  })

  useEffect(() => {
    async function obterClientes() {
      const response = await api.get('/clientes');
      setClientes(response.data);
    }

    async function obterRelatorio(){
      const response = await api.get('/relatorio/1');
      setAnuncios(response.data);
    }

    obterClientes();
    obterRelatorio();
  }, [anuncios])

  const columns = [
    {
      title: 'Anuncio',
      dataIndex: 'anuncio',
      key: 'anuncio',
    },
    {
      title: 'Valor Investido',
      dataIndex: 'valorInvestido',
      key: 'valorInvestido',
    },
    {
      title: 'Qtd Máxima de Visualização',
      dataIndex: 'qtdVisualizacao',
      key: 'qtdVisualizacao',
    },
    {
      title: 'Qtd Máxima de Cliques',
      dataIndex: 'qtdCliques',
      key: 'qtdCliques',
    },
    {
      title: 'Qtd Máxima de Compartilhamentos',
      dataIndex: 'qtdCompartilhamentos',
      key: 'qtdCompartilhamentos',
    },
  ];

  const data = (anuncios || []).map((item) => ({
    key: item.id,
    anuncio: item.nome,
    valorInvestido: item.investimento_por_dia,
    qtdVisualizacao: 100,
    qtdCliques: 100,
    qtdCompartilhamentos: 100
  }));

  function handleChange(e) {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value
    });
  }

  async function handleFilter() {
    const response = api.get(`relatorio/${filtros.clienteId}`);
    setAnuncios(response.data)
  }

  return (
    <>
      <div className="filters">
        <select name="clienteId" onChange={handleChange}>
          <option>-- Selecione um cliente --</option>
          {
            clientes.map((item) => <option key={item.id} value={item.id}>{item.nome}</option>)
          }
        </select>

        <input placeholder="Data de Inicio" type="date" name="dataInicio" onChange={handleChange} />
        <input placeholder="Data de Termino" type="date" name="dataFim" onChange={handleChange} />
        <button className="btn btn-primary" onClick={handleFilter}>Filtrar</button>
      </div>
      <TableCustom data={data} columns={columns} />
    </>
  )
}