console.log("JS Script start")

console.log("=================String Methods=================");

console.log("=================.slpit()=================");

const link = "https://example.com/search?query=example&filter=recent&sort=asc"


function URLobj(url){
    const splitURL = url.split("?")
    const splitagain = splitURL[1].split("&")
    const newObj = {}
    
    splitagain.forEach(item => {
    let [key, value] = item.split("=")
    
     newObj[key] = value
    })
    console.log(newObj)
}

URLobj(link)

console.log("=================end .slpit()=================");


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