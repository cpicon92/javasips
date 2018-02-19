window.addEventListener("load", function(e) { //entry point for browser-based JS applications is always an event listener
    var h1 = document.body.firstElementChild;
    h1 = document.querySelector("h1"); //the same thing (in this particular case)
    console.log("# of h1 children: " + h1.childNodes.length);
    console.log("# of h1 Element children: " + h1.children.length);
    console.log("Content of h1: " + h1.textContent);
    console.log("Content of comment Node in h1: " +  h1.childNodes[1].textContent);

    h1.textContent = "DOMtastic!!!"; //notice how this removes the comment Node from h1

    var p = document.querySelector(".main-text");
    var newComment = document.createComment("This wasn't here before...");
    p.appendChild(newComment);
    var newText = document.createTextNode("[New text]");
    p.appendChild(newText);
    var b = document.createElement("b");
    b.textContent = "BOLDDD"; //implicitely creates text node and appends to b
    p.appendChild(b);
    b.style.color = "red";
    b.setAttribute("something", "this does nothing");
});
