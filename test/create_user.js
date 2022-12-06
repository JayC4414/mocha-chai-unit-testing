const expect = require('chai').expect;
const { before } = require('mocha');
const axios = require('axios');
let chai = require('chai');
let should = chai.should();


const { API_URL } = require("./test_utils");

describe("Create New User", function () {


    it("User Correctly Created", async () => {

        const payload = {
            "name": "nuevo123",
            "email": "nuevo123@gmail.com",
            "age": 26,
        };

        const response = await axios.post(API_URL + "/postuserinfo", payload);

        // console.log(response.data);

        expect(response.status).to.be.equal(201);
        expect(response.data).to.be.an("object");
        
    });


    it("User Correctly Created Without Adding User Name", async () => {

        try {

            const payload = {
                // "name": "nuevo123",
                "email": "nuevo123@gmail.com",
                "age": 26,
            };
    
            const response = await axios.post(API_URL + "/postuserinfo", payload);
    
            // console.log(response.data);
    
            expect(response.status).not.to.be.equal(201);
            expect(response.data).to.be.an("object");
            
        } catch (error) {

            if(error.response){
                expect(error.response.status).not.to.be.equal(201);
            } else {
                throw error;
            }
            
        }
        
    });

    it("User Correctly Created Without Adding User E-mail", async () => {

        try {

            const payload = {
                "name": "nuevo123",
                // "email": "nuevo123@gmail.com",
                "age": 26,
            };
    
            const response = await axios.post(API_URL + "/postuserinfo", payload);
    
            // console.log(response.data);
    
            expect(response.status).not.to.be.equal(201);
            expect(response.data).to.be.an("object");
            
        } catch (error) {

            if(error.response){
                expect(error.response.status).not.to.be.equal(201);
            } else {
                throw error;
            }
            
        }
        
    });

    it("User Correctly Created Without Adding User age", async () => {

        try {

            const payload = {
                "name": "nuevo123",
                "email": "nuevo123@gmail.com",
                // "age": 26,
            };
    
            const response = await axios.post(API_URL + "/postuserinfo", payload);
    
            // console.log(response.data);
    
            expect(response.status).not.to.be.equal(201);
            expect(response.data).to.be.an("object");
            
        } catch (error) {

            if(error.response){
                expect(error.response.status).not.to.be.equal(201);
            } else {
                throw error;
            }
            
        }
        
    });
});