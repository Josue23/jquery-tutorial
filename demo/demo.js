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

















