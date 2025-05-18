const { Party: PartyModel } = require('../models/Party');

const checkPartyBudget = (budget, services) => {
    const priceSum = services.reduce((sum, service) => { return sum + service.price }, 0);
    return budget >= priceSum;
}

const partyController = {
    create: async (req, res) => {
        try {
            const { title, author, description, budget, image, services } = req.body;
            const party = {
                title: title,
                author: author,
                description: description,
                budget: budget,
                image: image,
                services: services,
            }
            console.log(party);
            if(party.services && !checkPartyBudget(party.budget, party.services)) {
                return res.status(406).json({ message: 'Budget is not enough for the selected services' });
            }
            const response = await PartyModel.create(party);
            res.status(201).json({ response, msg: 'Party created successfully' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    getAll: async (req, res) => {
        try {
            const parties = await PartyModel.find();
            res.status(200).json(parties);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    get: async (req, res) => {
        try {
            const party = await PartyModel.findById(req.params.id);
            if (!party) return res.status(404).json({ message: 'Party not found' });
            res.status(200).json(party);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;
            const { title, author, description, budget, image, services } = req.body;
            const party = {
                title: title,
                author: author,
                description: description,
                budget: budget,
                image: image,
                services: services
            }
            const partyUpdated = await PartyModel.findByIdAndUpdate(id, party, { new: true });
            if (!partyUpdated) return res.status(404).json({ message: 'Party not found' });
            if(party.services && !checkPartyBudget(party.budget, party.services)) {
                return res.status(406).json({ message: 'Budget is not enough for the selected services' });
            }
            res.status(200).json(party);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    delete: async (req, res) => {
        try {
            const partyDeleted = await PartyModel.findByIdAndDelete(req.params.id);
            if (!partyDeleted) return res.status(404).json({ message: 'Party not found' });
            res.status(200).json({ message: 'Party deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = partyController;