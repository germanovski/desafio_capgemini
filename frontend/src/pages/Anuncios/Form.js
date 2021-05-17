import React, { useEffect, useState } from 'react';

import api from '../../services/api';

export default function Form(props) {
    const [anuncio, setAnuncio] = useState({
        nome: '',
        dataInicio: '',
        dataTermino: '',
        investimentoPorDia: '',
        clienteId: ''
    });

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        async function obterClientes() {
            const response = await api.get('clientes');
            setClientes(response.data);
        }

        obterClientes();
    }, [])

    function handleChange(e) {
        setAnuncio({
            ...anuncio,
            [e.target.name]: e.target.value
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
       
        await api.post('anuncios', anuncio);

        props.history.push('/');
    };

    return (
        <div className="container">
            <h3>Novo Anuncio</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Titulo do Anuncio</label>
                    <input type="text"
                        onChange={handleChange}
                        value={anuncio.titulo}
                        name="nome" />
                </div>
                <div className="form-control">
                    <label>Data de Inicio</label>
                    <input type="date"
                        onChange={handleChange}
                        value={anuncio.dataInicio}
                        name="dataInicio" />
                </div>
                <div className="form-control">
                    <label>Data de Termino</label>
                    <input type="date"
                        onChange={handleChange}
                        value={anuncio.dataTermino}
                        name="dataTermino" />
                </div>
                <div className="form-control">
                    <label>Investimento por dia</label>
                    <input type="text"
                        onChange={handleChange}
                        value={anuncio.investimentoDia}
                        name="investimentoPorDia" />
                </div>
                <div className="form-control">
                    <label>Cliente</label>
                    <select name="clienteId" onChange={handleChange}>
                        <option value="">-- Selecione o cliente --</option>
                        {
                            clientes.map((item) => <option key={item.id} value={item.id}>{item.nome}</option>)
                        }
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
        </div>
    )
}