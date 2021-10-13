/// <reference types="cypress" />

describe('', () => {
    it('Sem cadastro e listagem vazia', () => {
        cy.fixture('listagem-vazia').then(data => {
            window.localStorage.setItem('data', JSON.stringify(data))
        })
        cy.visit('https://form-agilizei.netlify.app/listagem.html');
        cy.get('table tbody tr').should('have.length', 0);
    });

    it('Um ou mais cadastros, exibe a listagem de cada registro', () => {
        cy.fixture('listagem-com-itens').then(data => {
            window.localStorage.setItem('data', JSON.stringify(data))
        })
        cy.visit('https://form-agilizei.netlify.app/listagem.html');
        cy.get('table tbody tr').should('have.length', 2);
    });
});