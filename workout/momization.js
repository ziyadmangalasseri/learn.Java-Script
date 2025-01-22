  // MEMOIZATION

                  
  // function global(){
  //   let cache = {};
  //   return function (num){

  //     if(num in cache){
  //       console.log("if working");
  //       console.log(cache)
  //       console.log(cache[num]);
  //     }else{
  //      console.log(`long time`);
  //      cache[num]=num*2;
  //      console.log(cache[num]);
  //     }
      
  //   }
  // }
  // let multiplybytwo = global();
  // multiplybytwo(5);
  // multiplybytwo(10);  
  // multiplybytwo(5);

  function memoizedFib() {
    const cache = {};
    
    function fib(n) {
        if (n in cache) {
            return cache[n];
        } else {
            if (n <= 1) {
                cache[n] = n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                console.log(cache[n]);
                
            }
            return cache[n];
        }
    }

    return fib;
}

const fib = memoizedFib();

fib(1000);  // Output: 55
// console.log(fib(40));  // Output: 102334155 (Computed much faster)
