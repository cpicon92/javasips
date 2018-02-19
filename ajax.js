var req = new XMLHttpRequest(); //req object tracks the request through its whole lifecycle
req.addEventListener("load", function() {
    console.log(this.status); //404/200/etc
    //if the data is just a string: 
    console.log(this.responseText);
    //if this was json then:
    var data = JSON.parse(this.responseText);
    data.something;
});
req.open("GET", "http://www.example.org/example.txt");
req.send();
