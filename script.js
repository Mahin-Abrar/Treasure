function checkInput(){
let userInput = document.getElementById('userInput').value.toLowerCase();
let h1Element= document.querySelector('h1');
let inputField =document.getElementById('userInput');
    if (h1Element.textContent === 'Which path do you want to take? Left or right.') {
        if (userInput === 'right') {
            h1Element.textContent = 'U fell into a hole. Game Over!';
        } else if (userInput === 'left') {
            h1Element.textContent = 'Do you want to swim or wait?';
        } else {
            h1Element.textContent = 'Game Over!';
        }
    } else if (h1Element.textContent === 'Do you want to swim or wait?') {
        if (userInput === 'swim') {
            h1Element.textContent = 'Attacked by Trout. Game Over!';
        } else if (userInput === 'wait') {
            h1Element.textContent = 'Choose the door between red, yellow, blue.';
        } else {
            h1Element.textContent = 'Game Over!';
        }
    } else if (h1Element.textContent === 'Choose the door between red, yellow, blue.') {
        if (userInput === 'yellow') {
            h1Element.textContent = 'Congratulations! You win!';
        } else if (userInput === 'red') {
            h1Element.textContent = 'Fire! Game Over!';
        } else if(userInput='blue'){
            h1Element.textContent = 'Eaten by beasts!game Over';
        }else{
            h1Element.textContent='Game over';
        }
    }
    inputField.value='';
}
