// models/companyModel.js
const db = require('../config/db.config.js');

const Company = {
    create: (companyName, callback) => {
        const sql = 'INSERT INTO Companies (company_name) VALUES (?)';
        db.query(sql, [companyName], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, result);
        });
    }
};

module.exports = Company;