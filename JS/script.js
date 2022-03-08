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

// $(document).ready(() => {
//     $("#blanks form").submit((event) => {
//         $(".person1").append('blah blah');
//         $(".person2").append('blah blah');
//         $(".animal").append('blah blah');
//         $(".exclamation").append('blah blah');
//         $(".verb").append('blah blah');
//         $(".noun").append('blah blah');

//         $("#story").show();
//         event.preventDefault();
//     })
// })

$(document).ready(() => {
    $("#blanks form").submit((event) => {
        let person1Input = $("input#person1").val();
        let person2Input = $("input#person2").val();
        let aniamlInput = $("input#animal").val();
        let exclamationInput = $("input#exclamation").val();
        let verbInput = $("input#verb").val();
        let nounInput = $("input#noun").val();

        $('.person1').text(person1Input);
        $('.person2').text(person2Input);
        $('.animal').text(aniamlInput);
        $('.exclamation').text(exclamationInput);
        $('.verb').text(verbInput);
        $('.noun').text(nounInput);

        $('#story').show();
        event.preventDefault();
    });
});