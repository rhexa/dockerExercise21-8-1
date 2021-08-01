const route = require('express').Router();
const root = require('express').Router();
let {customers, Customer} = require('../models');

root.use('/customers', route);

route.get('/', (req, res) => {
    res.json(customers);
})

route.get('/:id', (req, res) => {
    res.json(customers.find(cus => cus.id === req.params.id))
})

route.post('/', function (req, res) {
    const customer = new Customer();
    customer.parseCustomer(req.body);
    customers.push(customer);
    res.json(customer);
})

route.put('/:id', function(req, res) {
    const customer = new Customer();

    // getting customer from DB
    customer.parseCustomer(customers.find(cus => cus.id === req.params.id));
    const before = JSON.parse(JSON.stringify(customer));

    // merging customer from DB with customer from request body
    customer.mergeCustomer(req.body);
    const after = JSON.parse(JSON.stringify(customer));

    res.json({
        before,
        after
    })

});

route.delete('/:id', function(req, res) {
    const customer = new Customer();
    customer.parseCustomer(customers.find(cus => cus.id === req.params.id))
    customers = customers.filter(cus => cus.id !== req.params.id)
    res.json(customer);
});

module.exports = root;
