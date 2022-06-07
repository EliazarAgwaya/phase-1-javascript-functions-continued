// code your solution here
function saturdayFun(fun="roller-skate"){
    return `This Saturday, I want to ${fun}!`;
}
saturdayFun("code");

const mondayWork=function(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}
mondayWork("be indoors");
function wrapAdjective(symbol="*"){
    return function(book="special"){
        return `You are ${symbol}${book}${symbol}!`;
    }
}
wrapAdjective();