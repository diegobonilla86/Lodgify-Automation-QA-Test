import { ContactPage } from './contact.page';

const contact = new ContactPage();

export class Calendar {
  
  monthsDiff(date, currentDate) {
    var idate = new Date(date);
    var current = new Date(currentDate);
    var years = this.yearsDiff(idate, current);  
    var monthsDifference = (years * 12) + (idate.getMonth() - current.getMonth()) ;
    return monthsDifference;
  }

  yearsDiff(date, currentDate) {
    var idate = new Date(date);
    var current = new Date(currentDate);
    var yearsDifference = idate.getFullYear() - current.getFullYear();
    return yearsDifference;
  }

  selectInitialDate(date) {
    const YEAR_INDEX = 1;
    const MONTH_INDEX = 0;
    const DATE_SEPARATOR = ' ';
    
    var idate = new Date(date);
    const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

    cy.get(contact.getLeftCalendarTitle()).invoke('text').then((title) => {
      var month = title.trim().split(DATE_SEPARATOR)[MONTH_INDEX];
      month = month.toLowerCase();
      month = months.indexOf(month)+1;
      const year = Number.parseInt(title.trim().split(DATE_SEPARATOR)[YEAR_INDEX], 10);
      const currentDate = new Date(year, month-1, '01');

      const diffMonths = this.monthsDiff(date, currentDate);
      var navigationButton;

      if (diffMonths > 0) {
        navigationButton = contact.getRightCalendarArrow();
      } else {
        navigationButton = contac.getLeftCalendarArrow();
      }

      for (var i = 0; i < Math.abs(diffMonths); i += 1) {
        cy.get(navigationButton).click();
      }

      cy.get(contact.getLeftCalendarDays()).contains(idate.getDate()).click();
    });
  }

  selectFinalDate(date) {
    const YEAR_INDEX = 1;
    const MONTH_INDEX = 0;
    const DATE_SEPARATOR = ' ';
    
    var fdate = new Date(date);
    const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

    cy.get(contact.getRightCalendarTitle()).invoke('text').then((title) => {
      var month = title.trim().split(DATE_SEPARATOR)[MONTH_INDEX];
      month = month.toLowerCase();
      month = months.indexOf(month)+1;
      const year = Number.parseInt(title.trim().split(DATE_SEPARATOR)[YEAR_INDEX], 10);
      const currentDate = new Date(year, month-1, '01');

      const diffMonths = this.monthsDiff(date, currentDate);
      var navigationButton;

      if (diffMonths > 0) {
        navigationButton = contact.getRightCalendarArrow();
      } else {
        navigationButton = contac.getLeftCalendarArrow();
      }

      for (var i = 0; i < Math.abs(diffMonths); i += 1) {
        cy.get(navigationButton).click();
      }

      cy.get(contact.getRightCalendarDays()).contains(fdate.getDate()).click();
    });
  }
}
