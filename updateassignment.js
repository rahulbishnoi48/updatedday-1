const optionMenu = document.querySelector(".operation");
const startAnalysis = document.querySelector(".analyse");
const result = document.querySelector(".result");
const originalData = document.querySelector(".data");

startAnalysis.addEventListener("click", startComputation);

function startComputation() {
    let data = converter(originalData.value);
    let choice = Number(optionMenu.value);
    let ans;
    switch(choice) {
        case 1:
            ans = up(data);
            break;
        case 2:
            ans = down(data);
            break;
        case 3:
            ans = max(data);
            break;
        case 4:
            ans = min(data);
            break;
        case 5:
            ans = sum(data);
            break;
        case 6:
            ans = mean(data);
            break;
        case 7:
            ans = median(data);
            break;
        case 8:
            ans = stdev(data);
            break;
        default:
            alert('invalid option')
            break;
    }
    ans = "Your result is: " + ans;
    result.innerHTML = ans;
}

var converter=(str)=>{
    var arr=str.split(' ');
    for(let i=0;i<arr.length;++i)
    {
        if(arr[i]===NaN){
            alert('please check the value again ')
        } else {
            arr[i] = Number(arr[i].trim());
        }
    }
    return arr;
}
function up(arr1)
{
    arr1.sort((a,b)=>a-b)
    var string=" "
    for (let j of arr1)
    {
        string+=j+" ";
    }
    return string;
}
function down(arr1)
{
    arr1.sort((a,b)=>b-a)
    var string=" "
    for (let j of arr1)
    {
        string+=j+" ";
    }
    return string;
}
function max(arr1)
{
    return Math.max(...arr1);
}
function min(arr1)
{
    return Math.min(...arr1);
}            
function sum(arr1)
{
    let sum = 0;
    for (let i=0; i<arr1.length; i++) {
        sum += arr1[i];
    }
    return sum;
}
function median(arr1)
{
    arr1.sort((a,b)=>a-b)
    length=arr1.length
    var median=0
    let midIndex = Math.floor(length/2);
    if(length%2==0)
    {
        median = (arr1[midIndex] + arr1[midIndex-1])/2;
    }
    else
    {
        median=arr1[midIndex];
    }
    return median;
}
function mean(arr1)
{
    var total=sum(arr1);
    let meanarr=total/arr1.length
    return meanarr.toFixed(3);
}
function stdev(arr1)
{
    let meanarr=mean(arr1);
    let sd=0
    for(let i of arr1)
    {
        sd+=Math.pow(arr1[i]-meanarr,2)
    }
    sd/=length
    return Math.sqrt(sd).toFixed(3);
}
