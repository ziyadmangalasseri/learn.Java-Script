function sum (num1,num2){
    
    return new Promise ((resolve,reject)=>{
        if(num1==0){
            reject("error");
        }
        resolve(num1+num2);
    })
}
function muliply(num1,num2){
    return new Promise ((resolve,reject)=>{
        if(num1==0){
            reject("error");
        }
        resolve(num1*num2);
    })
}
function div (num1,num2){
    return new Promise ((resolve,reject)=>{
        if(num1==0){
            reject("error");
        }
        resolve(num1/num2);
    })
}
sum(25,25).then((ans)=>{
    console.log(ans);
    return muliply(ans,ans);

}).then((multiple)=>{
    console.log(multiple);
    return div(multiple,10)

}).then((div)=>{
    console.log(div);
})
.catch((err)=>{
    console.log(err);
})


