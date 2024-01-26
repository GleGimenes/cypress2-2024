/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

describe('Exercicio - Testes End-to-end - Fluxo de pedido', () => {


    beforeEach(() => {
        cy.visit('minha-conta')

    });

    // afterEach(() => {
    //cy.screenshot()
    //});

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta - Fazendo Login ao final da compra', () => {
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.product-block')
            .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type('2')
        cy.get('.single_add_to_cart_button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()

        cy.get('.product-block').first().click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type('2')
        cy.get('.single_add_to_cart_button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()

        cy.get('.product-block')
            .contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type('2')
        cy.get('.single_add_to_cart_button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()

        cy.get('.product-block').eq(4).click()
        cy.get('.button-variable-item-36').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type('2')
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()

        cy.get('.page-title').should('contain', 'Carrinho')
        cy.get('h2').should('contain', 'Total')

        cy.get('.checkout-button').click()
        cy.wait(300);
        cy.get('#payment_method_cod').check()
        cy.wait(200);
        cy.get('#terms').click();
        cy.wait(200);
        cy.get('#place_order').click()


        cy.get('.showlogin').click()
        //cy.get('#username').type(perfil.usuario)
        //cy.get('#password').type(perfil.senha)
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, { log: false})
        })

        cy.get('.woocommerce-button').click()
        cy.wait(300);
        cy.get('#terms').click()
        cy.wait(200);
        cy.get('#place_order').click()

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });
}); 
