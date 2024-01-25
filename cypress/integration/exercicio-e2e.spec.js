/// <reference types="cypress" />


describe('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */
});
beforeEach(() => {
    cy.visit('minha-conta')

});

afterEach(() => {
    cy.screenshot()
});

it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
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
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-button').click()
    cy.wait(300);
    cy.get('#terms').click()
    cy.wait(200);
    cy.get('#place_order').click()

    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    
        

       







    });
// Add the closing curly brace here
