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

    it('Ler usuários', async() => {
        const res = await request(app)
        .get('/api/user/read')
        
        expect(res.status).toBe(404);
        expect(Array.isArray(res.body)).toBe(false);
    });

    it('Atualizar usuários', async() => {
        const res = await request(app)
        .put(`/user/update/${userId}`)
        .send({
            name: 'Teste User Atualizado'
        });

        expect(res.status).toBe(203);
        expect(res.body.db).toHaveProperty('name', 'Teste User Atualizado');
    });

    it('Deve criar uma quadra', async () => {
        const res = await request(app)
            .post('/quadra/create')
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
        expect(res.body).toHaveProperty("message", "criado");
        expect(res.body).toHaveProperty('db');
        quadraId = res.body.db.id;
    });

    it('Deve buscar todas as quadras', async () => {
        const res = await request(app)
            .get('/quadra/read');
            

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(false);
    });

    it('Deve buscar uma quadra pelo nome', async () => {
        const res = await request(app)
            .get(`/quadra/read`)
            

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('db');
    });

    it('Deve buscar uma quadra pelo ID', async () => {
        const res = await request(app)
            .get(`/quadra/show/${quadraId}`)
            

        expect(res.status).toBe(202);
        expect(res.body).toHaveProperty('db.id');
    });

    it('Deve atualizar uma quadra', async () => {
        const res = await request(app)
            .put(`/quadra/update/${quadraId}`)
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

        expect(res.status).toBe(203);
        expect(res.body.db.name).toBe('Quadra Exemplo Atualizada');
    });

    it('Deve retornar um JSON com status 200', async () =>{
        const response = await request(app).get('/quadra/read');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('db');
    });

    let locationid
    it('Deve criar uma quadra', async () => {
        const res = await request(app)
            .post('/location/create')
            .send({
                iduser: userId,
                idcourt: quadraId,
                date: '2025-12-12' 
            });
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('db');
        locationid= res.body.db.id
    });

    it('Atualizar location',async ()=>{
        const res = await request(app)
            .put(`/location/update/${locationid}`)

            .send({
                date: "2025-12-14"
            });

            expect(res.status).toBe(203);
            expect(res.body.db).toHaveProperty("date","2025-12-14")
    });


    it('Deve buscar todos os agendamento',async()=>{
        const res = await request(app)
            .get("/location/read")

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body.db)).toBe(true);
    });

    it('Deve buscar um agentamento pelo id',async()=>{
        const res = await request (app)
            .get(`/location/show/${locationid}`)

            expect(res.status).toBe(202);
            expect(res.body.db).toHaveProperty('iduser','idcourt','date');
    });




    

    let paymentid
    it('Deve criar um payment de cartão', async () => {
        const res = await request(app)
            .post('/payment/create')
            .send({
                date: "2024-12-12",
                iduser: userId ,
                idlocation: locationid,
                cvv: "123",
                numbercard: "265554",
                yearcard: "26",
                monthcard: "10",
                total: 100
            });

            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('db');
            paymentid = res.body.db.id;

    });

    it('Deve buscar um payment pelo ID' , async () =>{
        const res = await request(app)
            .get(`/payment/show/${paymentid}`)
            
        expect(res.status).toBe(202);
        expect(res.body).toHaveProperty('db');
    });

    it('Deve buscar um payment' , async () =>{
        const res = await request(app)
            .get(`/payment/read/`);
            
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('db');
    });

    
    let quadraId;

    it('Deve deletar uma quadra', async () => {
        const res = await request(app)
            .delete(`/quadra/del/${quadraId}`)

        expect(res.status).toBe(201);
    });
    
    it('Deve deletar location', async () => {
            const res = await request(app)
                .delete(`/location/del/${locationid}`)
    
            expect(res.status).toBe(201);
        });
    
    it('Deve deletar um usuário', async () => {
        const res = await request(app)
            .delete(`/user/delete/${userId}`)

        expect(res.status).toBe(404);
    });

    it('Deve deletar um payment', async () => {
        const res = await request(app)
            .delete(`/payment/del/${paymentid}`);

        expect(res.status).toBe(201);
    });

});
//npm test