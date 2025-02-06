const request = require('supertest');
const app = require('../src/app'); // Ajuste o caminho conforme sua estrutura

describe('Testes CRUD para API de Quadras', () => {
    let quadraId;
    let token;

    it('Deve criar uma quadra', async () => {
        const res = await request(app)
            .post('/API_QUADRAFINDER/testes/quadra')
            .send({
                publicplace: 'Rua Exemplo',
                zipcode: '12345-678',
                photos: 'link-da-foto',
                type: 'society',
                name: 'Quadra Exemplo',
                state: 'SP',
                city: 'São Paulo',
                neighborhood: 'Centro',
                preco: 'R$100,00',
                alugado: 'não',
                naoalugado: 'sim'
            });

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('id');
        quadraId = res.body.id;
    });

    it('Deve buscar todas as quadras', async () => {
        const res = await request(app)
            .get('/quadra/read')
            .set('Authorization', `Bearer ${token}`);

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('Deve buscar uma quadra pelo nome', async () => {
        const res = await request(app)
            .get(`/quadra/read?name=Quadra Exemplo`)
            .set('Authorization', `Bearer ${token}`);

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('name', 'Quadra Exemplo');
    });

    it('Deve buscar uma quadra pelo ID', async () => {
        const res = await request(app)
            .get(`/quadra/show/${quadraId}`)
            .set('Authorization', `Bearer ${token}`);

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('name', 'Quadra Exemplo');
    });

    it('Deve atualizar uma quadra', async () => {
        const res = await request(app)
            .put(`/quadra/update/${quadraId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({
                publicplace: 'Rua Atualizada',
                zipcode: '54321-678',
                photos: 'link-da-foto-atualizada',
                type: 'futsal',
                name: 'Quadra Exemplo Atualizada',
                state: 'SP',
                city: 'São Paulo',
                neighborhood: 'Zona Leste',
                preco: 'R$150,00',
                alugado: 'sim',
                naoalugado: 'não'
            });

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('name', 'Quadra Exemplo Atualizada');
    });

    it('Deve deletar uma quadra', async () => {
        const res = await request(app)
            .delete(`/quadra/del/${quadraId}`)
            .set('Authorization', `Bearer ${token}`);

        expect(res.status).toBe(200);
    });
});
