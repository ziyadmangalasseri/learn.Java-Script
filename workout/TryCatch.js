
console.log("started");
var a=getvalue1();
var b,c;
try{
    b=getvalue2();
    c=main(a,b);
    console.log('try');

}catch(error){
    b=0;
    c=0;
    console.log("catch,",error);

}
finally{
    console.log("finalley ");
}
console.log(c);

function getvalue1(){
    return 20;
}
function getvalue2 (){
    
    // throw "what a error";
    return 30;
    }
    function main (a,b){
    return a+b;
}
