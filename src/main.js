//Html 
const characterNumbers = document.querySelector('#characterNumbers');
const password = document.querySelector('.password');

//js
let typePassword;
let value;
const letterCollection = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] 
const symbolCollection = ['!', '¡', '"', '@', '#', '$', '&', '/', '%', '(', ')', '=', '¿', '?', '*', '+', ',', '.', ':', ';', '>', '<', '[', ']', '{', '}', '_']
const fullCollection = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ...letterCollection, ...symbolCollection]

const setTypePassword = (type) => {
    typePassword = type
    if (typePassword == 'number') {
        alert('Has selected only numbers mode');
    }
    if (typePassword == 'text') {
        alert('Has selected only text mode');
    }
    if (typePassword == 'symbol') {
        alert('Has selected only symbols mode');
    }
    if (typePassword == 'full') {
        alert('Has selected full mode');
    }
}

const onlyNumbers = () => {
    event.preventDefault();
    const iterations = parseInt(characterNumbers.value);
    let result = ''
    for (let i = 0; i < iterations; i++) {
        const randomNumber = Math.floor(Math.random() * (10 - 0) + 0);
        result += randomNumber;
    }
    password.textContent = result;
    value = result;
}

const onlyText = () => {
    event.preventDefault();
    const iterations = parseInt(characterNumbers.value);
    let result = ''
    for (let i = 0; i < iterations; i++) {
        const randomNumber = Math.floor(Math.random() * (letterCollection.length - 0) + 0);
        result += letterCollection[randomNumber];
    }
    password.textContent = result;
    value = result;
}

const onlySymbols = () => {
    event.preventDefault();
    const iterations = parseInt(characterNumbers.value);
    let result = ''
    for (let i = 0; i < iterations; i++) {
        const randomNumber = Math.floor(Math.random() * (symbolCollection.length - 0) + 0);
        result += symbolCollection[randomNumber];
    }
    password.textContent = result;
    value = result;
}

const fullMode = () => {
    event.preventDefault();
    const iterations = parseInt(characterNumbers.value);
    let result = ''
    for (let i = 0; i < iterations; i++) {
        const randomNumber = Math.floor(Math.random() * (fullCollection.length - 0) + 0);
        result += fullCollection[randomNumber];
    }
    password.textContent = result;
    value = result;
}

const generatePassword = () => {
    if (typePassword == 'number') {
        onlyNumbers();
    }
    if (typePassword == 'text') {
        onlyText();
    }
    if (typePassword == 'symbol') {
        onlySymbols();
    }
    if (typePassword == 'full') {
        fullMode();
    }
}

const copyToClipboard = () => {
    event.preventDefault();
    if (!value) {
        alert('Has not processed a password');
    } else {
        window.navigator.clipboard.writeText(value);
        alert('Your password has been successfully copied');
    }
}