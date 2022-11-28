# Module 03 Challenge - Unique Password Generator

>**Application Link:** [Unique Password Generator](https://fannychen623.github.io/Challenge-02-Fanny-Chen-Digital-Portfolio/)
>
>**View:** [Description](#description) / [Application Details](#application-details) / [Application Sample Images](#application-sample-images) / [Responsive Layout Example](#responsive-layout)
>
>**Site Preview:**
>
>![Unique Password Generator](/Assets/images/Unique%20Password%20Generator.png "Unique Password Generator")
## **DESCRIPTION**
> Topic Assessed: **JavasScript**; **Alert, Confirm, Prompt Methods**, **Event Listeners and Functions**
### **My Task**
*Unique Password Generator* enables users to generate random passwords based on criteria that they’ve selected.

> Modify existing starter code. 
>
> Update HTML and CSS to create a clean and polished, responsive user interface that adapts to multiple screen sizes.
> 
> Add JavaScript code to run the password generator.
>
> Allow users to select password criterias with a series of prompts.
>
> Include restrictive criterias to prevent invalid inputs.
>
## User Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## **APPLICATION DETAILS**

### HTML Information
* **Head**: Added a `reset.css` file.
* **Semantic Elements**: Renamed `<div>` tags to more indicative semantic elements.
  * Renamed `<div>` to `<main>`, removed class `wrapper`.
  * Renamed `<div>` to `<section>`, for the section with class `card`.
  * Removed `<div>` and `card-header` class, `<h2>` element is sufficient.
  * Renamed `<div>` to `<output>`, removed class `card-body`.
  * Removed `<div>` and `card-footer` class, `<button>` element is sufficient.
  * Removed class `btn` from `<button>`, class not used.
* **Files**: Moved CSS and JavaScript files into assets folder for path clarity/organization. 
* **Comments**: Added indicative comments before each section.

### CSS Information
* **Removed Selectors**: Certain selectors are not needed/used by the application.
  * Removed universal (`*`) selector.
  * Removed `html, body, .wrapper`.
  * Removed `.class-header`, `.class-body`, `.class-footer`
  * Removed `.float-right` and `button[disabled]`.
* **Order**: Ordered selectors based on the order appeared on HTML.
* **Element Selectors**: Renamed applicable class selectors to element selectors.
    | Class Selectors | | Element Selectors |
    |  :---:  |  :---:  |  :---:  |
    | .wrapper | &#8594; | main |
    | .card-header | &#8594; | h2 |
    | .card-body | &#8594; | output |
    | .btn | &#8594; | button |
* **Pseudo Element**: Changed `.card-header::after` and `.card-footer::before` to `output::before` and `output::after`.
* **:root Varibles**: Defined and replaced repetitive varibles used throughout the sheet. 
* **Responsive Layout**: Added `h2`, `button`, and `#password` to shrink with media screen size.
* **Basic Styling**: Defined styles (such as: fonts, alignments, margins, paddings, borders, and colors) according to the provided visual.
* **Comments**: Added indicative comments before selectors.

### JavaScript Information
* **Assignment Code and Event Listener**: Used to define the button on the application and initialize the writePassword() function upon click.
* **function writePassword()**: Runs the function to generate the password and then paste it in the HTML output text area.
  * Runs function generatePassword()
  * Paste the generated password into the output text area with the id password.
  * Initialize an alert with the generated password and details of the password length.
* **function generatePassword()**: Generates a random password based on the given requirements.
  * Clears any existing password incase the function has already been ran previously.
  * Run the function lengthCriteria() to determine the password length.
  * Run the function charactersCriteria() to determine what characters to include in the password.
  * Check that at least one type of character is chosen, otherwise, output an error alert and run the charactersCritera() function again.
  * Use the returned password length and character list to generate a unique series of characters as the password.
    * **Referenced Code**: [Random Password Generator using Javascript](https://dev.to/code_mystery/random-password-generator-using-javascript-6a)
  * Return the generated unique password.
* **function lengthCriteria()**: Utilizes prompt method to determine the minimum and maximum length of the password.
  * Sub-functions minLength() and maxLength().
  * Define the variables minInputs and maxInputs as arrays.
    * When the function is ran more than once due to invalid entries, the returned value is overwritten in reverse order.
    * Storing the inputs in an array prevents overwritting the last valid entry.
  * Run the function minLength() which prompts the user to enter the minimum length of the password.
    * The default entry in the prompt is set to "8".
    * Push/add the input to the minInputs array to prevent being overwritten when the function runs again.
    * Run the input through a series of if statements to determine if the entry is valid.
      * Check that a value is entered (not Null).
      * Check that the input is numeric (isNAN is False)
      * Check that the value is no less than 8 (password must be between 8 and 128 chracters)
      * Check that the value is no greater than 128 (password must be between 8 and 128 chracters)
    * If the input is not valid, output an alert detailing the error and run the function minLength() again.
    * Once a valid input is entered, return the last value in the minInputs array.
  * Run the function maxLength() which prompts the user to enter the maximum length of the password.
    * The default entry in the prompt is set to "128".
    * Push/add the input to the maxInputs array to prevent being overwritten when the function runs again.
    * Run the input through a series of if statements to determine if the entry is valid.
      * Check that a value is entered (not Null).
      * Check that the input is numeric (isNAN is False)
      * Check that the value is no less than 8 (password must be between 8 and 128 chracters)
      * Check that the value is no greater than 128 (password must be between 8 and 128 chracters)
    * If the input is not valid, output an alert detailing the error and run the function maxLength() again.
    * Once a valid input is entered, return the last value in the maxInputs array.
  * Based on the minimum and maximum inputs, randomly select a number in the range to set as the password length.
    * **Referenced Code**: [Getting a random integer between two values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
  * Return the random password length.
* **function charactersCriteria()**: Utilizes confirm method to determine the password character requirements.
  * Define the four different character types as arrays: lowercase, uppercase, numeric, and special characters.
  * Define an empty characterslist array. 
    * Clears any existing list incase the function has already been ran previously.
  * Initialize confirm methods to determine if each character type should be included in the password.
  * If a character type is included, combine the respective character array with the charactersList array.
  * Return the charactersList array.
    * The generatePassword() function will check if no character type has been selected and will run the function again.

## **APPLICATION SAMPLE IMAGES**
### Minimum Length Prompt
>![Minimum Length Prompt](/Assets/images/Length%20Prompt.png "Minimum Length Prompt")

### Sample Error Alert
>![Sample Error Alert](/Assets/images/Length%20Error%20Alert.png "Sample Error Alert")

### Sample Character Confirm
>![Sample Character Confirm](/Assets/images/Character%20Confirm%201.png "Sample Character Confirm")

### Sample Character Confirm
>![Sample Character Confirm](/Assets/images/Character%20Confirm%202.png "Sample Character Confirm")

### Unique Password Alert 
>![Unique Password Alert](/Assets/images/Unique%20Password%20Alert.png "Unique Password Alert")

### Generated Password Completion
>![Generated Password Completion](/Assets/images/Generated%20Password.png "Generated Password Completion")

## **RESPONSIVE LAYOUT**
### Screen Size: 690px
>![Responsive Layout 1](/Assets/images/690px%20layout.png "Responsive Layout 1")

### Screen Size: 500px
>![Responsive Layout 2](/Assets/images/500px%20layout.png "Responsive Layout 2")