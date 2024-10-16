const LCD = {
    history: $('#calculatorHistory'),
    currentNumber: $('#calculatorCurrentShowNumber'),
    action: $('#calculatorCurrentShowAction'),
}

function ClearAll(makeHR = false) {
    LCD.action.text('')
    LCD.currentNumber.val(0)
    if (makeHR) {
        LCD.history.text('')
    } else if (makeHR === false) {
        LCD.history.append('<hr/>')
    }

}