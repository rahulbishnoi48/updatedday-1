function startAnalytics() {
    let optionSelected = Number(document.getElementById("option").value);
    let originalData = document.getElementById("data").value.split(',');
    for(let i=0; i<originalData.length; i++) {
        originalData[i] = Number(originalData[i].trim());
    }
    let ans;
    switch(optionSelected) {
        case 1 : 
                    ans = upFunction(originalData);
                    break;
        case 2 : 
                    ans = downFunction(originalData);
                     break;
        case 3 : 
                    ans = maxFunction(originalData);
                    break;
        case 4 : 
                    ans = minFunction(originalData);
                    break;
        case 5 : 
                    ans = sumFunction(originalData);
                    break;
        case 6 : 
                    ans = medianFunction(originalData);
                    break;
        case 7 :  
                    ans = meanFunction(originalData);
                    break;
        case 8 : 
                    ans = stdevFunction(originalData);
                    break;
        default :
                    alert("Please recheck your option");
    }
    document.getElementById("results").innerHTML = "Ans : " + ans;
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
    let downData = data.sort(function(a,b) {
        return b-a;
    });
    return downData;
}

function maxFunction(data) {
    // to calc max of given elements
    return (downFunction(data)[0]);
}

function minFunction(data) {
    // to calc max of given elements
    return (upFunction(data)[0]);
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
    data = upFunction(data);
    let indexHalf = Math.floor(data.length/2);
    if(data.length%2) {
        return data[indexHalf];
    } else {
        return (data[indexHalf-1] + data[indexHalf])/2;
    }
}

function meanFunction(data) {
    // mean = sum/N
    return ((sumFunction(data)/data.length).toFixed(3));
}

function stdevFunction(data) {

    let mean = meanFunction(data);
    let deviation = 0;
    for(let i=0; i<data.length; i++) {
        deviation += Math.pow((data[i]-mean),2);
    }
    return (Math.sqrt(deviation/data.length).toFixed(3));
}