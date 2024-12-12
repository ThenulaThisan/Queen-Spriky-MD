const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'viwlQBrS#GEggvh9Hgd-Cpm_JeGjsqEkOk9LkyzVnGvNS78nFjoo', 
    MONGODB: process.env.MONGODB || '',// Enter Your MongoDB URL
    OWNER_NUMBER: process.env.OWNER_NUMBER || '',    // Enter Your Owner Number
};
