const detailModel = require("../models/detailModel");

exports.getAllDetails = (req, res) => {
    detailModel.find()
    .then(detail => res.json(detail))
    .catch(err => res.status(500).json({error: err.message}));
};

exports.createDetail =  (req, res) => {
    const {saleId, description, amount, valor, totalValor, total} = req.body;
    const newDetail = new detailModel({
        saleId,
        description,
        amount,
        valor,
        totalValor,
        total
    });
    newDetail
    .save()
    .then(() => res.status(201).json({success:"Detail created"}))
    .catch(err => res.status(500).json({error:err.message}));
};

exports.updateDetail = (req, res) => {
    const {id}= req.params;
    const {saleId, description, amount, valor, totalValor, total} = req.body;
    const updateData = {
        saleId,
        description,
        amount,
        valor,
        totalValor,
        total
    };
    detailModel.findByIdAndUpdate( id, updateData, {new:true})
    .then(detail => {
        if(!detail)throw new Error(`user with ID ${id} not found`);
        res.status(200).json({detail});
    })
    .catch(err => res.status(404).json({error:err.message}));
};

exports.deleteDetail = (req, res) => {
    const {id}= req.params;

    if(req.user.role !== "admin") {
        return res.status(401).json({error: "Unauthorized access."});
    }

    detailModel.findByIdAndDelete(id)
    .then(detail => {
        if(!detail)throw new Error(`user with ID ${id} not found`);
        res.status(200).json({message:"Sale deleted"});
    })
    .catch(err => res.status(404).json({error:err.message}));
};