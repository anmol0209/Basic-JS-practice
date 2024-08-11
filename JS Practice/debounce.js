// Debuncing is a method to delay a function until its task is completed using setTimeout
function delayFun(func, delay){

console.log(func, delay, "delay and func");
  let timer

   return function(){
    clearTimeout(timer)
    timer =  setTimeout(func, delay)
    console.log(timer,"delay function");
   } 
}

let delay = 5000

const func = (a,b)=> {
    console.log(a,b,"a,b");
    return a + b 
}

delayFun(func(2,3),delay)



console.log(delayFun(func, delay), "delay Function check");
