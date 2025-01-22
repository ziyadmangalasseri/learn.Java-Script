                // CALLBACK CHAINING


// function sum (num1,num2,callback){
//     let sum = num1+num2;
//     callback(sum);
// }
// function multiplication (num1,num2,callback){
//     const ans = num1*num2;
//     callback(ans);
// }
// function division (num1,num2,callback){
//     div = num1/num2;
//     callback(div);

// }

// sum(10,20,(sum)=>{
//     console.log(sum);
//     multiplication(sum,sum,(mul)=>{
//         console.log(mul);
//         division(mul,2,(div)=>{
//             console.log(div);
//         });
//     })
// });

                // PROMIS CHAINING


// function sum (num1,num2){
//     return new Promise ((resolve,reject)=>{
//         if(num1==0){
//             reject("error");
//         }
//         resolve(num1+num2);
//     })
// }
// function muliply(num1,num2){
//     return new Promise ((resolve,reject)=>{
//         if(num1==0){
//             reject("error");
//         }
//         resolve(num1*num2);
//     })
// }
// function div (num1,num2){
//     return new Promise ((resolve,reject)=>{
//         if(num1==0){
//             reject("error");
//         }
//         resolve(num1/num2);
//     })
// }
// sum(25,25).then((ans)=>{
//     console.log(ans);
//     return muliply(ans,ans);

// }).then((multiple)=>{
//     console.log(multiple);
//     return div(multiple,10)

// }).then((div)=>{
//     console.log(div);
// })
// .catch((err)=>{
//     console.log(err);
// })




                    // ASYNC
// function global1 (value){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("success");
//         }, 3000);
//     })
// }

// function global2 (){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("81118070");
//         }, 2000);
//     })
// }
// async function getuser(){
//     var name = await global1();
//     console.log(name);
//     var number = await global2();
//     console.log(number);
// }

// getuser()



                    // THIS 


    // var person = {
    //     name : "navaneeth" ,
    //     age : 29,

    //       method (){
    //         var self = this;
    //             return function global(){
    //               return self;
    //             };
            
    //       }
    // };
   
    // const getname=person.method();
    // console.log(getname());
  


  //   function getanme (){
  //     console.log(this.name);
  //     console.log(this.age);
  //   }
  // var person1 = {
  //   name : "john",
  //   age : 24,
      
  // }
  // var person2 = {
  //   name : "roi",
  //   age : 34,
      
  // }
  // getanme.apply(person1);
  // getanme.call(person2);
  //  var shijin =  getanme.bind(person1);
  // shijin();



                  // CURRYING

    
    // function  multiply (x,y){
    //   console.log(x*y);
    // }

    // const multiplybytwo = multiply.bind(this,2);
    // multiplybytwo(5)

    

    // function global1(a){
    //   return function(b){
    //     return function(c){
    //       console.log(a+b+c);
    //     }
    //   }
    // }
    // global1(5)(5)(5)



    // function a (x){
    //   return function b (y){
    //     return function c (z){
    //       console.log(x+y+z);
    //     }

    //   }
    // }
    // a(10)(20)(30);


                
//  var a = 8
//  var b = "8"
//  console.log(a==b);
//  console.log(a===b);
 
 