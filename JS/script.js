// $(document).ready(function(){
//     $('p').click(function(){
//         $('img').show();
//     });
// });

$(document).ready(() => {
    $("button#hello").click(() => {
        $("ul#user").prepend("<li>Hello</li>")
        $('ul#browser').prepend('<li>Why Hello </li>')
        $('li').css('background-color', 'green')
        $('ul#user').children('li').first().click( function () {
            $(this).remove();
        })
    });
    $("button#goodbye").click(() => {
        $("ul").prepend("<li>Goodbye</li>")
    });
    $("button#stop").click(() => {
        $("ul").prepend("<li>Stop copying me</li>")
    });
});