console.log("JS Script start")

console.log("=================String Methods=================");

console.log("=================.forEach and Map()=================");

const egArray = [2, 5, 6, "nse", "bse", "dowJones", "TSE"]

function Iterate(arrayEle){
   const forMethod  =  arrayEle.forEach((item)=>{
    return item * 2  // forEach will give you undefined 
   })

   console.log("For Method");

   const mapMethod = arrayEle.map((item)=>{
    return item * 2  // Map method wwill create a new array and show result
   }) 

   console.log(mapMethod, "Map Method");
   
}

Iterate(egArray)