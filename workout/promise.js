const promise=new Promise((resolve,reject)=>{
    if(true){
       resolve(10);
    }
    else{
       let err=new Error("this is not valid");
       reject(err);
    }
 })
 promise.then((result)=>{
    console.log(result);
    return result+10;
 })
 .then((result)=>{
    console.log(result);
    return result*10;
 })
 .then(result=>{
    console.log(result);
    return result-5;
 })
 .then(result=>{
    console.log(result);
 })
 .catch(err=>{
    console.log(err.message);
 })



// ALL & ALLSETTLED & ANY & RACE 


// let pro1 = new Promise((resolve,reject)=>{
//       resolve(["python ","java"])
//       // reject("failed")
// })
// let pro2 = new Promise ((resolve , reject )=>{
     
//       // resolve(["angular","react"])
//       reject("failed")
// })
// let pro3 = new Promise((resolve,reject)=>{
//       resolve(["ruby","c++"])
//       // reject("failed") 
// })
//             ALL-fist rejecting closing
// const allpromise=Promise.all([pro1,pro2,pro3])
//             ALLSETTLED-all woriking
// const allpromise=Promise.allSettled([pro1,pro2,pro3])
//             ANY-first resolve
// const allpromise=Promise.any([pro1,pro2,pro3])
// //             RACE-first resolve or reject
// const allpromise=Promise.race([pro1,pro2,pro3])

// allpromise.then((res)=>{
//       // console.log(res);
//       // console.log(res.flat());
//       console.log(res.flat(Infinity));
// })
// .catch((err)=>{
//       console.log(err);
// })



 
 