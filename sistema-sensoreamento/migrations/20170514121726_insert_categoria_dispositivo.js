
exports.up = function(knex, Promise) {
    let inserts = [
        {created_at: new Date(), updated_at: new Date(), deactivated_at: null, descritor: 'temperatura', descricao: 'Temperatura', unidade:'C'},
        {created_at: new Date(), updated_at: new Date(), deactivated_at: null, descritor: 'tensao', descricao: 'Tensão', unidade:'V'},
        {created_at: new Date(), updated_at: new Date(), deactivated_at: null, descritor: 'luminosidade', descricao: 'Luminosidade', unidade:'Cd'},
        {created_at: new Date(), updated_at: new Date(), deactivated_at: null, descritor: 'velocidade', descricao: 'Velocidade', unidade:'m/s'},
        {created_at: new Date(), updated_at: new Date(), deactivated_at: null, descritor: 'posicao', descricao: 'Posição', unidade:'lat,long'},
        {created_at: new Date(), updated_at: new Date(), deactivated_at: null, descritor: 'presenca', descricao: 'Presença', unidade:'boolean'},
    ]

    return knex('categoria_dispositivo').insert(inserts)
};

exports.down = function(knex, Promise) {
  return knex('categoria_dispositivo').del()
};
