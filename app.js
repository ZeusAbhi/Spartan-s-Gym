const express = require("express");
const path = require("path");
const app = express();
const port = 80;

//Mongo DB Stuff
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/contactgym');
}
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String
});
const Contact = mongoose.model('Contact', contactSchema);

//EXPRESS 
app.use(express.urlencoded())
app.use(express.static('public'))

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    res.status(200).render('home.pug');
})
app.get('/home', (req, res) => {
    res.status(200).render('home.pug');
})
app.get('/about', (req, res) => {
    res.status(200).render('about.pug');
})
app.get('/service', (req, res) => {
    res.status(200).render('service.pug');
})
app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug');
})
//Mongo DB Stuff
app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.status(300).render('contact.pug')
    }).catch(() => {
        res.status(400).send("item was not saved to the databse")
    })
})


app.post('/', (req, res) => {
    console.log(req.body);

})

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
