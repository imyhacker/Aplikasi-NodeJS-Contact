const fs = require('fs');
const readline = require('readline');
const validator = require('validator');


// MEMBUAT FOLDER BARU JIKA GAK ADA 
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// MEMBUAT FILE BARU JIKA GAK ADA 
const filePath = './data/contacts.json';
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8');
}

// MEMBUAT ARRAY BARU JIKA GAK ADA
if(!fs.readFileSync('./data/contacts.json', 'utf-8')){
    fs.writeFileSync('./data/contacts.json', '[]', 'utf-8');
}

// MEMBUAT INTERFACE 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin,

});


const datapPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (name) => {
            resolve(name);
        });
    });
};


const simpanContacts = (name, email, telpon) => {
    const em = validator.isEmail(email);
    const hp = validator.isMobilePhone(telpon, 'id-ID');
    if (em === true && hp === true) {
        const filePath = './data/contacts.json';
        const contact = {
            name,
            email,
            telpon
        };
        const read = fs.readFileSync(filePath, 'utf-8');
        const contacts = JSON.parse(read);

        contacts.push(contact);

        const hasil = fs.writeFileSync(filePath, JSON.stringify(contacts), 'utf-8');
        console.log('terima kasih telah memasukan data');
    } else {
        rl.close();
        console.log('Maap ada kesalahan');
    }
    rl.close();
};


module.exports = { simpanContacts, datapPertanyaan };