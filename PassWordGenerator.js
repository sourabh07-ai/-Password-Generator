const btn = document.getElementById('GeneratePassword');
const newPass = document.getElementById('newPass');
const slider = document.getElementById('range');
const rangeVal = document.getElementById('rangeVal');

const specailChar = document.getElementById('symbol');
const num = document.getElementById('number');
const lowerCase = document.getElementById('smallLetter');
const upperCase = document.getElementById('captialLetter');

// Update the displayed range value dynamically
slider.addEventListener('input', (e) => {
    rangeVal.innerText = e.target.value;
});

// Generate password logic
btn.addEventListener('click', () => {
    let capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let smallLetters = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let specialCharacters = '~!@#$%^&*()';
    let finalStr = '';
   
    let generatedPassword = '';

    // Build the character set based on selected options
     if (upperCase.checked) {
        finalStr += capitalLetters;
    }
    if (specailChar.checked) {
        finalStr += specialCharacters;
    }
    if (num.checked) {
        finalStr += numbers;
    }
    if (lowerCase.checked) {
        finalStr += smallLetters;
    }
    // console.log(finalStr)

    if(finalStr==='')
    {
        alert('Please Choose One Thing')
    }

    for(let i=0;i<slider.value;i++)
     {//ye loop apni jinti slider ki value hi wha tk chlayega 
    //     // console.log(i);
        let randomNumber=Math.floor(Math.random()*finalStr.length);
        // latestPass+=captialLetter[randomNumber];
        generatedPassword+=finalStr.charAt(randomNumber);//uppar wala likha wo bhi same kaam krta hi  
    
    }
    // console.log(generatedPassword)




    
     newPass.innerText=`${generatedPassword}`
    // console.log('New PassWord Generate')
})