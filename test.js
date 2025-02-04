const   request = require('supertest');
const app = require('./api'); // Importa a aplicação


describe('Testando a API', () => {
    it('Deve retornar um JSON com status 200', async () =>{
        const response = await request(app).get('/user/read');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('list_users');
    });
});

//npx jest