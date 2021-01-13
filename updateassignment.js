function up()
            {
                var str=document.getElementById("text1").value;
                var arr=str.split(' ')
                for(let i=0;i<arr.length;++i)
                {
                    arr[i]=Number(arr[i]);
                }
                var length=arr.length
                console.log(str)
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
                var string=" "
                for (let j of arr)
                {
                    string+=j+" ";
                }
                alert(string)
            }
            function down()
            {
                var str=document.getElementById("text1").value;
                var arr=str.split(' ')
                for(let i=0;i<arr.length;++i)
                {
                    arr[i]=parseInt(arr[i],10);
                }
                var length=arr.length
                for(let i=0;i<length-1;++i)
                {
                    for(let j=i+1;j<length;++j)
                    {
                        if(arr[i]<arr[j])
                        {
                            [arr[i],arr[j]]=[arr[j],arr[i]]
                        }
                    }
                }
                var string=" "
                for (let j of arr)
                {
                    string+=j+" ";
                }
                alert(string)
            }
            
            function max()
            {
                var str=document.getElementById("text1").value;
                var arr=str.split(' ')
                for(let i=0;i<arr.length;++i)
                {
                    arr[i]=parseInt(arr[i],10);
                }
                alert("maximum of all = "+Math.max(...arr))
            }
            function min()
            {
                var str=document.getElementById("text1").value;
                var arr=str.split(' ')
                for(let i=0;i<arr.length;++i)
                {
                    arr[i]=parseInt(arr[i],10);
                }
                alert("minimum of all = "+Math.min(...arr))
            }
            
            function sum()
            {
                var str=document.getElementById("text1").value;
                var arr=str.split(' ')
                for(let i=0;i<arr.length;++i)
                {
                    arr[i]=parseInt(arr[i],10);
                }
                var length=arr.length
                var total=0;
                for(i=0;i<length;++i)
                {
                    total+=arr[i]
                }
                alert("sum of all = "+total)
            }
            function median()
            {
                var str=document.getElementById("text1").value;
                var arr=str.split(' ')
                for(let i=0;i<arr.length;++i)
                {
                    arr[i]=parseInt(arr[i],10);
                }
                var length=arr.length
                let median=0
                if(length%2==0)
                {
                    median= ((arr[length/2]+arr[(length+1)/2])/2)
                }
                else{
                    median=arr[(length+1)/2]
                }
                alert("median of array = "+median)
            }
            
            function mean()
            {
                var str=document.getElementById("text1").value;
                var arr=str.split(' ')
                for(let i=0;i<arr.length;++i)
                {
                    arr[i]=parseInt(arr[i],10);
                }
                var length=arr.length
                var total=0;
                for(i=0;i<length;++i)
                {
                    total+=arr[i]
                }
                let meanarr=total/length
                alert("mean of array = "+meanarr.toFixed(3))
            }
            function stdev()
            {
                var str=document.getElementById("text1").value;
                var arr=str.split(' ')
                for(let i=0;i<arr.length;++i)
                {
                    arr[i]=parseInt(arr[i],10);
                }
                var length=arr.length
                var total=0;
                for(i=0;i<length;++i)
                {
                    total+=arr[i]
                }
                let meanarr=total/length
                let sd=0
                for(let i=0;i<length;++i)
                {
                    sd+=Math.pow(arr[i]-meanarr,2)
                }
                sd/=length
                alert("standard deviation of array = "+Math.sqrt(sd))
            }
