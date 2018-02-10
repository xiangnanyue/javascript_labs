'use strict'

var objet = {
	birthYear: 1993,
	getAge: function(){
		return new Date().getFullYear() - this.birthYear;
		}
};

var objetArrow = {
	birthYear: 1993,
        getAge: function(){
             		var f = {
			age: () => new Date().getFullYear() - this.birthYear
			}
			return f.age();
		}
};

var objetThis = {
	birthYear: 1993,
	getAge: function(){
			var f = function(){
				// wrong, this refer to window or undefined
				//return new Date().getFullYear - this.birthYear;
		 		return new Date().getFullYear() - this.birthYear;
			}
			return f.call(this);
		}
};

console.log(objet.getAge());
console.log(objetArrow.getAge());
console.log(objetThis.getAge());
