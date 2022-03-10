import { CONTACT_SELECTORS } from '../selectors/contact.selectors';

export class ContactPage {
    getScrollBox() { return CONTACT_SELECTORS.scrollBox }
    getContactFormTitle() { return CONTACT_SELECTORS.contactFormTitle } 
    getNameInput() { return CONTACT_SELECTORS.nameInput } 
    getNameError() { return CONTACT_SELECTORS.nameError } 
    getPhonePrefixList() { return CONTACT_SELECTORS.phonePrefixList } 
    getPhonePrefixListOptios() { return CONTACT_SELECTORS.phonePrefixListOptions } 
    getPhoneInput() { return CONTACT_SELECTORS.phoneInput } 
    getPhoneInputError() { return CONTACT_SELECTORS.phoneInputError } 
    getEmailInput() { return CONTACT_SELECTORS.emailInput } 
    getEmailError() { return CONTACT_SELECTORS.emailError } 
    getGuestsInput() { return CONTACT_SELECTORS.guestsInput } 
    getCalendarLeftInput() { return CONTACT_SELECTORS.calendarLeftInput } 
    getCalendarRightInput() { return CONTACT_SELECTORS.calendarRightInput } 
    getCalendarButton() { return CONTACT_SELECTORS.calendarButton } 
    getLeftCalendar() { return CONTACT_SELECTORS.leftCalendar } 
    getLeftCalendarArrow() { return CONTACT_SELECTORS.leftCalendarArrow } 
    getLeftCalendarDays() { return CONTACT_SELECTORS.leftCalendarDays } 
    getLeftCalendarTitle() { return CONTACT_SELECTORS.leftCalendarTitle } 
    getRightCalendar() { return CONTACT_SELECTORS.rightCalendar } 
    getRightCalendarArrow() { return CONTACT_SELECTORS.rightCalendarArrow } 
    getRightCalendarDays() { return CONTACT_SELECTORS.rightCalendarDays } 
    getRightCalendarTitle() { return CONTACT_SELECTORS.rightCalendarTitle } 
    getCalendarError() { return CONTACT_SELECTORS.calendarError } 
    getCommentInput() { return CONTACT_SELECTORS.commentInput } 
    getCommentError() { return CONTACT_SELECTORS.commentError } 
    getSendButton() { return CONTACT_SELECTORS.sendButton } 
}
