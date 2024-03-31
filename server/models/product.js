const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:  String,
    category: String,
    subcategory:  String,
    paymentmethod: String,
    username:  String,
    userstate: String,
    orderedAt: String,
    price: Number,
    costs: Number,
    quantity: Number
});


const Product = mongoose.model('Product', productSchema);


module.exports = Product