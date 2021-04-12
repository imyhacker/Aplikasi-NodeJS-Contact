const fs = require('fs');

if(!fs.readFileSync('./data/contacts.json', 'utf-8')){
    fs.writeFileSync('./data/contacts.json', '[]', 'utf-8');
}