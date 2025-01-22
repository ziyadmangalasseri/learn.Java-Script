
   // function

// var a=4
//    function sum(num){
//       var  ans=num*num
//       return ans 
//    }
//   var  sum2=sum(a)
//   var sum3=sum(5)

//   document.write(sum3)

      // anonymous function

//    var fun1=function(){
//       ans=num+num
//       console.log(ans);
//    }   
//    var num=5
//    fun1()

         // arrow function

//    const num=1
//    const fun1 = ()=> console.log(num+num)
//    fun1()

// console.log("hello");

     

            // SET TIMEOUT


// function sample(num1,num2){
//    var a=10
//    setTimeout(() => {
//       console.log("hello world");
//    }, 3000);
//    console.log(a);
// }

// sample()



//   for(var i=1;i<=5;i++){
//    function global(a){
//       setTimeout(() => {
//          console.log(a);
//       }, 1000*a);
//      }
//      global(i)
//    }
 

for(let i=1;i<=5;i++){
      setTimeout(() => {
         console.log(i);
      }, i*1000);
     }


 


            // CLOSURE 




//  function outer(){
//    let a = 10
//    console.log("outer");
//       function inner(){
//             console.log("inner");
//          function t(){
//             console.log(a);
//          }
//          return t
//       }
//       return inner
//  }
//  outer()()()
 
 

// function global(){
//    var count=0
//    return function inner(){
//       count++
//       console.log(count);
//    }
// }
// global()()



            // CALL BACK

// console.log("start");

// function global(callback){
//    setTimeout(() => {
//       callback("Hello World");
//    }, 3000);
// }
// global((value)=>{
//    console.log(value);
// })

// console.log("end" );



// CALLBACK HELL


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
// global1((value1)=>{
//    global2((value2)=>{
//       global3((value3)=>{
//          global4((value4)=>{
//             console.log(value1+value2+value3+value4);
//          })
//       })
//    })
// })

// console.log("end" );








//  var m=10
//  var value1 =100

// function navaneeth(callback,c){
//    callback(()=>{
//       console.log("hello world");
//    })
//    sum=c+c
//    console.log(c);
//    return sum
// }
// var k = navaneeth((value)=>{
//    console.log(value);
//    console.log("shijin");
//    value()
// },m)
// console.log(sum);
// console.log(k);

// (()=>{
//    console.log("hello world1");
// })();



               // PROMISE

// const promise=new Promise((resolve,reject)=>{
//    if(true){
//       resolve(10);
//    }
//    else{
//       let err=new Error("this is not valid");
//       reject(err);
//    }
// })
// promise.then(result=>{
//    console.log(result);
//    return result+10;
// })
// .then(result=>{
//    console.log(result);
//    return result*10;
// })
// .then(result=>{
//    console.log(result);
//    return result-5;
// })
// .then(result=>{
//    console.log(result);
// })
// .catch(err=>{
//    console.log(err.message);
// })



// var count =0
//  function global1(para1){
//    para1(10)
//    count++
//  }
//  function global2(para2){
//    para2(20)
//    count++
//  }
//  function global3(para3){
//    para3(10)
//    count++
//  }
//  function global4(para4){
//    para4(10)
//    count++
//  }
//  global1((value1)=>{
//    global2((value2)=>{
//       global3((value3)=>{
//          global4((value4)=>{
//             console.log(value1+value2+value3+value4);
//          })
//       })
//    })
//  })
//  console.log(count );

 

// letresult;
// result=3-"2"
// // console.log(a);
// console.log("result:",typeof((result))  );


// var obj = {
//    name : "shijin",
//    place : "mala"
// }
 
// obj2 = obj
// obj2.name="navaneed"

// console.log(obj);
// console.log(obj2);






            // PROMIS





//             let p1 = new Promise ((reslove,reject)=>{
//                   reslove();
//             })
            
//             p1.then(()=>{
//                   console.log("success");
//             })
//             .catch(()=>{
//                   console.log("failed");
//             })

            


// const promise = new Promise((resolve,reject) => {
//       setTimeout(() => {
//             resolve("success");
//       }, 3001);
//       setTimeout(() => {
//            reject("error")
//       }, 3000);
// });

// promise.then((response)=>{
//       console.log(response);
// }).catch((error) =>{
//       console.log(error);
// })

 

// function global1(num){
//       return new Promise((resolve,reject)=>{
//                   resolve (num);
//             })
// }
// function global2(num){
//       return new Promise((resolve,reject)=>{
//                   resolve(num)
//       })
// }

// global1(10)
// .then((response)=>{
//       return global2(response+10)
// })
// .then((response)=>{
//       console.log(response);
// })


// ALL & ALLSETTLED & ANY & RACE 


// let pro1 = new Promise((resolve,reject)=>{
//       resolve(["python ","java"])
//       // reject("failed")
// })
// let pro2 = new Promise ((resolve , reject )=>{
     
//       resolve(["angular","react"])
//       // reject("failed")
// })
// let pro3 = new Promise((resolve,reject)=>{
//       resolve(["ruby","c++"])
//       // reject("failed") 
// })
// //             ALL-fist rejecting closing
// const allpromise=Promise.all([pro1,pro2,pro3])
// //             ALLSETTLED-all woriking
// // const allpromise=Promise.allSettled([pro1,pro2,pro3])
// //             ANY-first resolve
// // const allpromise=Promise.any([pro1,pro2,pro3])
// // //             RACE-first resolve or reject
// // const allpromise=Promise.race([pro1,pro2,pro3])

// allpromise.then((res)=>{
//       // console.log(res);
//       // console.log(res.flat());
//       console.log(res.flat(Infinity));
// })
// .catch((err)=>{
//       console.log(err);
// })



                  // ASYNC / AWAITE



// const promise = new Promise((resolve,reject)=>{
//       resolve("success")
//       reject("error")
// }); 



//  async function paral(){
//       try{
//             const res = await promise;
//             console.log(res);
//       }catch(error){
//             console.log(error);
//       }
//   }
//   paral()
 

            // IIFE   -  Immediately Invoked Function Expression
// ( async function jax () {
//       const res = await promise
//       .catch((err)=>{
//             console.log(err);
//       });if(res){
//             console.log(res);
//       }
     
// })();
 


            // NORMAL PROMISE     
// promise.then((res)=>{
//       console.log(res);
// })
// .catch((err)=>{
//       console.log(err);
// })

            




// console.log(a);
// var a = 10 ;
// console.log(a);

// b()
// var b = function(){
//       const c = 20 ;
//       console.log(c);

// }

