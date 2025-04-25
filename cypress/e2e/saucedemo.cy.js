import * as start_page from "../locators/start_page.json";
import * as products from "../locators/products_page.json";
import * as cart from "../locators/cart_page.json";
import * as checkout from "../locators/checkout_page.json";
import * as overview from "../locators/overview_page.json";
import * as checkout_complete from "../locators/checkout_complete_page.json";
import * as data from "../helpers/default_data.json";

describe('saucedemo.com site e2e-tests',function () {

  beforeEach('Начало теста', function () {
    cy.visit('/'); //зашёл на сайт
  })
  it('Успешная авторизация', function() {
    cy.get(start_page.username).type(data.username);
    cy.get(start_page.password).type(data.password);
    cy.get(start_page.login_button).click();
    // cy.wait(2000);
    cy.get(products.title).contains('Products');
  })

  it('Указан неверный пароль при авторизации', function() {
    cy.get(start_page.username).type(data.username);
    cy.get(start_page.password).type(data.wrong_pass);
    cy.get(start_page.login_button).click();
  })

  it('Добавление товара в корзину', function() {
    cy.get(start_page.username).type(data.username);
    cy.get(start_page.password).type(data.password);
    cy.get(start_page.login_button).click();
    // cy.wait(2000);
    cy.get(products.title).contains(products.title_info);
    cy.get(products.Fleece_Jacket).click();
    cy.get(products.cart_icon).click();
    cy.get(cart.your_cart).contains(cart.cart_info);
  })

  it('Удаление товара из корзины', function() {
    cy.get(start_page.username).type(data.username);
    cy.get(start_page.password).type(data.password);
    cy.get(start_page.login_button).click();
    // cy.wait(2000);
    cy.get(products.title).contains(products.title_info);
    cy.get(products.Fleece_Jacket).click();
    cy.get(products.cart_icon).click();
    cy.get(cart.your_cart).contains(cart.cart_info);
    cy.get(cart.remove_fleece_jacket).click();
    cy.get(cart.continue_shopping).click()
  })

  it('Оплата товара и завершение покупки', function() {
    cy.get(start_page.username).type(data.username);
    cy.get(start_page.password).type(data.password);
    cy.get(start_page.login_button).click();
    // cy.wait(2000);
    cy.get(products.title).contains(products.title_info);
    cy.get(products.backpack).click();
    cy.get(products.cart_icon).click();
    cy.get(cart.your_cart).contains(cart.cart_info);
    cy.get(cart.checkout).click();

    cy.get(checkout.title).contains(checkout.title_info);
    cy.get(checkout.first_name).type(data.first_name);
    cy.get(checkout.last_name).type(data.last_name);
    cy.get(checkout.zip).type(data.postal_code);
    cy.get(checkout.continue).click();

    cy.get(overview.title).contains(overview.title_info);
    cy.get(overview.finish).click();

    cy.get(checkout_complete.complete_header).contains(checkout_complete.info);
    cy.get(checkout_complete.back_home).click();

  })
})