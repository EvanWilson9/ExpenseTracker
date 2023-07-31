//SEPERATE FROM BALANCE
//
//
const sideBar = document.querySelector('.side-bar');
const upArrow = document.querySelector('.up-arrow');
const totalContainer = document.querySelector('.total-container');
const goalsContainer = document.querySelector('.goals-container');
const overviewContainer = document.querySelector('.overview-container');
const totalTab = document.querySelector('#total-tab');
const goalsTab = document.querySelector('#goals-tab');
const overviewTab = document.querySelector('#overview-tab');
const inputContainer = document.querySelector('.input-container');

totalTab.onclick = function () {
  totalContainer.style.display = "flex";
  goalsContainer.style.display = "none";
  overviewContainer.style.display = "none";
}
goalsTab.onclick = function () {
  totalContainer.style.display = "none";
  goalsContainer.style.display = "flex";
  overviewContainer.style.display = "none";
}
overviewTab.onclick = function () {
  totalContainer.style.display = "none";
  goalsContainer.style.display = "none";
  overviewContainer.style.display = "flex";
}

function openExpenseEditor() {
  inputContainer.style.display = "flex";
}

let sideBarCount = 0;
let hamburgerBtn = document.querySelector('.hamburger');
let xBtn = document.querySelector('.x');

function openSideBar() {
  if(sideBarCount === 0){
    sideBar.style.transform = "translateX(0%)"
    hamburgerBtn.style.display="none";
    xBtn.style.display="flex";
    sideBarCount = 1;
  } else {
    sideBar.style.transform = "translateX(-465px)"
    setTimeout(showHamburger, 200);
    xBtn.style.display="none";
    sideBarCount = 0;
  }
}

function showHamburger(){
  hamburgerBtn.style.display="flex";
}

upArrow.onclick = function () {
  inputContainer.style.display = "none";
}
//
//
//END OF SEPERATE FROM BALANCE


//Btn that adds expense
const btn = document.querySelector('.btn');
//Number of balance displayed in circle
let balanceAmount = document.querySelector('.balance-amount');
//Either positive or negative message
let balanceDescription = document.querySelector('.balance-description');
//Background of balance circle (red / green)
const balanceContainer = document.querySelector('.balanceContainer');
//Container of add LI's
const listContainer = document.querySelector('.list-container');
/*Input elements (all)*/ 
const titleInput = document.querySelector('.title-input');
const dateInput = document.querySelector('.date-input');
const amountInput = document.querySelector('.amount-input');
const categorySelection = document.querySelector('.category-selection');
/**/
//Total Balance
let balance = 0;

btn.onclick = function(){

  if(titleInput.value === "" || dateInput.value === "" || amountInput.value === "" || categorySelection.value === 'Category'){
    alert('Please fill in all entries.');
    return;
  }

  const li = document.createElement('LI');

  /*switch(categorySelection.value){
    case "Work":
      li.classList.add('work');
      break;
    case "Shopping":
      li.classList.add('shopping');
      break;
    case "Entertainment":
      li.classList.add('entertainment');
      break;
    case "Miscellaneous":
      li.classList.add('miscellaneous');
      break;
  }*/

  let expenseAmount = amountInput.value;
  let fixedExpense;

  if(expenseAmount < 0){
    fixedExpense = "-$" + Math.abs(expenseAmount); 
  } else {
    fixedExpense = "$" + expenseAmount;
  }

  balance = (balance*100 + (Number(amountInput.value) * 100)) / 100;
  balanceAmount.innerHTML = balance;

  if (balance < 0) {
    let negativeBalance = Math.abs(balance);
    balanceAmount.innerHTML = "- " + "$" + negativeBalance;
    balanceContainer.style.background = "#e3675e";
  }
  else if (balance > 0) {
    balanceAmount.innerHTML = "$" + balance;
    balanceContainer.style.background = "#a3ecac";
  }
  
  if (balance > 0) {
    balanceDescription.innerHTML = "You are in the positive, keep it up!";
  }
  else if (balance < 0) {
    balanceDescription.innerHTML = "You are in the negative, watch out!";
  }

  li.innerHTML = 
  `
  <div class="expense">
    <div>${titleInput.value}</div>
    <div>${dateInput.value}</div>
    <div>${fixedExpense}</div>
  </div>
  `;

  listContainer.appendChild(li);

  const span = document.createElement('SPAN');
  span.innerHTML = "X";
  li.appendChild(span);

  titleInput.value = "";
  dateInput.value = "";
  amountInput.value = "";
  categorySelection.value = "Category";
};

listContainer.addEventListener("click", function (e) {
  e.target.parentElement.remove();
  let word = e.target.parentElement.innerHTML;
  console.log(word);
  console.log(word.length);

  let newAmount = "";
  let newNum = "";
  let newAmountNum = 0;
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === "1" || word.charAt(i) === "2" || word.charAt(i) === "3" || word.charAt(i) === "4" || word.charAt(i) === "5" || word.charAt(i) === "6" || word.charAt(i) === "7" || word.charAt(i) === "8" || word.charAt(i) === "9" || word.charAt(i) === "0" || word.charAt(i) === "." || word.charAt(i) === "-") {
      if(count === 10){
        newAmount = "";
      }
      newNum = word.charAt(i);
      newAmount += newNum;
      console.log(newAmount);
      count++;
    }
  }
  newAmountNum = Number(newAmount);

  if(newAmountNum > 0){
    balance -= newAmountNum;
    balanceAmount.innerHTML = balance;
    console.log('hi');
  }
  else if(newAmountNum < 0){
    balance -= newAmountNum;
    balanceAmount.innerHTML = balance;
    console.log('hello');
  }

  if(balance === 0){
    balanceDescription.innerHTML = "";
    balanceAmount.innerHTML = "$0"
    balanceContainer.style.background = "lightgray";
  }

});
