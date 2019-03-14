const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model

const HostinfoSchema = new Schema({
email: String,
password: String,
refEvent: Number
});

const Hostinfo = mongoose.model('HostInformation', HostinfoSchema);

module.exports = Hostinfo;