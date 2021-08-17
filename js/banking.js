function getInputValue(inputFieldId) {
    const InputField = document.getElementById(inputFieldId);
    const inputFieldValueText = InputField.value;
    const inputFieldValue = parseFloat(inputFieldValueText);
    InputField.value = '';
    return inputFieldValue;
};

function updateTotalFieldAmount(totalFieldId, newMoneyToSet) {

    const totalField = document.getElementById(totalFieldId);
    const totalFieldText = totalField.innerText;
    const totalFieldAmount = parseFloat(totalFieldText);
    totalField.innerText = totalFieldAmount + newMoneyToSet;
}

function updatePreviousNewAmount(previousAmountId, newAmountId, currentAmountId, moneyToSet) {

    const previousAmountField = document.getElementById(previousAmountId);
    const newAmountField = document.getElementById(newAmountId);
    previousAmountField.innerText = document.getElementById(currentAmountId).innerText;
    newAmountField.innerText = moneyToSet;
}

function updateTotalBalance(moneyToSet, isDeposit) {
    const totalBalanceField = document.getElementById('total-balance');
    const totalBalanceText = totalBalanceField.innerText;
    const previousTotal = document.getElementById('previous-total-balance');

    if (isDeposit == true) {
        var totalBalance = parseFloat(totalBalanceText) + moneyToSet;
    }
    else {
        var totalBalance = parseFloat(totalBalanceText) - moneyToSet;
    }

    previousTotal.innerText = totalBalanceField.innerText;
    totalBalanceField.innerText = totalBalance;
}


// Handling Deposit Button 
document.getElementById('deposit-button').addEventListener('click', function () {

    const moneyToDeposit = getInputValue('deposit-input-field');

    // displaying previous and new deposit amount 
    updatePreviousNewAmount('previous-deposit-amount', 'new-deposit-amount', 'current-deposit-amount', moneyToDeposit);

    // displaying updated deposit amount
    updateTotalFieldAmount('current-deposit-amount', moneyToDeposit);


    // display updated total balance
    updateTotalBalance(moneyToDeposit, true);

});


// Handling Withdraw Button 
document.getElementById('withdraw-button').addEventListener('click', function () {

    const moneyToWithdraw = getInputValue('withdraw-input-field')


    // displaying previous and new withdraw balance
    updatePreviousNewAmount('previous-withdraw-balance', 'new-withdraw-balance', 'current-withdraw-balance', moneyToWithdraw);


    // Get current withdraw balance 
    updateTotalFieldAmount('current-withdraw-balance', moneyToWithdraw);


    // update the total balance field 
    updateTotalBalance(moneyToWithdraw, false);

});