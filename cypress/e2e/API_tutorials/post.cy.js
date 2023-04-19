/// <reference types="Cypress" />

describe('POST user request', () => {
        let accessToken = '07a9fe0d0897dfce0517efd732bcbf3450ef7d29298b77a41aff87c51e4aa277';
        let randomText = '';
        let testEmail = ''
        it('create user', () => {

                var pattern = 'ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnoprstuvwxyz';
                for (var i = 0; i < 10; i++) {
                        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
                        testEmail = randomText + '@gmail.com';
                }
                cy.request({
                        method: 'POST',
                        url: 'https://gorest.co.in/public/v1/users',
                        headers: {
                                "Authorization": 'Bearer ' + accessToken
                        },
                        body: {
                                "email": testEmail,
                                "name": "Jack",
                                "gender": "male",
                                "status": "active"
                        }
                }).then((res) => {
                        cy.log(JSON.stringify(res));
                        expect(res.body.data).has.property('email', testEmail);
                        expect(res.status).to.eq(201);
                        expect(res.body.data).has.property('name', 'Jack');
                })

        })
})