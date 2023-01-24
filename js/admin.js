const httpRequest = new XMLHttpRequest();
const url = "https://reqres.in/api/users?page=2";
httpRequest.open("GET", url);
httpRequest.send();
httpRequest.onload = function(){
    console.log(httpRequest);
    if(httpRequest.status == 200)
    {
        data = JSON.parse(httpRequest.responseText);
        console.log(data);
    }
}

document.getElementById("btn").onclick = function(){
    httpRequest.open("POST","https://reqres.in/api/users");
    httpRequest.send(
        {
            "name": "morpheus",
            "job": "leader"
        }
    );
    httpRequest.onload = function(){
        console.log(httpRequest);
    }
}