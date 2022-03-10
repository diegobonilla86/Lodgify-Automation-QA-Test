# BUG REPORTER

## Bug ID : 001

**Title:** The Ultimate Plan Value is not correctly calculated on the pricing page.
**Environment:** Develop.
**Severity:** High.
**Steps to Reproduce:** 
    ```
    Given the user navigates to the pricing page: "http://localhost:3000/pricing.html"
    When the user chooses "$ USD" as the currency
    And the user scroll the number of rentals to "50"
    And the user validates the generated amount on the ultimate plan value

    CURRENT RESULT:
    Then the user can see that the value displayed is "$518"
    And the correct value must be "$525"

    EXPECTED RESULT:
    Then the user can see that the value displayed is "$525"
    ```
**Evidence:** 
    ![alt text](cypress/bug-evidence/ScreenShot2022-03-10-121457AM.png)

## Bug ID : 002

**Title:** Field Phone on contact page cannot be empty.
**Environment:** Develop.
**Severity:** Medium.
**Steps to Reproduce:** 
    ```
    Given the user navigates to the contact page: "http://localhost:3000/contact.html"
    When the user is located in the "Contact" form
    And the user let the "Phone" field empty

    CURRENT RESULT:
    Then the application is not validating that the field cannot be empty
    And the user might click on the send button

    EXPECTED RESULT:
    Then the application displays an alert message requesting the field to not be empty
    ```
**Evidence:** 
    ![alt text](cypress/bug-evidence/ScreenShot2022-03-10-122253AM.png)

## Bug ID : 003

**Title:** Fields on contact page are allowing incorrect values.
**Environment:** Develop.
**Severity:** Medium.
**Steps to Reproduce:** 
    ```
    Given the user navigates to the contact page: "http://localhost:3000/contact.html"
    When the user is located in the "Contact" form
    And the user fill the name input with numbers
    And the user fill the phone input with a single digit
    And the user fill the guests input with a letter
    And the user fill the name input with numbers
    And the user complete with valid values the other fields

    CURRENT RESULT:
    Then the application is not validating that the field have incorrect formats
    And the user might click on the send button

    EXPECTED RESULT:
    Then the application displays alert messages requesting the fields to have the correct formats
    ```
**Evidence:** 
    ![alt text](cypress/bug-evidence/ScreenShot2022-03-10-123344AM.png)
