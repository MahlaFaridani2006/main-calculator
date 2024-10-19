"use strict";
/* ui data*/
const LCD = {
    history: $('#history'),
    currentNumber: $('#show-number'),
    action: $('#show-action'),
}
/* process data*/
const process = {
    action: '',
    nextNum: 0,
    result: 0,
}

/*
clear ui & Process
params isAll: boolean
*/
function doClear(isAll = false) {
    LCD.action.text('');
    LCD.currentNumber.val('');
    process.action = '';

    if (isAll) {
        LCD.history.text('');
    } else {
        process.nextNum = 0;
        process.result = 0;
        LCD.history.append('<hr/>');
    }

}

/*
get action from user
* params action must be one of '* - / +'
*/
function setAction(action) {
    LCD.action.text(action);
    if (process.action !== '') {
        doAction(action);
    } else {
        process.action = action;
    }
}
/*
get action from setAction
params action:number
*/
function doAction(action) {
    const result = 0;
    addHistory(result);
    process.action = action;
}

/*
just for showing history in ui
params result:number
*/
function addHistory(result) {
    let elements=(`${process.result} ${process.action} ${process.nextNum}=${result}`);
    LCD.history.append(elements);
}