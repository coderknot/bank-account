// Business Logic
function BankAccount(customerName, initialDeposit) {
	this.customerName = customerName;
  this.balance = initialDeposit;
}

BankAccount.prototype.deposit = function(amount) {
	this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount) {
	this.balance -= amount;
}

BankAccount.prototype.getBalance = function() {
  return this.balance;
}

//User Interface Logic
$(document).ready(function() {
  var newBankAccount;

  $("form#registration-form").submit(function(event) {
    event.preventDefault();

    var inputtedCustomerName = $("input#customer-name").val();
    var inputtedInitialDeposit = parseInt($("input#initial-deposit").val());

    newBankAccount = new BankAccount(inputtedCustomerName, inputtedInitialDeposit);
    console.log(newBankAccount);

    $("#current-balance").text(newBankAccount.getBalance());
  });

  $("#transaction-btn").click(function() {

    if($("#deposit").id === "deposit") {
      var inputtedDeposit = parseInt($("input#deposit").val());
      newBankAccount.deposit(inputtedDeposit);
    } else if($('input[name="withdraw"] :selected').attr('id') === "withdraw") {
      var inputtedWithdraw = parseInt($("input#withdraw").val());
      newBankAccount.withdraw(inputtedWithdraw);
    }

    $("#current-balance").text(newBankAccount.getBalance());


    // var inputtedWithdraw = parseInt($("input#withdraw").val());


  });

});
