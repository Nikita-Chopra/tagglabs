 function read1() {
   console.log("hiiiii")
   $('.notice-column-toggle').removeClass('d-none');
   $('.notice-column-toggle').show();
   $('.read-toggle').hide();
 }

 function less1() {
   $('.notice-column-toggle').addClass('d-none');
   $('.notice-column-toggle').hide();
   $('.read-toggle').show();
 }

 var a = document.getElementById('first-name').value();
 var b = document.getElementById('last-name').value();
 var c = document.getElementById('designation-name').value();
 var d = document.getElementById('company-name').value();
 var e = document.getElementById('sector-name').value();
 var f = document.getElementById('select-country').value();
 var g = document.getElementById('gender-opt').value();
 var h = document.getElementById('tel-name').value();
 var i = document.getElementById('mobile-name').value();
 var j = document.getElementById('email-name').value();
 var k = document.getElementById('interested-name').value();
 var l = document.getElementById('check1').value();


 function sub() {
   if (a!== "" && b!== "" && c!== "" && d!== "" && e!== "" && f!== "" && g!== "" && h!== "" && i!== "" && j!== "" && k!= "" && l!== "")

   {
     console.log("fill entries");
     location.href = "index3.html";
   } 
   else {
     document.getElementById('small-tag').innerHtml = "plz fill the entries";
   }

 }