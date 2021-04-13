const yargs = require("yargs");
const contacts = require('./contacts');


// TAMBAH KONTAK
yargs.command({
    command: 'add',
    describe: 'Menambahkan Kontak Baru',
    builder: {
        name: {
        demandOption: true,
        describe: "Nama",
        type: 'string'
        },
        email: {
            demandOption: true,
            describe: "Email",
            type: 'string'
        },
        telpon: {
            demandOption: true,
            describe: "Telpon",
            type: 'string'
        },
    },
    handler(argv){
    contacts.simpanContacts(argv.name, argv.email, argv.telpon);
    
    },
}).demandCommand();


// HAPUS KONTAK
yargs.command({
    command: 'rem',
    describe: 'Menghapus Kontak',
    builder: {
        name: {
            demandOption: true,
            describe: "Nama",
            type: 'string'
        },  
    },
    handler(argv){
        // const contact = {
        //     name: argv.name,
        //     email: argv.email,
        //     telpon: argv.telpon
        // }
        contacts.hapusContacts(argv.name);

    },
});

// MENAMPILKAN
yargs.command({
    command: 'list',
    describe: 'Menampilkan Semua Kontak Nama dan Telpon',
    builder: {},
    handler(){
        contacts.listContact();
    },
});



// MENAMPILKAN DETAIL
yargs.command({
    command: 'detail',
    describe: 'Menampilkan Detail Kontak Berdasarkan Nama',
    builder: {
        name: {
            demandOption: true,
            describe: "Nama",
            type: 'string'
        }
    },
    handler(argv){
        contacts.detailContact(argv.name);
    },
});

yargs.parse();


