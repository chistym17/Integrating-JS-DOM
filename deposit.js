document.getElementById('dep-btn').addEventListener('click',function(){

const deposited=parseFloat(document.getElementById('deposit').value)


const total=parseFloat(document.getElementById('prev-dep').innerText)

document.getElementById('prev-dep').innerText=total+deposited

document.getElementById('deposit').value=''
const total_balance=parseFloat(document.getElementById('balance').innerText)

document.getElementById('balance').innerText=total_balance+deposited


})

document.getElementById('with-btn').addEventListener('click',function(){

const withdrawed=parseFloat(document.getElementById('withdraw').value)
const total_balance=parseFloat(document.getElementById('balance').innerText)
if(withdrawed>total_balance)alert("Not enough balance")

else
{

const total=parseFloat(document.getElementById('prev-with').innerText)

document.getElementById('prev-with').innerText=total+withdrawed

document.getElementById('withdraw').value=''
document.getElementById('balance').innerText=total_balance-withdrawed

}

})