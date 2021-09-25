function home(){
    // location.href = "../index.html";
    ab()
    }



    function ab(){
        $("#footer").show()
        .css({
          'opacity': 0,
          'bottom': '-100px'
        })
        .animate({
          'opacity': '1',
          'bottom': '100px'
        }, 1000);
    }
