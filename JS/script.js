// jQuery('h1').click(function(){
//     alert('This is a heading tag');
// });

// jQuery('p').click(function(){
//     alert("This is a paragraph")
// });

// jQuery('img').click(function(){
//     alert('This is an Image');
// });

$(document).ready(function(){
    $("p").click(function(){
        $('.walrus-showing').toggle();
        $('.walrus-hidden').toggle();

    })
})
