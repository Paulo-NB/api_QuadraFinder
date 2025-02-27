const request = require('supertest');
const app = require('../src/app'); 
const { describe } = require('./models/location');




    it('Deve criar um usuario',async()=>{
    const res = await request(app)
        .post("/create", clocacao.create_location)
        .send({
            iduser:4,
            idcourt:2,
            date:2025-12-12
        });
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('id');
        userId = res.body.id;
    });


    it('Deve buscar todos os agendamento',async()=>{
        const res = await request(app)
            .get("/read", clocacao.read_location)

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    })

    it('Deve buscar um agentamento pelo id',async()=>{
        const res = await request (app)
        .get("/show/:id", clocacao.show_location)

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('iduser','dcourt','date');
    });

    it('Att',async ()=>{
        const res = await request(app)
        .post("/create", clocacao.create_location)

        .put("/update/:id",clocacao.update_location)
        .send({iduser:'teste user att'});

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty(iduser,'teste user att')
    });

    it('delete',async()=>{
        const res = await request(app)
        .delete("/del/:id", clocacao.delete_location)
        expect(res.status).toBe(200);
        
    })





