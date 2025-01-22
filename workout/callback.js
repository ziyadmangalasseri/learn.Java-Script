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
























const sentence = "This is a test sentence to check each word length";

const words = sentence.split(' ');

for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length % 2 === 0) {
        console.log(`${word}: Even`);
    } else {
        console.log(`${word}: Odd`);
    }
}