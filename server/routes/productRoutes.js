const router = require('express').Router();
const Product = require('./../models/product')

router.get('/',async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch(err) {
        res.status(500).json({msg: "Error fetching products"});
    }
})

router.get('/:id',async (req,res) => {
    const {id} = req.params;
    try {
        const product = await Product.findOne({_id: id});
        res.status(200).json(product);
    } catch(err) {
        res.status(500).json({msg: "Error fetching product details"});
    }
})

router.delete('/:id',async(req,res) => {
    const {id: _id} = req.params;
    try {
        await Product.findByIdAndDelete(_id);
        res.status(200).json({msg: "Successfully deleted product"});
    } catch(err) {
        res.status(500).json({msg: "Error deleting product"});
    }
})

router.patch('/:id',async(req,res) => {
    const {id: _id} = req.params;
    const {price,quantity,costs} = req.body;
    try {
        await Product.findByIdAndUpdate(_id,{costs,quantity,price},{new: true});
        res.status(200).json({msg: "Successfully updated product"});
    } catch(err) {
        res.status(500).json({msg: "Error updating product"});
    }
})


module.exports = router;