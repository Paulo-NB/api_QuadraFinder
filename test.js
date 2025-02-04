const request = require('supertest');
const app = require('./api'); // Importa a aplicação


describe('Testando a API', () => {
    it('Deve retornar um JSON com status 200', async () =>{
        const response = await request(app).get('/location/read');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('db');
    });
    it('Deve retornar um JSON com status 200', async () =>{
        const response = await request(app).get('/location/read');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('db');
    });
});

//npm test