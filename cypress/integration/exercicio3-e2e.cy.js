/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')
import faturamentoPage from '../support/page_objects/faturamento.page';

describe('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

});

beforeEach(() => { //Login usando Fixture
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados => {
        cy.login(dados.usuario, dados.senha)

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    })

});

 afterEach(() => {
cy.screenshot()
});



it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta - Comando Customizados', () => {
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
    cy.get('#billing_first_name').clear().type('João')
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

    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
})


it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta - Page Objects', () => {
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

    faturamentoPage.editarDadosFaturamento()
 
     cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    
})




