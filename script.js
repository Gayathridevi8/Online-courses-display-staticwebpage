//console to check the output
console.log('Welcome');
// event handler 
function hi(){
   alert('Do you want to leave the page?');
}
//when clicking login button, it arises to a prompt box asking your email id
function login(){
    var a=prompt('Enter your email id:');
    alert(a);
}
//changing nav bar element 'worshop' to 'Webinars'
var a=document.getElementById('web');
a.innerHTML='Webinars';
//changing logo 
var b=document.getElementsByClassName('logo')[0];
b.src="tech.jpg";
document.write(b);
//changing font of h1 element
var c=document.getElementsByClassName('font')[0];
c.style.fontFamily='Helvetica';
