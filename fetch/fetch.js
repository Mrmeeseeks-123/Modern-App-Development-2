
// fetch("https://httpbin.org/uuid").then(response => response.json()).then(data => console.log(data));


// fetch("https://httpbin.org/uuid/404").then(function(response){
//     console.log(response);
//     if(!response.ok){
//         console.log("response not ok");
//         throw new Error('HTTP error,status='+ response.status);
//     }
//     return response.json;
// } ).then(function(data){console.log("got data" ,data)}).catch(function(error){
//     console.log("In catch",error)
// });

// data={"name":"chinmay","city":"agra"};

// fetch("https://httpbin.org/post",{
//     method:"POST",
//     headers:{
//         "Content-Type":'application/json',
//     },
//     body: JSON.stringify(data)
// })
// .then(response => response.json())
// .then(data => {
//     console.log('success',data);
// })
// .catch((error)=>{
//     console.log("error",error);
// });


//for the form
// form =new FormData(document.getElementById("my-form"));
// fetch("https://httpbin.org/put",{
//     method:"PUT",
//     body:form
// }).then(response => response.json())
// .then(result => console.log("success",result))
// .catch(error => console.error("error",error))

// download a blob
fetch("https://httpbin.org/image/jpeg").then((response)=>{
    console.log("got it");
    return response.blob();
}).then((myblob)=>{
    console.log(myblob);
}).catch((error)=>{
    console.log("error",error.message)
})

//using headers

myheader= new Headers();
myheader={
    "Content-Type":"application/json"
}

const myrequest= new Request("https://httpbin.org/post",{
    method:"POST",
    headers:myheader,
    mode:"cors",
    cache:"default"
})
fetch(myrequest).then(response=>response.json()).then(data => console.log(data));

//using async await
async function func1(){
response= await fetch("https://httpbin.org/uuid");
data=await response.json();
console.log(data);}
func1();