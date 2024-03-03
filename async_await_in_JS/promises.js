async function say_hello(){
    return new Promise((resolve,reject)=>{
        //resolve after 2 seconds
        setTimeout(function(){
            resolve("async hello");
        },2000);
    })
}
//using await
async function greetings(){
console.log("before function call");
wish=await say_hello()
console.log(wish);
console.log("after function call");
}
greetings();

//// without using await
//console.log("before function call");
// wish=say_hello().then(result=>console.log(result));//"async hello"
// console.log("after function call");