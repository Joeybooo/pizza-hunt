const { Schema, model } = require('mongoose');

const PizzaSchema = new  Schema ({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Data,
        default: Data.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
});

// create the pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// export the pizza model
module.exports = Pizza;