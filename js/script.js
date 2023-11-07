import { convertStringNumber } from "./convertStringNumber.js";

const financeForm = document.querySelector('.finance__form');
const financeAmount = document.querySelector('.finance__amount');
let amount = 0;
financeAmount.textContent = amount;

financeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const typeOperation = event.submitter.dataset.typeOperation;    
    const changeAmount = Math.abs(convertStringNumber(financeForm.amount.value));
    
    if(typeOperation === 'income') {
        amount += changeAmount;
    }
    if(typeOperation === 'expenses') {
        amount -= changeAmount;
    }
    financeAmount.textContent = `${amount.toLocaleString()} ₽`;
});

const reportOpen = document.querySelector('.finance__report');
const reportClose = document.querySelector('.report__close');
const report = document.querySelector('.report');

reportOpen.addEventListener('click', () => {
    report.classList.toggle('report__open');
});

reportClose.addEventListener('click', () => {
    report.classList.toggle('report__open');
});