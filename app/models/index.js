let customers = [
    {id: '1588323375416', firstName: 'John', lastName: 'Johnson', email: 'john@johnson.com', phone: '8233243'},
    {id: '1588323375417', firstName: 'Mary', lastName: 'Smith', email: 'mary@smith.com', phone: '6654113'},
    {id: '1588323375418', firstName: 'Peter', lastName: 'North', email: 'peter@north.com', phone: '901176'},
  ]

class Customer {
    constructor(generateId=false, firstName, lastName, email, phone){
        this.id = generateId ? ''+Date.now() : '';
        this.firstName = firstName;
        this.lastName =lastName;
        this.email = email;
        this.phone = phone;
    }

    mergeCustomer(obj){
        obj.firstName ? this.firstName = obj.firstName : '';
        obj.lastName ? this.lastName = obj.lastName : '';
        obj.email ? this.email = obj.email : '';
        obj.phone ? this.phone = obj.phone : '';
    }

    parseCustomer(obj){
        this.id = obj.id ? obj.id : ''+Date.now();
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.email = obj.email;
        this.phone = obj.phone;
    }
}

module.exports = {
    customers,
    Customer
}