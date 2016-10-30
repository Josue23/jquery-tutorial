window.onload = function() {
    alert("Welcome");
};

$(document).ready(function() {
    $('test').click(function() {
        alert("Thanks for visiting!");
    });
});

$(document).ready(function() {
    $('a').click(function(event) {
        alert("The link will no longer take you to jquery.com");
        event.preventDefault();
    });
});

// Adding and Removing an HTML Class
$("a").addClass("test");
$("a").removeClass('test');


// Special Effects
// The link slowly disappears when clicked
$("a").click(function(event) {
    event.preventDefault();
    $(this).hide("slow");
});



// Callbacks and Functions













