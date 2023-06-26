const clientModel = require("../models/clientModel");

exports.getAllClients = (req, res) => {
    clientModel.find()
    .then(clients => res.json(clients))
    .catch(err => res.status(500).json({error: err.message}));
};

exports.createClient =  (req, res) => {
    const {name, personalId, adress1, adress2, neighborhood, city, state, phone, obs} = req.body;
    const newClient = new clientModel({
        name,
        personalId,
        adress1,
        adress2,
        neighborhood,
        city,
        state,
        phone,
        obs
    });
    newClient
    .save()
    .then(() => res.status(201).json({success:"Client created"}))
    .catch(err => res.status(500).json({error:err.message}));
};

exports.updateClient = (req, res) => {
    const {id}= req.params;
    const {name, personalId, adress1, adress2, neighborhood, city, state, phone, obs} = req.body;
    const updateData = {
        name,
        personalId,
        adress1,
        adress2,
        neighborhood,
        city,
        state,
        phone,
        obs
    };
    clientModel.findByIdAndUpdate( id, updateData, {new:true})
    .then(client => {
        if(!client)throw new Error(`user with ID ${id} not found`);
        res.status(200).json({client});
    })
    .catch(err => res.status(404).json({error:err.message}));
};

exports.deleteClient = (req, res) => {
    const {id}= req.params;

    if(req.user.role !== "admin"){
        return res.status(401).json({error: "Unauthorized access."});
    }

    clientModel.findByIdAndDelete(id)
    .then(client => {
        if(!client)throw new Error(`user with ID ${id} not found`);
        res.status(200).json({message:"User deleted"});
    })
    .catch(err => res.status(404).json({error:err.message}));
};