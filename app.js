const { simpanContacts, datapPertanyaan } = require('./contacts');


const main = async () => {
    const nama = await datapPertanyaan('Nama : ');
    const email = await datapPertanyaan('Email : ');
    const telpon = await datapPertanyaan('Telpon : ');

    
    simpanContacts(nama, email, telpon);
};
main();