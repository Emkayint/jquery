// $(document).ready(function(){
//     $('p').click(function(){
//         $('img').show();
//     });
// });

$(document).ready(() => {
    $("button#hello").click(() => {
        $("ul").prepend("<li>Hello</li>")
    });
    $("button#goodbye").click(() => {
        $("ul").prepend("<li>Goodbye</li>")
    });
    $("button#stop").click(() => {
        $("ul").prepend("<li>Stop copying me</li>")
    });
});