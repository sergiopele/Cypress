describe('GET api for Rest', () =>{
        it('GET call - motorbike', () => {
             cy.request('https://reqres.in/api/users?per_page=12').then((res) => {
                expect(res.status).eq(200);
                expect(res.body.data).to.have.length(12);
                expect(res.body.per_page).eq(12);
                expect(res.body.data[6]).has.property('first_name', 'Michael');
                cy.log(res.body.data)
             })   
        })
})