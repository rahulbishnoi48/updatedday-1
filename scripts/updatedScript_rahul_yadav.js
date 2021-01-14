"use strict"
let originalData = [];

let map = new Map();

function storeData() {
    originalData = document.getElementById("data").value.split(' ').map(Number);
    
    if(originalData.some(isNaN)){
        alert("please give correct input")
    }
}

function startAnalytics() {
    let optionSelected = Number(document.getElementById("option").value);
    let ans = getAns(optionSelected);
    if(ans.some(isNaN))
    {
        document.getElementById("results").value = "wrong inputs";
    }
    else{
        document.getElementById("results").value = ans;
    }
}

function getAns(choice) {
    
    if(map.get(choice) == undefined) {
        let result;
        console.log("in if");
        switch(choice) {
            case 1 : 
                        result = upFunction(originalData);
                        break;
            case 2 : 
                        result = downFunction(originalData);
                        break;
            case 3 : 
                        result = maxFunction(originalData);
                        break;
            case 4 : 
                        result = minFunction(originalData);
                        break;
            case 5 : 
                        result = sumFunction(originalData);
                        break;
            case 6 : 
                        result = medianFunction(originalData);
                        break;
            case 7 :  
                        result = meanFunction(originalData);
                        break;
            case 8 : 
                        result = stdevFunction(originalData);
                        break;
            default :
                        alert("Please recheck your option");
        }

        map.set(choice, result);
    }

    return map.get(choice);
}

function upFunction(data) {
    // to arrange in asec order

    let upData = data.sort(function(a,b) {
        return a-b;
    });
    return upData;
}

function downFunction(data) {
    // to arrange in desc order

    let downData = data.sort(function(b,a) {
        return a-b;
    });
    return downData;
}

function maxFunction(data) {
    // to calc max of given elements

    let upArray = getAns(1);
    return upArray[upArray.length-1];
}

function minFunction(data) {
    // to calc max of given elements
    
    let upArray = getAns(1);
    return upArray[0];
}

function sumFunction(data) {
    // sum of all no's
    
    let sum = 0;
    for(let i=0; i<data.length; i++) {
        sum += data[i];
    }
    return sum;
}

function medianFunction(data) {
    // to calc median : if odd return mid else sum of 2 mid

    data = getAns(1);
    let indexHalf = Math.floor(data.length/2);
    if(data.length%2) {
        return data[indexHalf];
    } else {
        return (data[indexHalf-1] + data[indexHalf])/2;
    }
}

function meanFunction(data) {
    // mean = sum/N
    
    let sum = getAns(5);
    return (sum/data.length).toFixed(3);
}

function stdevFunction(data) {
    
    let mean = getAns(7); 
    let deviation = 0;
    for(let i=0; i<data.length; i++) {
        deviation += Math.pow((data[i]-mean),2);
    }
    return (Math.sqrt(deviation/data.length).toFixed(3));
}