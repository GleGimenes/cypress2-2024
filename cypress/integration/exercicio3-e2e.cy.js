/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

describe('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

});

beforeEach(() => { //Login usando Fixture
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados => {
        cy.login(dados.usuario, dados.senha)
    })

});

// afterEach(() => {
//cy.screenshot()
//});

it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => { //Adicionado produtos usando comandos customizados
   cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.addProdutos(5, '36', 'Red', '1')
    cy.get('.single_add_to_cart_button').click()
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.addProdutos(1, 'XL', 'Yellow', '1')
    cy.get('.woocommerce-message > .button').click()
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.addProdutos(0, 'L', 'Green', '1')
    cy.get('.single_add_to_cart_button').click()
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.addProdutos(1, 'XL', 'Yellow', '1')
    cy.get('.woocommerce-message > .button').click()

    cy.get('h2').should('contain', 'Total no carrinho')

    cy.get('.checkout-button').click()
    //Dados de Faturamento
    cy.get('#billing_first_name').clear().type('João') //TO DO Dados de faturamento com page objects
    cy.get('#billing_last_name').clear().type('Silva')
    cy.get('#billing_company').clear().type('Ebac')
    cy.get('#select2-billing_country-container').type('Brasil{enter}')
    cy.get('#billing_address_1').clear().type('Rua dos bobos')
    cy.get('#billing_address_2').clear().type('Nº 0')
    cy.get('#billing_city').clear().type('São Paulo' + '{enter}')
    cy.get('#select2-billing_state-container').scrollTo('bottom', { ensureScrollable: false });
    cy.get('#billing_postcode').clear().type('00000-000')
    cy.get('#billing_phone').clear().type('11999999999')
    cy.get('#billing_email').clear().type('email@qualquer.com')
    cy.wait(200);
    cy.get('#terms').check()
    cy.wait(200);
    cy.get('#place_order').click()

    cy.get('.woocommerce-thankyou-order-received').should('contain', 'Pedido recebido')
})