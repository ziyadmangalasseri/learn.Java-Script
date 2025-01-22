function global1 (){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve("success");
        }, 3000);
    })
}
function global2 (){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve("81118070");
        }, 2000);
    })
}
async function getuser(){
    var name = await global1();
    console.log(name);
    var number = await global2();
    console.log(number);
}
getuser()