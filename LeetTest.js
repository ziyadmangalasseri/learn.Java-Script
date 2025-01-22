
var array=[2,7,11,15];
var twoSum = function(nums, target) {
    var sum=0
    for(var i=0;i<=4;i++){
         sum = sum + array[i];
        if(sum>=9){
            break;
        }
    }
    return sum
};
var answer = twoSum()
console.log(answer)