async function say_hello(){
    return new Promise((resolve,reject)=>{
        //resolve after 2 seconds
        setTimeout(function(){
           reject("reject: async hello");
        },2000);
    })
}
say_hello().then((v)=>console.log(v)).catch(e=>{console.log("got error");
                                                    console.log(e)});