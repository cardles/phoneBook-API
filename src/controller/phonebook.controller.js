const Contacts = require("../model/contacts.model.json");

const getHome = (req, res) => {
    res.status(200).send({
        message: "Welcome to phoneBook API!",
        instructions: "To use this API, please check our documentation in README.md"
    });
};


const getAll = (req, res) => {
    res.status(200).send(Contacts);
};


const getByName = (req, res) => {
    const requestedName = req.query.nome;

    const contactFound = Contacts.filter(contact => contact.nome.toLowerCase().includes(requestedName.toLowerCase()));

    res.status(200).send(contactFound);
};


const getById = (req, res) => {
    const requestedId = req.params.id;

    const contactFound = Contacts.find(contact => contact.id === requestedId);

    res.status(200).send(contactFound);
};


const postNewContact = (req, res) => {

    const newContact = {
        id: Math.random().toString(32).substr(2, 6),
        nome: req.body.nome,
        celular: req.body.celular,
        redesSociais: req.body.redesSociais
    };

    Contacts.push(newContact);

    res.status(201).send(newContact)
};


const dellById = (req, res) => {
    const requestedId = req.params.id;

    const contactFound = Contacts.find(contact => contact.id === requestedId);

    const index = Contacts.indexOf(contactFound);

    if (index < 0) {
        res.status(404).send({ message: "Id not found, please try again." })
    } else {
        Contacts.splice(index, 1);
        res.status(200).send({
            message: "Contact deleted with success! Check the updated contact list:",
            Contacts
        })
    }
}


module.exports = {
    getHome,
    getAll,
    getByName,
    getById, 
    postNewContact,
    dellById
}