// $(document).ready(function(){
//     $('p').click(function(){
//         $('img').show();
//     });
// });

// $(document).ready(() => {
//     $("button#hello").click(() => {
//         $("ul#user").prepend("<li>Hello</li>")
//         $('ul#browser').prepend('<li>Why Hello </li>')
//         $('li').css('background-color', 'green')
//         $('ul#user').children('li').first().click( function () {
//             $(this).remove();
//         })
//     });
//     $("button#goodbye").click(() => {
//         $("ul").prepend("<li>Goodbye</li>")
//     });
//     $("button#stop").click(() => {
//         $("ul").prepend("<li>Stop copying me</li>")
//     });
// });

$(document).ready(() => {
    $("#blanks form").submit(() => {
        $(".person1").append('blah blah');
        $(".person2").append('blah blah');
        $(".animal").append('blah blah');
        $("exclamation").append('blah blah');
        $(".verb").append('blah blah');
        $(".noun").append('blah blah');

        $("#story").show();
    })
})