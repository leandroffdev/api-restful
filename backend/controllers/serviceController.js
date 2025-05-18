const { Service: ServiceModel } = require('../models/Service');
const seviceController = {
    create: async(req, res) => {
        try {
            const { name, description, price, image } = req.body;
            const service = { 
                name: name, 
                description: description,
                price: price,
                image: image, 
            };
            const response = await ServiceModel.create(service);
            res.status(201).json({ response, msg: 'Service created successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error creating service', error });
        }
    },
    getAll: async(req, res) => {
        try {
            const services = await ServiceModel.find();
            res.status(200).json({ services });
        } catch (error) {
            res.status(500).json({ message: 'Error fetching services', error });
        }
    },
    get: async(req, res) => {
        try {
            const { id } = req.params;
            const service = await ServiceModel.findById(id);
            if (!service) {
                return res.status(404).json({ message: 'Service not found' });
            }
            res.status(200).json({ service });
        } catch (error) {
            res.status(500).json({ message: 'Error fetching service', error });
        }
    },
    update: async(req, res) => {
        try {
            const { id } = req.params;
            const { name, description, price, image } = req.body;
            const service = { 
                name: name, 
                description: description,
                price: price,
                image: image, 
            };
            const updatedService = await ServiceModel.findByIdAndUpdate(id, service, { new: true });
            if (!updatedService) {
                return res.status(404).json({ message: 'Service not found' });
            }
            res.status(200).json({ updatedService, msg: 'Service updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error updating service', error });
        }
    },
    delete: async(req, res) => {
        try {
            const { id } = req.params;
            const deletedService = await ServiceModel.findByIdAndDelete(id);
            if (!deletedService) {
                return res.status(404).json({ message: 'Service not found' });
            }
            res.status(200).json({deletedService, msg: 'Service deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting service', error });
        }
    },
};
module.exports = seviceController;