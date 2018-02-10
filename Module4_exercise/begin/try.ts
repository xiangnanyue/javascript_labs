class Account {
	balance = 100;
	getBalance (){
		return this.balance;
	}
}
var myBalance = new Account(); 

document.body.innerHTML = myBalance.getBalance().toString(); //use the function to return the value
// or just
document.body.innerHTML = myBalance.balance.toString(); 