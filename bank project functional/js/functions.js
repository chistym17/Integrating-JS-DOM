function get_input_value(input_id)
{

const input_value=parseFloat(document.getElementById(input_id).value)
document.getElementById(input_id).value=''
return input_value


}

function get_previous_total(input_id)
{

return parseFloat(document.getElementById(input_id).innerText)


}

function update_total_deposited_or_withdrawed(dep_id,new_amount,previous_amount)

{
document.getElementById(dep_id).innerText=new_amount+previous_amount



}

function check_withdraw_status(withdraw_amount)
{
const total_balance=parseFloat(document.getElementById('balance').innerText)

if(withdraw_amount>total_balance)
{
alert('not enough balance')
return false


}
else
return true
}










function update_total_balance_after_deposited(id,amount)
{

document.getElementById(id).innerText=parseFloat(document.getElementById(id).innerText)+amount



}

function update_total_balance_after_withdrawed(id,amount)
{

document.getElementById(id).innerText=parseFloat(document.getElementById(id).innerText)-amount



}