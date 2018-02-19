$(function() { //this is the equivalent of window.addEventListener("load")
    var $btn = $(".btn"); //same as document.querySelectorAll(".btn")

    //jQuery will iterate over all the results of the query and apply the styles
    $btn.css({
        color: "red",
        "background-color": "red"
    });

    var $body = $(document.body); //$() can encapsulate existing element(s)

    //chaining
    $body.append(
        $("<div></div>").append( //another way the $() function can be used is to create a new Element
            $("<p></p>").text("some text") //sets textContent
            .addClass("text-paragraph")
        ).append($("<b></b>").html("<i>hello</i> loser")) //.html() sets/gets innerHTML
    );
    //result: <div><p class="text-paragraph">some text</p><b><i>hello</i> loser</b></div>

    //ajax
    $.get("ajax/test.html", function(data) {
        $(".result").html(data);
        console.log("GET was performed.");
    });
    //jQuery automatically serializes/parses JSON
    $.post("ajax/data.json", {hello: "some data", world: "more"}, function(data) {
        $(".result").html(data.hello);
        console.log("GET was performed.");
    });
});
