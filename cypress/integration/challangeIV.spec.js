/// <reference types="cypress" />

var Chance = require('chance'); // Load Chance
var chance = new Chance(); // Instantiate Chance so it can be used

describe('Automation Practice - Sign in', () => {
    /*
    Cenário #1
        1) Acessar o site e clicar no link "Sign in"
        2) Informar um e-mail válido para criar uma conta
        3) Preencher o formulário com dados válidos aleatórios
        4) Concluir o cadastro com sucesso
    */
    it('Cenário 01', () => {
        //Acessar o site e clicar no link "Sign in"
        cy.visit('http://automationpractice.com/')
        cy.contains('Sign in').click()

        //Informar um e-mail válido para criar uma conta
        cy.get('input[name=email_create]').type(chance.email())
        cy.get('button[name=SubmitCreate]').click()

        //Preencher o formulário com dados válidos aleatórios
        /* PERSONAL INFORMATION */
        cy.get('input[type=radio]').first().check()
        cy.get('input[name=customer_firstname]').type(chance.first())
        cy.get('input[name=customer_lastname]').type(chance.last())
        cy.get('input#passwd').type('DesafioIV@2021')
        cy.get('select#days').select('6', {force: true})
        cy.get('select#months').select('April', {force: true})
        cy.get('select#years').select('1979', {force: true})
        cy.get('input#newsletter').check('1')
        cy.get('input#optin').check('1')

        /* ADDRESS INFORMATION */
    });
});