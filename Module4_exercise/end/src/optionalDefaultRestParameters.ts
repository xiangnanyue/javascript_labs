(function () {

    //Optional parameter
    function buildAddressOptional(address1: string, city: string, state: string, address2?: string) {
        var addr2 = (address2) ? ' Address2: ' + address2 : '';
        displayAddress(address1 + addr2 + ', ' + city);
    }

    //Default parameter
    function buildAddressDefault(address1: string, address2 = 'N/A', city: string, state: string) {
        displayAddress('Address: ' + address1 + ' Address2: ' + address2 + ' City: ' + city);
    }

    //Rest parameters
    function buildAddressRest(...restOfAddress: string[]) {
        var address = '';
        restOfAddress.forEach((addr) => {
          if (addr) address += addr + ', '; 
        });
        displayAddress(address);
    }

    function displayAddress(msg: string) {
        result.innerHTML = msg;
    }

    var $ = (id) => document.getElementById(id);

    var addressButton: HTMLButtonElement = <HTMLButtonElement>$('addressButton'),
        address: HTMLInputElement = <HTMLInputElement>$('address'),
        address2: HTMLInputElement = <HTMLInputElement>$('address2'),
        city: HTMLInputElement = <HTMLInputElement>$('city'),
        state: HTMLInputElement = <HTMLInputElement>$('state'),
        result = $('result');

    //Call function with optional parameter
    //addressButton.addEventListener('click',(e) => buildAddressOptional(address.value, city.value, state.value));

    //Call function with default parameter
    //addressButton.addEventListener('click',(e) => buildAddressDefault(address.value, city.value, state.value));

    //Call function with Rest parameters
    addressButton.addEventListener('click', (e) => buildAddressRest(address.value, address2.value, city.value, state.value));

} ());