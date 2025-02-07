# -Password-Generator
Overview

This Password Generator is a simple yet effective tool for creating secure passwords based on user preferences. The project demonstrates how to use JavaScript for handling DOM manipulation, event listeners, and random string generation.

Features

Generate a random password based on user-selected options.

Adjustable password length using a slider (6 to 20 characters).

Options to include:

Capital Letters (A-Z)

Small Letters (a-z)

Numbers (0-9)

Special Characters (~!@#$%^&*())

Prevents password generation if no option is selected.

Technologies Used

HTML (Structure)

CSS (Styling, if added)

JavaScript (Logic & Interactivity)

How It Works

Set Password Length: Adjust the slider to define password length.

Select Character Types: Choose from uppercase letters, lowercase letters, numbers, and special characters.

Generate Password: Click the Generate Password button to create a random password.

Display Password: The generated password appears in the heading.

Code Highlights

Event Listeners:

Slider Input Event: Updates the displayed password length dynamically.

slider.addEventListener('input', (e) => {
    rangeVal.innerText = e.target.value;
});

Password Generation Logic:

Random Selection of Characters:

for (let i = 0; i < slider.value; i++) {
    let randomNumber = Math.floor(Math.random() * finalStr.length);
    generatedPassword += finalStr.charAt(randomNumber);
}

Preventing Empty Selection:

Ensures at least one option is chosen before generating a password.

if (finalStr === '') {
    alert('Please Choose One Option');
}

Learning Purpose

This project helps learners understand:

Event Handling in JavaScript.

Manipulating the DOM dynamically.

Using JavaScript Math Functions for randomization.

Conditionally constructing strings based on user preferences.

Future Enhancements

Copy to Clipboard button.

Password Strength Indicator.

Improved UI with CSS animations.

License

This project is created for learning purposes and is free to use and modify!
