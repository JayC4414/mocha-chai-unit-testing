const expect = require('chai').expect;
const { before } = require('mocha');
const axios = require('axios');
let chai = require('chai');
let should = chai.should();


const { API_URL } = require("./test_utils");

describe("Create New Sale", function () {


    it("Create New Sale", async () => {

        const payload = {
            "nameClient": "nuevo ventas",
            "medicaPrescription": "no",
            "age": 26,
        };


        const response = await axios.post(API_URL + "/postsaleinfo", payload);

        console.log(response.data);

        // expect(response.data.medicaPrescription).to.be.equal("yes");

        expect(response.status).to.be.equal(201);
        expect(response.data).to.be.an("object");
        
    });


    // it("User Correctly Created Without Adding nameClient", async () => {

    //     try {

    //         const payload = {
    //             // "nameClient": "nuevo123",
    //             "medicaPrescription": "nuevo123@gmail.com",
    //             "age": 26,
    //         };
    
    //         const response = await axios.post(API_URL + "/postsaleinfo", payload);
    
    //         // console.log(response.data);
    
    //         expect(response.status).not.to.be.equal(201);
    //         expect(response.data).to.be.an("object");
            
    //     } catch (error) {

    //         if(error.response){
    //             expect(error.response.status).not.to.be.equal(201);
    //         } else {
    //             throw error;
    //         }
            
    //     }
        
    // });

    // it("User Correctly Created Without Adding User medicaPrescription", async () => {

    //     try {

    //         const payload = {
    //             "nameClient": "nuevo123",
    //             // "medicaPrescription": "123456789",
    //             "age": 26,
    //         };
    
    //         const response = await axios.post(API_URL + "/postsaleinfo", payload);
    
    //         // console.log(response.data);
    
    //         expect(response.status).not.to.be.equal(201);
    //         expect(response.data).to.be.an("object");
            
    //     } catch (error) {

    //         if(error.response){
    //             expect(error.response.status).not.to.be.equal(201);
    //         } else {
    //             throw error;
    //         }
            
    //     }
        
    // });

    // it("User Correctly Created Without Adding Client age", async () => {

    //     try {

    //         const payload = {
    //             "nameClient": "nuevo123",
    //             "medicaPrescription": "123456789",
    //             // "age": 26,
    //         };
    
    //         const response = await axios.post(API_URL + "/postsaleinfo", payload);
    
    //         // console.log(response.data);
    
    //         expect(response.status).not.to.be.equal(201);
    //         expect(response.data).to.be.an("object");
            
    //     } catch (error) {

    //         if(error.response){
    //             expect(error.response.status).not.to.be.equal(201);
    //         } else {
    //             throw error;
    //         }
            
    //     }
        
    // });


});