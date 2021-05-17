const knex = require('../database/connection');

module.exports = {
    async index(request, response) {
        const clientes = await knex('clientes').select('*');

        return response.json(clientes);
    },

    async create(req, res, next){
        try{
            const { nome, email } = req.body;

            await knex('clientes').insert({
                nome, 
                email
            });

            return res.status(201).send();
            
        }catch(error){
            next(error)
        }
    }
}