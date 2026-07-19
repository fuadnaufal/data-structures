// {1. if Statement}
// 1. The simple if statement
var mid = 25;
var month = 2;
var num = 0;
var high = 50;
var low = 1;
var current = 13;
var found = -1;
if(current < mid) {
    console.log(mid = (current - low ) / 2);
}

// 2. The if-else statement
if(num == 1) {
    console.log("num is equal to 1");
} else {
    console.log("num is no equal to 1, the value of num " + num);
}

// 3. The if-else if statement
if(month === 1) {
    console.log("January");
} else if(month === 2) {
    console.log("February");
} else if(month === 3) {
    console.log("March")
} else {
    console.log("Month is not January, February or March");
}

// 4. Switch
var monthNum = 4;
switch(monthNum) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Bad input");
}

