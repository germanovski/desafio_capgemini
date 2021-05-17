import React, {useEffect, useState } from 'react';
import { Space } from 'antd';
import { Link } from 'react-router-dom';

import TableCustom from '../../components/TableCustom'

import api from '../../services/api';
import formatValue from '../../utils/formataValor';

export default function Anuncio() {

    const [anuncios, setAnuncios] = useState([]);

    useEffect(() =>{
        async function obterAnuncios(){
            const response = await api.get('/anuncios');
            setAnuncios(response.data);
        }

        obterAnuncios();
    } ,[])

    const columns = [
        {
            title: 'Anuncio',
            dataIndex: 'anuncio',
            key: 'anuncio',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Cliente',
            dataIndex: 'cliente',
            key: 'cliente',
        },
        {
            title: 'Data de Inicio',
            dataIndex: 'dataInicio',
            key: 'dataInicio',
        },
        {
            title: 'Data de Termino',
            dataIndex: 'dataTermino',
            key: 'dataTermino',
        },
        {
            title: 'Investimento por dia',
            dataIndex: 'investimentoDia',
            key: 'investimentoDia',
        },
        {
            title: 'Acões',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <span>Delete</span>
                </Space>
            ),
        },
    ];

    const data = anuncios.map((item) =>({
           key: item.id, 
           anuncio: item.nome,
           cliente: item.cliente,
           dataInicio: item.data_inicio,
           dataTermino: item.data_termino,
           investimentoDia: formatValue(item.investimento_por_dia)
    }))

   
    return (
        <>
            <div className="filters">
                <Link to="/novo-anuncio" className="btn btn-primary">Novo Anuncio</Link>
            </div>
            <TableCustom data={data} columns={columns} />
        </>
    )
}