function getData(){
    var request = new XMLHttpRequest();
    request.open("get", "https://restcountries.com/v3.1/name/bharat");
    request.send();
    request.addEventListener("load", () => {
        var [data] = JSON.parse(request.responseText)
        console.log(data);
    })
}
getData();