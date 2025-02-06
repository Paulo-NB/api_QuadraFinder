const request = require('supertest');
const app = require('./api'); // Importa a aplicação


describe('Testando a API', () => {
    it('Deve retornar um JSON com status 200', async () =>{
        const response = await request(app).get('/location/read');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('db');
    });

    let userId;

    it('Deve criar um usuário', async () => {
        const res = await request(app)
            .post(`/user/create/`)
            .send({
                name:"tese", 
                pass:"Senac@123",
                cpf: "553536732",
                email: "senac@gmail.com",
                phone: "16 992823571",
                type: "admin"
            })

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('db');
        userId = res.body.db.id
    });

    let locationid
    let paymentid
    it('Deve criar um payment', async () => {
        const res = await request(app)
            .post('/payment/create')
            .send({
                date: "2024-12-12",
                iduser: userId ,
                idlocation: locationid,
                cvv: "123",
                numbercard: "265554",
                yearcard: "26",
                monthcard: "10" 
            });

            expect(res.status).toBe(201);
            expect(res.body).toHaveProperty('payment');
            paymentid = res.body.payment.id;

    });

    it('Deve buscar um usúario pelo ID' , async () =>{
        const res = await request(app)
            .get(`/payment/show/${paymentid}`)
            
        expect(res.status).toBe(202);
        expect(res.body).toHaveProperty('db');
    });
    it('Deve retornar um JSON com status 200', async () =>{
        const response = await request(app).get('/quadra/read');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('db');
    });
});


    it('Deve deletar um usúario', async () => {
        const res = await request(app)
            .delete(`/payment/del/${paymentid}`)

        expect(res.status).toBe(201);
    })



});
//npm test