const totalContainer = document.querySelector('.total-container');
const goalsContainer = document.querySelector('.goals-container');
const overviewContainer = document.querySelector('.overview-container');

const totalTab = document.querySelector('#total-tab');
const goalsTab = document.querySelector('#goals-tab');
const overviewTab = document.querySelector('#overview-tab');

let currentBalance = document.querySelector('#current-balance');

const negativeMessage = document.querySelector('#negative');
const positiveMessage = document.querySelector('#positive');

const balance = document.querySelector('.balance');

const inputContainer = document.querySelector('.input-container');
const sideBar = document.querySelector('.side-bar');
const upArrow = document.querySelector('.up-arrow');

let balanceValue = 0;

if (balanceValue < 0) {
  let negativeBalance = Math.abs(balanceValue);
  currentBalance.innerHTML = "- " + "$" + negativeBalance;
  balance.style.background = "#e3675e";
}
else if (balanceValue >= 0) {
  currentBalance.innerHTML = "$" + balanceValue;
  balance.style.background = "#a3ecac";
}

if (balanceValue >= 0) {
  negativeMessage.style.display = "none";
  positiveMessage.style.display = "flex";
}
else if (balanceValue < 0) {
  negativeMessage.style.display = "flex";
  positiveMessage.style.display = "none";
}

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

let balanceDescript = document.querySelector('.balance-description-container');
let balanceTitle = document.querySelector('.balance-title');

const bodyElement = document.querySelector('body');

//
const titleInput = document.querySelector('.title-input');
const dateInput = document.querySelector('.date-input');
const amountInput = document.querySelector('.amount-input');
const categorySelection = document.querySelector('.category-selection');

let expenseArray = [];
const expenseContainer = document.querySelector('.expense-container');
const addBtn = document.querySelector('.add-btn');
//