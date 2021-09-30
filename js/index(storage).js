// STORAGE BROWSER

var gender;
var firstname;
var lastname;
var designationname;
var sectorname;
var companyname;
var selectcountry;
var telname;
var mobilename;
var emailname;
var quesname;
var interestname;
var checkbox1;


var a;
var b;
var c;
// ARRAY DECLARATION


var arraygender  = [];
var arrayfirst  = [];
var arraylast  = [];
var arraydesignation  = [];
var arraysector  = [];
var arraycompany  = [];
var arraycountry  = [];
var arraytelephone  = [];
var arraymobile  = [];
var arrayemail = [];
var arrayquestion  = [];
var arrayinterestedtext  = [];


function sub(){
 
    console.log("hiii");



    gender = document.getElementById('gender-opt').value;
 firstname = document.getElementById('first-name').value;
 lastname = document.getElementById('last-name').value;
 designationname = document.getElementById('designation-name').value;
 companyname = document.getElementById('company-name').value;
 sectorname = document.getElementById('sector-name').value;
 selectcountry = document.getElementById('select-country').value;
 telname = document.getElementById('tel-name').value;
 mobilename = document.getElementById('mobile-name').value;
 emailname = document.getElementById('email-name').value;
 quesname = document.getElementById('ques-name').value;
 interestedtext = document.getElementById('interested-name').value;
 checkbox1 = document.getElementById('check1');
   
     console.log( firstname, lastname, gender, telname);
   
   
  if(gender!=""&& firstname!="" && lastname!="" && designationname!=""&& companyname!="" && sectorname!= ""&&
selectcountry!="" && telname!="" && mobilename!="" && emailname!="" && quesname!="" && interestname!="" &&
checkbox1.checked == true)
   {  
      
    arraygender.push(gender);
    arrayfirst.push(firstname);
    arraylast.push(lastname);
    arraydesignation.push(designationname);
    arraysector.push(sectorname);
    arraycompany.push(companyname);
    arraycountry.push(selectcountry);
    arraytelephone.push(telname);
    arraymobile.push(mobilename);
    arrayemail.push(emailname);
    arrayquestion.push(quesname);
    arrayinterestedtext.push(interestedtext);





     console.log("first",arrayfirst);
       
    //  location.href = "./registration2.html";
     console.log("done");
   fun()
   
   }
   
   else{
     document.getElementById('small-tag').innerHTML= "plz fill the entries";
     console.log("fill the entries");
    
   }
   
   }
   

   function fun(){
    // localStorage.clear();

// LOCAL STORAGE




 arraygender = JSON.parse(localStorage.getItem('gender'));   
    
arrayfirst = JSON.parse(localStorage.getItem('firstname'));
arraylast = JSON.parse(localStorage.getItem('lastname'));
arraydesignation = JSON.parse(localStorage.getItem('designation'));
arraysector = JSON.parse(localStorage.getItem('sector'));
arraycompany = JSON.parse(localStorage.getItem('company'));

arraycountry = JSON.parse(localStorage.getItem('country'));
arraytelephone = JSON.parse(localStorage.getItem('telephone'));

arraymobile = JSON.parse(localStorage.getItem('mobile'));
arrayemail = JSON.parse(localStorage.getItem('email'));
arrayquestion = JSON.parse(localStorage.getItem('question'));
arrayinterestedtext = JSON.parse(localStorage.getItem('interestedtext'));

let data1 = [firstname];
let data2 = [lastname]; 
let data3 = [gender];
let data4 = [designationname]; 
let data5 = [sectorname];
let data6 = [companyname]; 
let data7 = [selectcountry];
let data8 = [telname]; 
let data9 = [mobilename];
let data10 = [emailname]; 
let data11 = [quesname]; 
let data12 = [interestname]; 


localStorage.setItem('firstname',JSON.stringify(data1));
 localStorage.setItem('lastname',JSON.stringify(data2));
 localStorage.setItem('gender',JSON.stringify(data3));
 localStorage.setItem('designation',JSON.stringify(data4));
 localStorage.setItem('sector',JSON.stringify(data5));
 localStorage.setItem('company',JSON.stringify(data6));
 localStorage.setItem('country',JSON.stringify(data7));
 localStorage.setItem('telephone',JSON.stringify(data8));
 localStorage.setItem('mobile',JSON.stringify(data9));
 localStorage.setItem('email',JSON.stringify(data10));
 localStorage.setItem('question',JSON.stringify(data10));
 localStorage.setItem('interestedtext',JSON.stringify(data10));





arrayfirst.push(firstname);
arraylast.push(lastname);
arraydesignation.push(designationname);
arraysector.push(sectorname);
arraycompany.push(companyname);
arraycountry.push(selectcountry);
arraytelephone.push(telname);
arraymobile.push(mobilename);
arrayemail.push(emailname);
arrayquestion.push(quesname);
arrayinterestedtext.push(interestedtext);
arraygender.push(gender);




  localStorage.setItem('gender',JSON.stringify(arraygender));

  localStorage.setItem('firstname',JSON.stringify(arrayfirst));
  localStorage.setItem('lastname',JSON.stringify(arraylast));

  localStorage.setItem('designation',JSON.stringify(arraydesignation));
  localStorage.setItem('sector',JSON.stringify(arraysector));
  localStorage.setItem('company',JSON.stringify(arraycompany));
  localStorage.setItem('country',JSON.stringify(arraycountry));
  localStorage.setItem('telephone',JSON.stringify(arraytelephone));
  localStorage.setItem('mobile',JSON.stringify(arraymobile));
  localStorage.setItem('email',JSON.stringify(arrayemail));
  localStorage.setItem('question',JSON.stringify(arrayquestion));
  localStorage.setItem('interestedtext',JSON.stringify(arrayinterestedtext));

console.log(JSON.parse(localStorage.getItem('email')));



a = JSON.parse(localStorage.getItem('email'));
console.log("a:::",a);

// SESSION STORAGE


  sessionStorage.setItem('email',emailname);  
 
  c = sessionStorage.getItem('email');
  console.log("c::",c);

 
}





function submitpopup(){

  b = document.getElementById('userinput-popup1').value;
 console.log("b:",b);
 a = localStorage.getItem('email');
 console.log("a::",a);



if(b = a.includes(b)){
  console.log("yes");

  // location.href = "./pages/livedemo.html";


}
else{
  console.log("nooo");
}

 
 }



 function logoutopen(){
   console.log("hiiii");

ab()


 }
 function ab(){
  console.log("heyyyyyy");
  sessionStorage.removeItem('email');
}