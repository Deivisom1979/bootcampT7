/// <reference types="cypress" />

var Chance = require('chance'); // Load Chance
var chance = new Chance(); // Instantiate Chance so it can be used

describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
        cy.visit('https://form-agilizei.netlify.app/')
        
        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())

        cy.get('input[value=m]').check()

        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Dormir')
        
        cy.get('select#countries').select('Dinamarca', {force: true})
        cy.get('select#years').select('1979', {force: true})
        cy.get('select#months').select('Abril', {force: true})
        cy.get('select#days').select('6', {force: true})

        cy.get('input#firstpassword').type('Alunos@2021')
        cy.get('input#secondpassword').type('Alunos@2021')
        
        cy.contains('Finalizar cadastro').click()

        cy.url().should('contain', 'listagem')
    });
});