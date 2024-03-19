
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

data={"name":"chinmay","city":"agra"};

fetch("https://httpbin.org/post",{
    method:"POST",
    headers:{
        "Content-Type":'application/json',
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
    console.log('success',data);
})
.catch((error)=>{
    console.log("error",error);
});