const chalk = require('chalk');
const fs = require('fs');
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
if (!fs.readFileSync('./data/contacts.json', 'utf-8')) {
    fs.writeFileSync('./data/contacts.json', '[]', 'utf-8');
}


const loadContact = () => {
    const read = fs.readFileSync('./data/contacts.json', 'utf-8');
    const contacts = JSON.parse(read);

    return contacts;
};

const simpanContacts = (name, email, telpon) => {
    const filePath = './data/contacts.json';
    const contact = {
        name,
        email,
        telpon
    };

    const contacts = loadContact();

    // CEK 
    const duplicate = contacts.find((contact) => contact.name === name);
    if (duplicate) {
        console.log('Data Sudah Ada');
        return false;
    }
    // Cek telpon 
    if (!validator.isMobilePhone(telpon, 'id-ID')) {
        console.log(chalk.white.bgRed('Maaf Telpon Yang Anda Masukan Tidak Valid'));
        return false;
    }
    if (!validator.isEmail(email)) {
        console.log(chalk.white.bgRed('Maaf Email Yang Anda Masukan Tidak Valid'));
        return false;
    }

    contacts.push(contact);

    const hasil = fs.writeFileSync(filePath, JSON.stringify(contacts), 'utf-8');
    console.log(chalk.black.bgGreen('terima kasih telah memasukan data'));

};

// HAPUS
const hapusContacts = (name) => {
   const contacts = loadContact();
   const contact = {name};
   const new_contacts = contacts.filter((contact) => contact.name.toLowerCase() !== name.toLowerCase());

   if (contacts.length === new_contacts.length) {
    console.log(`${name} Tidak Di Temukan`);
    return false;
    }
    
    const hasil = fs.writeFileSync('./data/contacts.json', JSON.stringify(new_contacts), 'utf-8');
    console.log(chalk.black.bgGreen(`${name} Berhasil Di Hapus`));
  

}

// LIST
const listContact = () => {
    const contacts = loadContact();
    console.log(chalk.white.bgBlue('DAFTAR NAMA KONTAK TERDAFTAR'));
    contacts.forEach((contact, i) => {
        console.log(`${ i + 1 }. ${contact.name} - ${contact.telpon}`);
    })
}


// DETAIL 
const detailContact = (name) => {
    const contacts = loadContact();

    const search = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
    if (!search) {
        console.log(chalk.white.bgRed(`${name} Tidak Di Temukan.`));
        return false;
    }
    console.log(chalk.white.bgBlack('Nama : ' + search.name));
    console.log(chalk.white.bgBlack('Telpon : ' + search.telpon));
    if (search.email) {
        console.log('Email : ' + search.email);

    }

}

module.exports = {
    simpanContacts,
    hapusContacts,
    listContact,
    detailContact
};