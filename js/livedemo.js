function pollopen() {
    $('.poll-box').removeClass('d-none');
  


    $('.poll-box').css('z-index', '5');
    $('.note-box').css('z-index', '2');
    $('.ques-box').css('z-index', '2');
}

function noteopen() {

    $('.note-box').removeClass('d-none');
   


    $('.poll-box').css('z-index', '2');
    $('.note-box').css('z-index', '5');
    $('.ques-box').css('z-index', '2');
}


function quesopen() {
    $('.question-box').removeClass('d-none');
  



    $('.poll-box').css('z-index', '1');
    $('.note-box').css('z-index', '1');
    $('.ques-box').css('z-index', '1000');
}

function pollcross() {
    $('.poll-box').addClass('d-none');
  
}

function notecross() {
    $('.note-box').addClass('d-none');
    
}

function quescross() {
    $('.question-box').addClass('d-none');
    
}

function attendesopen() {
    $('.attendes-box').removeClass('d-none');
    $('.example1').removeClass('d-none');
    $('.attendes-box').css("background-color", "white");
    $('.attendes-txt').css("color", "black");


    $('.example2').addClass('d-none');
    $('.network-box').addClass('d-none');
    $('.network-txt').css("color", "white");
}

function networkopen() {
    $('.network-box').removeClass('d-none');
    $('.example2').removeClass('d-none');
    $('.network-box').css("background-color", "white");
    $('.network-txt').css("color", "black");


    $('.example1').addClass('d-none');
    $('.attendes-box').addClass('d-none');
    $('.attendes-txt').css("color", "white");
}


function popuplog(){
    location.href = "../pages/thankyou.html";
}


function downloadopen(){
   $('.download-box').removeClass('d-none');
}

function savednotesopen(){
    $('.savednotes-box').removeClass('d-none');
 }

 function downloadboxcross(){
    $('.download-box').addClass('d-none');
 }

 function savednotesboxcross(){
    $('.savednotes-box').addClass('d-none');
 }


 function feedbackopen(){
    location.href = "../pages/session.html";
 }

 function logoutopen(){
    location.href = "../pages/thankyou.html";
 }