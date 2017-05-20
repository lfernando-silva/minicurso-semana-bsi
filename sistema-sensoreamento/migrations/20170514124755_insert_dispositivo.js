const getId = (results, descritor) => results.filter(r => r.descritor === descritor)[0].id

exports.up = function (knex, Promise) {
    return knex('categoria_dispositivo')
        .select(['id', 'descritor'])
        .then(results => {
            let temperaturaId = getId(results, 'temperatura')
            let luminosidadeId = getId(results, 'luminosidade')
            let tensaoId = getId(results, 'tensao')
            let velocidadeId = getId(results, 'velocidade')
            let posicaoId = getId(results, 'posicao')
            let presencaId = getId(results, 'presenca')
            return [
                { created_at: new Date(), updated_at: new Date(), deactivated_at: null, nome: 'Temperatura do Alto Forno', categoria_dispositivo_id: temperaturaId },
                { created_at: new Date(), updated_at: new Date(), deactivated_at: null, nome: 'Temperatura do Painel Solar', categoria_dispositivo_id: temperaturaId },
                { created_at: new Date(), updated_at: new Date(), deactivated_at: null, nome: 'Luminosidade Externa 1', categoria_dispositivo_id: luminosidadeId },
                { created_at: new Date(), updated_at: new Date(), deactivated_at: null, nome: 'Luminosidade Recepção', categoria_dispositivo_id: luminosidadeId },
                { created_at: new Date(), updated_at: new Date(), deactivated_at: null, nome: 'Tensão das Baterias do Gerador 7', categoria_dispositivo_id: tensaoId },
                { created_at: new Date(), updated_at: new Date(), deactivated_at: null, nome: 'Tensão do Painel Solar', categoria_dispositivo_id: tensaoId },
                { created_at: new Date(), updated_at: new Date(), deactivated_at: null, nome: 'Velocidade do Vento Torre 1', categoria_dispositivo_id: velocidadeId },
                { created_at: new Date(), updated_at: new Date(), deactivated_at: null, nome: 'Velocidade do Vento Torre 2', categoria_dispositivo_id: velocidadeId },
                { created_at: new Date(), updated_at: new Date(), deactivated_at: null, nome: 'Presença Setor de Equipamento', categoria_dispositivo_id: presencaId },
                { created_at: new Date(), updated_at: new Date(), deactivated_at: null, nome: 'Antifurto Armazém', categoria_dispositivo_id: presencaId },
                { created_at: new Date(), updated_at: new Date(), deactivated_at: null, nome: 'Geolocalização Drone A1707', categoria_dispositivo_id: posicaoId },
                { created_at: new Date(), updated_at: new Date(), deactivated_at: null, nome: 'Geolocalização Drone 1708', categoria_dispositivo_id: posicaoId }
            ]
        }).then(inserts => {
            return knex('dispositivo').insert(inserts)
        })
};

exports.down = function (knex, Promise) {
    return knex('dispositivo').del()
};


