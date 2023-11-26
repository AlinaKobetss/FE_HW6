// 1. Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

function getNumbers(num1, num2){
    if(num1%2===0 && num2%2===0){
        return num1*num2;
    }
    else if(num1%2!==0 && num2%2!==0){
        return num1+num2;
    }
    else if(num1%2!==0 && num2%2===0){
        return num1;
    }
    else if(num1%2===0 && num2%2!==0){
        return num2;
    }
}

console.log(getNumbers(24, 148));
console.log(getNumbers(41, 13));
console.log(getNumbers(20, 11));
console.log(getNumbers(99, 156));

//2. Написать  функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам. 

function secondsToDays(seconds){
    let days = seconds / (24*60*60); //24 часа в сутках, 60мин в часе и 60сек в минуте
    return days;    
}
console.log(secondsToDays(691200));

//3. Написать функцию isPrime, которая принимает число и возвращает true, если оно простое (имеет только два делителя: 1 и само число), и false в противном случае.

function getPrime(n){
    if(n <=1){
        return false;
    }
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};
    
console.log(getPrime(17));
console.log(getPrime(16));

//4. Написать функцию, которая в качестве аргументов получает два числа и выводит в консоль наименьшее.

function getMin(a, b){
    let max;
    let min;
    let newArray = [];

    if(a>b){
        return b;
    }
         else if (b>a){
            return a;
        }
    else{
        return 0;
    }
}
console.log(getMin(15, 105));
console.log(getMin(87, 24));

//5. Написать  функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему. 

function getArray(a, b){
    let max;
    let min;
    let newArray = [];

    if(a<b){
        max = b;
        min = a;
    } else if (b<a){
        max = a;
        min = b;
    }else{
        return 0;
    }

    for(let i=min; i<=max; i++){

newArray.push(i);
    }
    return newArray;
}
console.log(getArray(15, 7));
console.log(getArray(47, 62));
console.log(getArray(198, 198));