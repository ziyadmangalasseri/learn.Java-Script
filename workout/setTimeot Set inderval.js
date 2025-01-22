let stop = setInterval(()=>{
    console.log("running")
},500)

setTimeout(() => {
    clearInterval(stop)
}, 10000);