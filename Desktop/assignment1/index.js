var ans=[];
var values=[];
function call_function()
    {
        var res = document.getElementById("input_box").value;
        var ans = res.split(',');
        console.log(ans);
  
 
     for(i = 0  ; i < ans.length ; i++)
    {
        values.push(parseFloat(ans[i]));
    }
}
    function printt(){
    for(i = 0 ; i < values.length;i++)
    console.log(values[i]);
    }

//up function that sorts array in ascending order
function up(nums)
{
    console.log(nums.sort((a,b)=>a-b));
}


//down function that sorts array in descendinr order
function down(nums)
{
    
    return nums.sort((a,b)=>b-a);
}

//function that returns max element of the array
function max(nums)
{
    var temp = nums[0];
    for(var i=0;i<nums.length;i++)
    {
        temp = Math.max(nums[i],temp);
    }
    console.log(temp);
}

//function that return min element from the array
function min(nums)
{
    var temp = nums[0];
    for(var i=0;i<nums.length;i++)
    {
        temp = Math.min(nums[i],temp);
    }
    return temp;
}

//function that calculates sum of all elements 
function sum(nums)
{
    var temp = 0;
    for(var i=0;i<nums.length;i++)
    {
        temp = temp + nums[i];
    }
    return(temp);
}

//function to get median of the array
function median(nums)
{
    if(nums.length%2 != 0)
        return nums[Math.floor(nums.length/2)];
    return nums[Math.floor(nums.length/2)] + nums[Math.floor((nums.length-1)/2)];
}

//standard deviation function
function std_dev(nums)
{
    var temp = 0;
    var t = mean(nums);
    for(var i=0;i<nums.length;i++)
    {
        temp = temp + (nums[i]-t)*(nums[i]-t);
    }
    return Math.sqrt(temp/nums.length);
}

//mean function

function mean(nums)
{
    return sum(nums)/nums.length;
}

function find_max()
{
    max(values);
}
function find_min()
{
    min(values);
}
function up_fun()
{
    up(values);
}
function find_sum()
{
    console.log(sum(values));
}
function median_fun()
{
    console.log(median(values));
}
function mean_fun()
{
console.log(mean(values));
}
function std_dev_fun(){
console.log(std_dev(values));
}
function down_fun()
{
console.log(down(values));
};