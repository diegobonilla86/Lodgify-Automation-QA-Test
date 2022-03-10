import { PricingPage } from '../pages/methods/pricing.page';

const pricing = new PricingPage();

beforeEach(() => {
  cy.visit('http://localhost:3000/pricing.html', { timeout: 30000 });
  cy.waitUntil (function() {
    return cy.get(pricing.getScrollBox(), {timeout: 5000}).should('be.visible');
  });
});

describe('Verify the yearly plan selecting 50 rentals', () => {
    it('Should display', () => {
      cy.get(pricing.getScrollPropPlan()).type('50');
      cy.get(pricing.getStarterPlanCurrency()).contains('$');
      cy.get(pricing.getStarterPlanValue()).contains('64');
      cy.get(pricing.getProfessionalPlanCurrency()).contains('$');
      cy.get(pricing.getProfessionalPlanValue()).contains('375');
      cy.get(pricing.getUltimatePlanCurrency()).contains('$');
      cy.get(pricing.getUltimatePlanValue()).contains('525'); //This will fail = 318 ::: First BUG
    });
});

describe('Verify the currency symbol on change', () => {
  it('Should display new currency', () => {
    cy.get(pricing.getScrollPropPlan()).type('50');
    cy.get(pricing.getCurrencySelectOptions()).each(($option) => {
      let currency = $option.text().substring(0, 1);
      if ($option.text().substring(0, 1) === '€') {
        cy.get(pricing.getStarterPlanCurrencyEuro()).contains(currency);
        cy.get(pricing.getProfessionalPlanCurrencyEuro()).contains(currency);
        cy.get(pricing.getUltimatePlanCurrencyEuro()).contains(currency);
      } else {
        cy.get(pricing.getStarterPlanCurrency()).contains(currency);
        cy.get(pricing.getProfessionalPlanCurrency()).contains(currency);
        cy.get(pricing.getUltimatePlanCurrency()).contains(currency);
      }
    });
  });
});

describe('Verify the currency symbol and value on change', () => {
  it('Should display new currency and corresponding', () => {
    cy.get(pricing.getScrollPropPlan()).type('50');
    cy.get(pricing.getCurrencySelect()).select('eur').should('have.text', '€ EUR');
    cy.get(pricing.getStarterPlanCurrencyEuro()).scrollIntoView().contains('€');
    cy.get(pricing.getStarterPlanValue()).contains('60');
    cy.get(pricing.getProfessionalPlanCurrencyEuro()).contains('€');
    cy.get(pricing.getProfessionalPlanValue()).contains('330');
    cy.get(pricing.getUltimatePlanCurrencyEuro()).contains('€');
    cy.get(pricing.getUltimatePlanValue()).contains('466');

    cy.get(currencySelect()).select('usd').should('have.text', '$ USD');
    cy.get(pricing.getStarterPlanCurrencyEuro()).scrollIntoView().contains('$');
    cy.get(pricing.getStarterPlanValue()).contains('64');
    cy.get(pricing.getProfessionalPlanCurrencyEuro()).contains('$');
    cy.get(pricing.getProfessionalPlanValue()).contains('375');
    cy.get(pricing.getUltimatePlanCurrencyEuro()).contains('$');
    cy.get(pricing.getUltimatePlanValue()).contains('518');

    cy.get(pricing.getCurrencySelect()).select('gbp').should('have.text', '£ GBP');
    cy.get(pricing.getStarterPlanCurrencyEuro()).scrollIntoView().contains('£');
    cy.get(pricing.getStarterPlanValue()).contains('51');
    cy.get(pricing.getProfessionalPlanCurrencyEuro()).contains('£');
    cy.get(pricing.getProfessionalPlanValue()).contains('294');
    cy.get(pricing.getUltimatePlanCurrencyEuro()).contains('£');
    cy.get(pricing.getUltimatePlanValue()).contains('414');
  });
});

describe('Verify the first faq', () => {
  it('Should display', () => {
    /* Although, for me it is important to validate all components in this page */
    /* Their content, possible href, titles, navigation broken links, etc, */
    /* The excercise would result enormous */
    cy.get(pricing.getFirstFAQQuestion())
      .scrollIntoView()
      .should('be.visible')
      .contains('Do you have more than 100 rentals or have more complex needs?')
      .click({force:true});
    cy.get(pricing.getFirstFAQAnswer())
      .should('be.visible')
      .contains('For a website with more than 100 rentals or a complete custom web design, please contact us.');
    cy.get(pricing.getFirstFAQGetInTouch())
      .should('be.visible')
      .contains('Get in touch')
      .should('have.attr', 'href', 'https://use.lodgify.com/contact?__hstc=181257784.8824a952fbdfa3702fa121f0d3c44265.1646792102802.1646797637196.1646802468551.4&__hssc=181257784.1.1646802468551&__hsfp=2743735374');
  });
});
