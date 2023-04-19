/// <reference types="Cypress" />
describe('GET call wit token', () => {
        it('GET call with Bearer token', () => {
                cy.request({
                        method: 'GET',
                        url: 'https://gorest.co.in/public/v2/users',
                        headers: {
                                'authorization': 'Bearer 07a9fe0d0897dfce0517efd732bcbf3450ef7d29298b77a41aff87c51e4aa277'
                        }
                }).then((res) => {
                        expect(res.status).eq(200);
                        expect(res.headers).contains({
                                'content-type': 'application/json; charset=utf-8',
                                'server': 'cloudflare',
                                'vary': 'Origin'
                        })
                })
        })
        it('GET call to verify body contains keys "id, post_id, name, email, body"', () => {
                cy.request({
                        method: 'Get',
                        url: 'https://gorest.co.in/public/v2/comments',
                        headers: {
                                'authorization': 'Bearer 07a9fe0d0897dfce0517efd732bcbf3450ef7d29298b77a41aff87c51e4aa277'
                        }
                }).then((res) => {
                                expect(res.body.id).contain('id') 
                })
        })
})