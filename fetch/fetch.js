
// fetch("https://httpbin.org/uuid").then(response => response.json()).then(data => console.log(data));


fetch("https://httpbin.org/uuid/404").then(function(response){
    console.log(response);
    if(!response.ok){
        console.log("response not ok");
        throw new Error('HTTP error,status='+ reponse.status);
    }
    return response.json;
} ).then(function(data){console.log("got data" ,data)}).catch(function(error){
    console.log("in catch",error)
});