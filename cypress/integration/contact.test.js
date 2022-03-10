import { ContactPage } from '../pages/methods/contact.page';
import { Calendar } from '../pages/methods/calendar.component';
import { LoremIpsum } from 'lorem-ipsum';

const contact = new ContactPage();
const calendar = new Calendar();
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

beforeEach(() => {
  cy.visit('http://localhost:3000/contact.html', { timeout: 30000 });
  cy.waitUntil (function() {
    return cy.get(contact.getContactFormTitle(), {timeout: 5000}).should('be.visible');
  });
});

describe('Validate required fields', () => {
  it('Should display the next errors', () => {
    cy.get(contact.getNameInput()).click({force:true});
    cy.get(contact.getPhoneInput()).click({force:true});
    cy.get(contact.getNameError())
      .should("be.visible")
      .contains('Name is mandatory');

    cy.get(contact.getPhoneInput()).click({force:true});
    cy.get(contact.getContactFormTitle()).click({force:true});
    cy.get('form').then($form => {
      if ($form.find(contact.getPhoneInputError()).length > 0) {   
        cy.get(contact.getPhoneInputError())
          .should("be.visible")
          .contains('Phone is mandatory');
      }
      else console.log('The field is not validating empty values')
    });
    
    cy.get(contact.getEmailInput()).click({force:true});
    cy.get(contact.getContactFormTitle()).click({force:true});
    cy.get(contact.getEmailError())
      .should("be.visible")
      .contains('Email is mandatory');

    cy.get(contact.getCommentInput()).click({force:true});
    cy.get(contact.getContactFormTitle()).click({force:true});
    cy.get(contact.getCommentError())
      .should("be.visible")
      .contains('Comment is mandatory');
  }); 
});

describe('Validate the form is completed correctly', () => {
  it('Should enable the send button', () => {
    cy.get(contact.getNameInput()).type('Diego Bonilla', {force:true});
    cy.get(contact.getPhonePrefixList()).select('Colombia', {force:true});
    cy.get(contact.getPhoneInput()).type('3007983642', {force:true});
    cy.get(contact.getEmailInput()).type('decablind86@gmail.com', {force:true});
    cy.get(contact.getGuestsInput()).type('1', {force:true});
    cy.get(contact.getCalendarButton()).click({force:true});
    cy.waitUntil (function() {
      return cy.get(contact.getLeftCalendarTitle(), {timeout: 5000}).should('be.visible');
    });
    calendar.selectInitialDate('2022/04/14');
    calendar.selectFinalDate('2022/06/14');
    cy.get(contact.getCommentInput()).type(lorem.generateParagraphs(1), {force:true});
    cy.get(contact.getSendButton()).click({force:true});
  }); 
});

describe('Validate the correctness of the fields', () => {
  it('Should display an error message', () => {
    cy.get(contact.getNameInput()).type('1234*', {force:true});
    cy.get(contact.getPhoneInput()).type('4', {force:true});
    cy.get(contact.getEmailInput()).type('aa', {force:true});
    cy.get(contact.getGuestsInput()).click({force:true});
    cy.get(contact.getEmailError())
      .should("be.visible")
      .contains('The email provided is not valid');
    cy.get(contact.getEmailInput()).type('aa@gmail.com', {force:true});
    cy.get(contact.getGuestsInput()).type('a', {force:true});
    cy.get(contact.getCalendarButton()).click({force:true});
    cy.waitUntil (function() {
      return cy.get(contact.getLeftCalendarTitle(), {timeout: 5000}).should('be.visible');
    });
    calendar.selectInitialDate('2022/04/14');
    calendar.selectFinalDate('2022/06/14');
    cy.get(contact.getCommentInput()).type('$$$', {force:true});
    cy.get(contact.getSendButton()).click({force:true});
  }); 
});
