let answerDisplay = '0';
let previousOperation;
let runningTotal = 0;
answer = document.querySelector('.answer')
operator = document.querySelector('.operator')


function buttonClick(value){
    if (isNaN(value)===true){
        handleSymbol(value)
    }else{
        handleNumber(value)
    }
    rerender()
}

function handleNumber(number){
    if (answerDisplay === '0'){
        answerDisplay = number;
    }else{
        answerDisplay += number;
    }
}

function handleMath(value){
    if (answerDisplay === '0'){
        doOperation(realAnswer);
    }
    const realAnswer = parseInt(answerDisplay);
    if (runningTotal === 0){
        runningTotal = realAnswer;
    }else{
        doOperation(realAnswer)
    }
    
    previousOperation = value;
    answerDisplay = '0';
}

function handleSymbol(symbol) {
    switch (symbol) {
        case '←':
            if (answerDisplay.length == 1) {
                answerDisplay = '0';
            } else {
                answerDisplay = answerDisplay.substring(0, answerDisplay.length - 1);
            }
            break;
        case 'C':
            answerDisplay = '0';
            runningTotal = 0;
            previousOperation = null;
            break;
        case '=':
            if (previousOperation) {
                doOperation(parseFloat(answerDisplay)); // Use `parseFloat` for calculations
                previousOperation = null;
                answerDisplay = '' + runningTotal;
                runningTotal = 0;
            }
            break;
        case 'log':
        case 'cos':
        case 'sin':
        case 'tan':
            previousOperation = symbol; // Store the operation for later use
            break;
    }
}

function doOperation(realAnswer) {
    switch (previousOperation) {
        case 'log':
            runningTotal = Math.log(realAnswer);
            break;
        case 'sin':
            runningTotal = Math.sin((realAnswer * Math.PI) / 180); // Convert to radians
            break;
        case 'cos':
            runningTotal = Math.cos((realAnswer * Math.PI) / 180); // Convert to radians
            break;
        case 'tan':
            runningTotal = Math.tan((realAnswer * Math.PI) / 180); // Convert to radians
            break;
    }
}

function init(){
    document
    .querySelector('.calculator-container')
    .addEventListener('click', function(event){
        buttonClick(event.target.innerText);
     })
}

function rerender(){
    answer.innerText = answerDisplay;
}
init();
