const saleModel = require("../models/saleModel");

exports.getAllSales = (req, res) => {
    saleModel.find()
    .then(sales => res.json(sales))
    .catch(err => res.status(500).json({error: err.message}));
};

exports.createSale =  (req, res) => {
    const {saleId, client, date, total} = req.body;
    const newSale = new saleModel({
        saleId,
        client,
        date
    });
    newSale
    .save()
    .then(() => res.status(201).json({success:"Sale created"}))
    .catch(err => res.status(500).json({error:err.message}));
};

exports.updateSale = (req, res) => {
    const {id}= req.params;
    const {saleId, client, date} = req.body;
    const updateData = {
        saleId,
        client,
        date
    };
    saleModel.findByIdAndUpdate( id, updateData, {new:true})
    .then(sale => {
        if(!sale)throw new Error(`user with ID ${id} not found`);
        res.status(200).json({sale});
    })
    .catch(err => res.status(404).json({error:err.message}));
};

exports.deleteSale = (req, res) => {
    const {id}= req.params;

    if(req.user.role !== "admin") {
        return res.status(401).json({error: "Unauthorized access."});
    }

    saleModel.findByIdAndDelete(id)
    .then(sale => {
        if(!sale)throw new Error(`user with ID ${id} not found`);
        res.status(200).json({message:"Sale deleted"});
    })
    .catch(err => res.status(404).json({error:err.message}));
};