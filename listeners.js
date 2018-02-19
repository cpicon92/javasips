window.addEventListener("load", function(e) { //entry point for browser-based JS applications is always an event listener
    var btn = document.querySelector(".btn");
    btn.addEventListener("click", function(e) { //e contains information about the event
        if (e.button !== 0) return; //don't execute unless left button is pressed
        var flashyDiv = document.createElement("div");
        flashyDiv.textContent = "wayyy too flashy for my own good";
        flashyDiv.style.backgroundColor = "red"; //all .style properties of an Element correspond to CSS properties
        flashyDiv.style.height = 0;
        flashyDiv.style.transition = "height 500ms";
        document.body.appendChild(flashyDiv);
        var animateIn = function() { //another type of callback function
            flashyDiv.style.height = "200px";
        };
        window.setTimeout(animateIn, 1); //wait 1 ms and then call the function
        var hue = 0;
        //handle allows you to cancel later on
        var handle = window.setInterval(function() {
            flashyDiv.style.backgroundColor = "hsl(" + hue + ", 100%, 50%)";
            hue = (hue + 1) % 256;
        }, 30); //execute function every 30ms
    })
});
