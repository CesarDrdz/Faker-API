



import { faker } from '@faker-js/faker';

const express = require("express");
const app = express();
const port = 8000;
// remember to use import and NOT require
// ----MIDDLEWARE-----
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }));

// -------------


// we can create a function to return a random / fake "Product"
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};

const newFakeProduct = createProduct();
console.log(newFakeProduct);
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */

class User {
    constructor(){
        this._id = faker.database.mongodbObjectId();
        this.firstName = faker.name.firstName();
        this.lastNmae = faker.name.lastName();
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.number();
        this.password = faker.internet.password();

    }
}

class Company {
    constructor(){
        this._id = faker.database.mongodbObjectId();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(),
            country: faker.address.country()

        };
    }
}


// req is short for request
//  res is short for response 
app.get('.api/users/new', (req, res) =>{
    res.json(newUser());
});
app.get('.api/companies/new', (req, res) =>{
    res.json(company());
});
app.get('.api/users/company', (req, res) =>{
    res.json([new User(), new Company()]);
});



const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
