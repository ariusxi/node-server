'use strict';

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = async() => {
    
}

exports.create = async() =>  {
    var customer = new Customer(data);
    await customer.save();
}