const yargs = require("yargs");
const contacts = require('./contacts');

yargs.command('add', 'Menambahkan Kontak Baru', () => {}, (argv) => {
    console.log(argv.name);
});

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
});

yargs.parse();






// const { simpanContacts, datapPertanyaan } = require('./contacts');


// const main = async () => {
//     const nama = await datapPertanyaan('Nama : ');
//     const email = await datapPertanyaan('Email : ');
//     const telpon = await datapPertanyaan('Telpon : ');

    
//     simpanContacts(nama, email, telpon);
// };
// main();