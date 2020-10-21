const login = document.getElementById('login');
login.addEventListener('click',() => {

const loginArea =document.getElementById('loginArea')
loginArea.style.display="none";

const trangition = document.getElementById('trangition');
 trangition.style.display="block";

})
// addDeposite
const DepositeBtn =document.getElementById('DepositeBtn');
DepositeBtn.addEventListener('click',()=>{

const depositeAmount=document.getElementById('depositeAmount').value;
const depositeAmountNumber = parseFloat(depositeAmount)
const currentDeposite = document.getElementById('currentDeposite').innerText;
const currentDepositeNumber = parseFloat(currentDeposite)

const totaldepositeAmount = depositeAmountNumber + currentDepositeNumber;

document.getElementById('currentDeposite').innerText=totaldepositeAmount;

const currentBalance =document.getElementById('Balance').innerText;
 // console.log(currentBalance)
const currentBalanceNumber=parseFloat(currentBalance);
// console.log(currentBalanceNumber)
const totalBalance =  depositeAmountNumber +  currentBalanceNumber;
 document.getElementById('Balance').innerText=totalBalance;
 // console.log(Balance)

})
// addWithdraw

const WithdrawBtn=document.getElementById('WithdrawBtn');
WithdrawBtn.addEventListener('click',()=>{

const withdrawAmount = document.getElementById('withdrawAmount').value;
const withdrawAmountNumber = parseFloat(withdrawAmount)
const currentwithdraw= document.getElementById('currentwithdraw').innerText;
const currentwithdrawNumber= parseFloat(currentwithdraw)

const totalwithdraw = withdrawAmountNumber + currentwithdrawNumber;

document.getElementById('currentwithdraw').innerText=totalwithdraw


})