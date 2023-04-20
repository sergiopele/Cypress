/// <reference types="Cypress" />
const dataJson = require('/Users/sergiopele/Documents/cypressTest/cypress/fixtures/creteUserAPI.json');
const updateUserData = require('/Users/sergiopele/Documents/cypressTest/cypress/fixtures/updateUser.json');

describe('POST user request', () => {
        let accessToken = '07a9fe0d0897dfce0517efd732bcbf3450ef7d29298b77a41aff87c51e4aa277';
        let randomText = '';
        let testEmail = ''
        let userId;
        it('create user', () => {

                var pattern = 'ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnoprstuvwxyz';
                for (var i = 0; i < 10; i++) {
                        randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
                        testEmail = randomText + '@gmail.com';
                }
                // POST call
                cy.request({
                        method: 'POST',
                        url: 'https://gorest.co.in/public/v1/users',
                        headers: {
                                "Authorization": 'Bearer ' + accessToken
                        },
                        body: {
                                "email": testEmail,
                                "name": dataJson.name,
                                "gender": dataJson.gender,
                                "status": dataJson.status
                        }
                }).then((res) => {
                        cy.log(JSON.stringify(res));
                        expect(res.body.data).has.property('email', testEmail);
                        expect(res.status).to.eq(201);
                        expect(res.body.data).has.property('name', dataJson.name);
                        expect(res.body.data).has.property('gender', dataJson.gender);
                        expect(res.body.data).has.property('status', dataJson.status);
                        userId = res.body.data.id;
                }).then((res) => {
                        cy.log('user id is: ' + userId);
                        //GET call
                        cy.request({
                                method: 'GET',
                                url: 'https://gorest.co.in/public/v1/users/' + userId,
                                headers: {
                                        'Authorization': 'Bearer ' + accessToken
                                }
                        }).then((res) => {
                                expect(res.status).to.eq(200);
                                expect(res.body.data).has.property('email', testEmail);
                                expect(res.body.data).has.property('id', userId);
                                expect(res.body.data).has.property('name', dataJson.name);
                        })
                }).then((res) => {
                        cy.request({
                                method: 'PUT',
                                url: 'https://gorest.co.in/public/v1/users/' + userId,
                                headers: {
                                        "Authorization": 'Bearer ' + accessToken
                                },
                                body: {
                                        "email": testEmail,
                                        "name": updateUserData.name,
                                        "gender": updateUserData.gender,
                                        "status": updateUserData.status
                                }
                        }).then((res) => {
                                expect(res.body.data).has.property('name', updateUserData.name);
                                expect(res.body.data).has.property('gender', updateUserData.gender);
                                expect(res.body.data).has.property('status', updateUserData.status);
                                expect(res.status).to.eq(200);
                        })
                })

        })
})