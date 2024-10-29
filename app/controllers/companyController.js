// controllers/companyController.js
const Company = require('../models/companyModel.js');

exports.createCompany = (req, res) => {
    const { company_name } = req.body;

    if (!company_name) {
        return res.status(400).json({ message: 'Company name is required' });
    }

    Company.create(company_name, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error creating company', error: err });
        }
        res.status(201).json({ message: 'Company created successfully', data: result });
    });
};