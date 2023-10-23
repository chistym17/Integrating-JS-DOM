document.getElementById('submit').addEventListener('click',function(){


const email=document.getElementById('email').value
const password=document.getElementById('password').value

if(email=='chisty@gmail.com' && password=='chisty')
{

 console.log('valid user')
window.location.href='money.html'


}
else console.log('invalid user')




})


