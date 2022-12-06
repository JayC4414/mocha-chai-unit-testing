const expect = require('chai').expect;
const { before } = require('mocha');
const axios = require('axios');
let chai = require('chai');
let should = chai.should();


const { API_URL, createUser } = require("./test_utils");

before(async () => {
    newuser = await createUser();
});

