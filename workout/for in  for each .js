var array = [1, 2, 3, 4, 5, 6];
 array.splice(1,4);
 console.log(array);

// for (let index = 0; index < array.length; index++) {
//    console.log(array[index]);
// }


// for( x of array){
//     console.log(x);
// }



// for (x in array ){
//     console.log(array[x]);
// }




// array.forEach((value,index,array)=>{
//     console.log(value);
//     console.log(index);
//     console.log(array);
// })




// array.map((value,index,array)=>{
//     console.log(value);
//     console.log(index);
//     console.log(array);
// })



// var max = array.map(value => {
//    console.log( value%2==0);
// })
// console.log(max);


// var max = array.reduce((accumalator,value,index,array)=>{ 
//     return accumalator += value
// },0)
// console.log(max);




var max = array.filter((value) => {
    return value % 2 == 0;
})
console.log('max is',max);