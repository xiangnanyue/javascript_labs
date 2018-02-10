var Account = (function () {
    function Account() {
        this.balance = 100;
    }
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    return Account;
}());
var myBalance = new Account();
document.body.innerHTML = myBalance.getBalance().toString(); //use the function to return the value
// or just
document.body.innerHTML = myBalance.balance.toString(); //or just reference the variable directly
//# sourceMappingURL=try.js.map