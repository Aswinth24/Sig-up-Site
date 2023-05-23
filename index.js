let btn=document.querySelector('#btn');
let firstName=document.querySelector('#first-name');
let lastName=document.querySelector('#last-name');
let contact=document.querySelector('#contact');
let email=document.querySelector('#email');
let password=document.querySelector('#password');
let confirmPassword=document.querySelector('#cfm-password');
let displayer=document.querySelectorAll('.displayer');

let arrowUp=document.querySelector('#arrow-up');
let arrowDown=document.querySelector('#arrow-down');
let frame1=document.querySelector('.frame1');
let frame2=document.querySelector('.frame2');


const numberPattern=/^[6-9]{1}[0-9]{9}$/;//for 10 nubmers
const emailPattern=/\w+@[a-z]+\.com$/;  // for email 
const passwordPattern=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

function error(index)
{
    displayer[index].classList.remove('hidden');
}
function normal(index)
{
    displayer[index].classList.add('hidden');
}
firstName.addEventListener('keyup',(e)=>{
    e.target.value.length<=1?error(0):normal(0);
})
lastName.addEventListener('keyup',(e)=>{
    e.target.value.length<=1?error(1):normal(1);
})
contact.addEventListener('keyup',(e)=>{
    let value=e.target.value;
    if(value.length>=10)
    {
        !numberPattern.test(value)?error(2):normal(2);
    }
    });
email.addEventListener('keyup',(e)=>{
    !emailPattern.test(e.target.value)?error(3):normal(3);
});
password.addEventListener('keyup',(e)=>{
    passwordPattern.test(e.target.value)==false?error(4):normal(4);
});
confirmPassword.addEventListener('keyup',(e)=>{
    password.value!=e.target.value?error(5):normal(5);
});

 arrowDown.addEventListener('click',()=>{
               
               
 });   