// console.log("start");

// function global1(callback){
//    setTimeout(() => {
//       callback(10)
//    }, 1000);
// }
// function global2(callback){
//    setTimeout(() => {
//       callback(10)
//    }, 1000);
// }
// function global3(callback){
//    setTimeout(() => {
//       callback(100)
//    }, 1000);
// }
// function global4(callback){
//    setTimeout(() => {
//       callback(100)
//    }, 1000);
// }
// function global5(callback){
//    setTimeout(() => {
//       callback(2)
//    }, 500);
// }
// global1((value1)=>{
//    global2((value2)=>{
//       global3((value3)=>{
//          global4((value4)=>{
//             global5((value5)=>{
//                console.log((value1+value2+value3+value4)*(value5));
//             })
//          })
//       })
//    })
// })
// console.log("end" );





// function sum(a, b, callback) {
//    sum1 = a + b;
//    callback(sum1)
// }
// function mul(value1, callback) {
//    mul1 = value1 * 3;
//    callback(mul1)
// }
// function sub (value2, callback){
//    sub1 = value2-10
//    callback(sub1)
// }
// function div (value3,callback){
//    div1 = value3/2
//    callback(div1)
// }
// function mod (value4 ,callback){
//    mod1 = value4%3
//    callback(mod1)
// }

// sum(10, 20, (value1) => {
//    console.log(value1);
//    mul(value1, (value2) => {
//       console.log(value2);
//          sub (value2, (value3)=>{
//             console.log(value3);
//                div(value3,(value4)=>{
//                   console.log(value4);
//                      mod(value4,(value5)=>{
//                         console.log(value5); 

//                      })
//                })
//          })
//    })
// })






const global = new Promise((resolve, reject) => {
   if (true) {
      resolve(20)
   }
   else {
      reject("error")
   }
})

global.then((a) => {
   return a + 10
})
   .then((value1) => {
      console.log(value1);
      return value1 * 3
   })
   .then((value2) => {
      console.log(value2);
      return value2 - 20
   })
   .then((value3) => {
      console.log(value3);
      return value3 / 2
   })
   .then((value4) => {
      console.log(value4);
      return value4 % 10
   })
   .then((value5) => {
      console.log(value5);
   })
   .catch((err) => {
      console.log(err);
   })
