/// <reference types="cypress" />
let dadosLogin
import faturamentoPage from '../support/page_objects/faturamento.page';
const addPro2 = require = ('../support/commands.js')
//const dadosEndereco = require('../fixtures/endereco')
import { fa, faker } from '@faker-js/faker';





describe('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

})

beforeEach(() => {
  cy.visit('minha-conta')
  cy.fixture('perfil').then(dados => {
    cy.login(dados.usuario, dados.senha)

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    cy.get('#primary-menu > .menu-item-629 > a').click()


  })

});
//DUVIDA: COMO IMPORTAR COMMANDS.JS PARA ESSE ARQUIVO? A TENTATIVA DE IMPOPTAR ESTÁ NA LINHA 4.
//Entendi a funcionalidade e quanto pode deixar o codigo mais limpo, mas não consegui fazer funcionar.
it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
  cy.addProdutos2('Chaz Kangeroo Hoodie', 'M', 'Gray', '1')
   /* cy.get('#primary-menu > .menu-item-629 > a').click()
      cy.get(':nth-child(3) > .page-numbers').click()
      cy.get('.product-block').contains('Chaz Kangeroo Hoodie').click()
      cy.get('.button-variable-item-M').click()
      cy.get('.button-variable-item-Gray').click()
    cy.get('.input-text').clear().type('1')
  */cy.get('.single_add_to_cart_button').click()
  cy.get('#primary-menu > .menu-item-629 > a').click()
  cy.get(':nth-child(3) > .page-numbers').click()
  cy.addProdutos2('Cassius Sparring Tank', 'M', 'Blue', '1')
  /*cy.get('.product-block').contains('Cassius Sparring Tank').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear().type('1')
  */cy.get('.single_add_to_cart_button').click()
  cy.get('#primary-menu > .menu-item-629 > a').click()
  cy.addProdutos2('Abominable Hoodie', 'M', 'Red', '1')
  /*cy.get('.product-block').contains('Abominable Hoodie').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.input-text').clear().type('1')
  */cy.get('.single_add_to_cart_button').click()
  cy.get('#primary-menu > .menu-item-629 > a').click()
  cy.get(':nth-child(7) > .page-numbers').click()
  cy.addProdutos2('Typhon Performance Fleece-lined Jacket', 'L', 'Black', '1')
  /*cy.get('.product-block').contains('Typhon Performance Fleece-lined Jacket').click()
    cy.get('.button-variable-item-L').click()
    cy.get('.button-variable-item-Black').click()
    cy.get('.input-text').clear().type('1')
  */cy.get('.single_add_to_cart_button').click()
  cy.get('.woocommerce-message > .button').click()

  cy.get('.page-title').should('contain', 'Carrinho')
  cy.get('.checkout-button').click()
  cy.wait(200);
  cy.get('#payment_method_bacs').click()
  cy.get('#terms').check()
  cy.get('#place_order').click()

  //DUVIDA: COMO IMPORTAR COMMANDS.JS PARA ESSE ARQUIVO? A TENTATIVA DE IMPOPTAR ESTÁ NA LINHA 5.
  faturamentoPage.editarDadosFaturamento(dadosEndereco[2].nome,
    dadosEndereco[2].sobrenome,
    dadosEndereco[2].empresa,
    dadosEndereco[2].pais,
    dadosEndereco[2].endereco,
    dadosEndereco[2].numero,
    dadosEndereco[2].cidade,
    dadosEndereco[2].estado,
    dadosEndereco[2].cep,
    dadosEndereco[2].telefone,
    dadosEndereco[2].email)

})

it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta - Com dados de faturamento Faker', () => {
  cy.get('.product-block').contains('Abominable Hoodie').click()
  cy.get('.button-variable-item-M').click()
  cy.get('.button-variable-item-Red').click()
  cy.get('.input-text').clear().type('1')
  cy.get('.single_add_to_cart_button').click()
  cy.get('.woocommerce-message > .button').click()
  cy.get('.checkout-button').click()

  cy.get('#billing_first_name').clear().type('Leandro')
  cy.get('#billing_last_name').clear().type('Silva')
  cy.get('#billing_company').clear().type('Ebac')
  cy.get('#billing_country').select('BR', { force: true })
  cy.get('#billing_address_1').clear().type('Rua Sete')
  cy.get('#billing_address_2').clear().type('Nº 1000')
  cy.get('#billing_city').clear().type('São Paulo' + '{enter}')
  cy.get('#select2-billing_state-container').click().type('Sergipe' + '{enter}')
  cy.get('#billing_postcode').clear().type('03000-070')
  cy.get('#billing_phone').clear().type('11993339776')
  cy.get('#billing_email').clear().type('mais@umemail.com')
  cy.wait(200);
  cy.get('#terms').click()
  cy.get('#place_order').click()

})


it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta - Com dados de faturamento Faker', () => {
  cy.get('.product-block').contains('Abominable Hoodie').click()
  cy.get('.button-variable-item-M').click()
  cy.get('.button-variable-item-Red').click()
  cy.get('.input-text').clear().type('1')
  cy.get('.single_add_to_cart_button').click()
  cy.get('.woocommerce-message > .button').click()
  cy.get('.checkout-button').click()
  
  //Problemas sempre alternando entre estado, cep e telefone
  cy.get('#billing_first_name').clear().type(faker.internet.userName());
  cy.get('#billing_last_name').clear().type(faker.name.lastName());
  cy.get('#billing_company').clear().type(faker.company.name());
  cy.get('#billing_country').select(faker.address.countryCode(), { force: true });
  cy.get('#billing_address_1').clear().type(faker.address.streetAddress());
  cy.get('#billing_address_2').clear().type(faker.address.secondaryAddress());
  cy.get('#billing_city').clear().type(faker.address.city() + '{enter}');
  cy.get('#select2-billing_state-container').click().type(faker.address.state(),{ force: true });
  cy.get('#billing_postcode').clear().type(faker.address.zipCode());
//  cy.get('#billing_phone').clear().type(faker.phone.phoneNumber());
  cy.get('#billing_email').clear().type(faker.internet.email());
  cy.wait(500);
  cy.get('#terms').click()
  cy.get('#place_order').click()
});





