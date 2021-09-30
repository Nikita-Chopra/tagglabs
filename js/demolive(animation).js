function emojilike(){
    console.log("hiiiiiiii");
    $('.emoji-like-animation').removeClass('d-none');
    $('.emoji-like-animation').addClass('emoji1')

    emojiliketimeout()

}


function emojiheart(){
    console.log("hiiiiiiii");
    $('.emoji-heart-animation').removeClass('d-none');
    $('.emoji-heart-animation').addClass('emoji2')

    emojihearttimeout()
}



function emojihand(){
    console.log("hiiiiiiii");
    $('.emoji-hand-animation').removeClass('d-none');
    $('.emoji-hand-animation').addClass('emoji3')

    emojihearttimeout()

}





function emojiliketimeout(){
    setTimeout(() => {
        $('.emoji-like-animation').addClass('d-none')  
      }, 2000);


}


function emojihearttimeout(){
    setTimeout(() => {
        $('.emoji-heart-animation').addClass('d-none')  
      }, 2000);


}


function emojihandtimeout(){
    setTimeout(() => {
        $('.emoji-hand-animation').addClass('d-none')  
      }, 2000);


}