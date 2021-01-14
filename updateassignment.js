var converter=(str)=>{
    var arr=str.split(' ').map(Number)
    for(let i=0;i<arr.length;++i)
    {
        if(arr[i]==NaN){
            alert('please check the value again ')
        }
    }
    var total=0
    for(i=0;i<arr.length;++i)
    {
        total+=arr[i]
    }
    return [arr,total]
}
function up()
{
    var arr=converter(document.getElementById("text1").value)
    var arr1=arr[0]
    arr1.sort((a,b)=>a-b)
    var string=" "
    for (let j of arr1)
    {
        string+=j+" ";
    }
    alert(string)
}
function down()
{
    var arr=converter(document.getElementById("text1").value)
    var arr1=arr[0]
    arr1.sort((a,b)=>a+b)
    var string=" "
    for (let j of arr1)
    {
        string+=j+" ";
    }
    alert(string)
}
function max()
{
    var arr=converter(document.getElementById("text1").value)
    alert("maximum of all = "+Math.max(...arr[0]))
}
function min()
{
    var arr=converter(document.getElementById("text1").value)
    alert("minimum of all = "+Math.min(...arr[0]))
}            
function sum()
{
    var arr=converter(document.getElementById("text1").value)
    alert("sum of all = "+arr[1])
}
function median()
{
    var arr=converter(document.getElementById("text1").value)
    var arr1=arr[0]
    arr1.sort((a,b)=>a-b)
    length=arr1.length
    var median=0
    if(length%2==0)
    {
        median= ((arr1[length/2]+arr1[(length+1)/2])/2)
    }
    else
    {
        median=arr1[(length+1)/2]
    }
    alert("median of array = "+median)
}
function mean()
{
    var arr=converter(document.getElementById("text1").value)
    var arr1=arr[0]
    var total=arr[1]
    let meanarr=total/arr1.length
    alert("mean of array = "+meanarr.toFixed(3))
}
function stdev()
{
    var arr=converter(document.getElementById("text1").value)
    var arr1=arr[0]
    var total=arr[1];
    let meanarr=total/arr1.length
    let sd=0
    for(let i of arr1)
    {
        sd+=Math.pow(arr1[i]-meanarr,2)
    }
    sd/=length
    sd=Math.sqrt(sd)
    alert("standard deviation of array = "+sd.toFixed(3))
}
