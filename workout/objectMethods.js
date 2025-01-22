var person = {
    name : "john",
    age : 27,
    place : "calicut",
    disply : function (){
        console.log('this . name :',this.name);
        return this.age;
    }
}


person.dob="20-10-2004"

console.log('display function : ',person.disply());
person.displydob = function(){
    console.log(person.dob);
    return this.place;
}
console.log(person.displydob());
for (x in person){
    console.log(person[x]);
    // return this.age;
}



                // OBJECT CONSTRUCTOR


//  function person(name,age,place,pin){
//     this.name=name,
//     this.age=age,
//     this.place=place
//     this.addres={
//         pin:pin,
//     }
//     this.display=function(){
//         console.log('name is :' + name + '  ,age : '+ age +'  ,place is '+ place + " pin is : "+pin);
//     }
//  }

//  var vishnu = new person ("vishnu",27,"thoondhayyad");
//  var shijin = new person ("shijin",24,"kondoty")
//  var ziyad = new person ("ziyad ",18,"malalppuram","679324")

//  ziyad.display();
//  vishnu.display();
//  shijin.display();



// let a ={
//     name:'rifahad',
//     age:21,

// }

// const {...name}  = a
// console.log(name);


                // DATE

//  let d =new Date( "20 january 2004");
//  console.log(d.getDate())



// var user = {
//     name : "ajnas",
//     // address : {
//     //     city : "kondotty"
//     // }
// }

// console.log(user.address.city);


// var twoSum = function(nums, target) {
//     array=[2,7,11,15];
//     for(var i=0;i<=4;i++){
//         var sum = 0;nb
//          sum = sum + array[i];
//         if(sum==10){
//             break;
//         }
//     console.log(sum);
//     }
   
// }; 
// twoSum()


// var a=10;
// var b=a++;
// console.log(b,a);