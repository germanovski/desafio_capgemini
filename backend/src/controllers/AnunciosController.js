const { Request, Response } = require('express');
const knex = require('../database/connection');
const { KnexTimeoutError } = require('knex');

module.exports = {
    async index(request, response) {
        const anuncios = await knex('anuncios')
                                .join('clientes', 'clientes.id', '=', 'anuncios.cliente_id')
                                .select('anuncios.*', 'clientes.nome as cliente');

        return response.json(anuncios);
    },

    async create(req, res, next){
        try{
            const { nome, dataInicio, dataTermino, investimentoPorDia, clienteId } = req.body;
            
            let data_inicio = dataInicio;
            let data_termino = dataTermino; 
            let investimento_por_dia = investimentoPorDia; 
            let cliente_id = clienteId; 

            await knex('anuncios').insert({
                nome, 
                data_inicio,
                data_termino,
                investimento_por_dia,
                cliente_id
            });

            return res.status(201).send();
            
        }catch(error){
            next(error)
        }
    }
}