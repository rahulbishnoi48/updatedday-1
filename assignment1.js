const arr = [10,1,9,2,8,3,7,4,6]
console.log("up")
let length=arr.length
for(let i=0;i<length-1;++i)
{
    for(let j=i+1;j<length;++j)
    {
        if(arr[i]>arr[j])
        {
            [arr[i],arr[j]]=[arr[j],arr[i]]
        }
    }
}
console.log(arr)

console.log("down")
console.log(arr.reverse())
arr.sort()

console.log("max")
console.log(Math.max(...arr))
console.log("min")
console.log(Math.min(...arr))
console.log("median")

let sum=0
for(let i=0;i<length;++i)
    {
        sum+=arr[i];
    }
let mean= sum/length
console.log("sum")
console.log(sum)
let median=0
if(length%2==0)
{
    median= ((arr[length/2]+arr[(length+1)/2])/2)
}
else{
    median=arr[(length+1)/2]
}
console.log(median)
console.log("mean")
let meanarr=mean.toFixed(3)
console.log(meanarr)
console.log("stdev")
let sd=0
for(let i=0;i<length;++i)
{
    sd+=Math.pow(arr[i]-meanarr,2)
}
sd/=length
console.log(Math.sqrt(sd))