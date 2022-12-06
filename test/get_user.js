const expect = require('chai').expect;
const { before } = require('mocha');
const axios = require('axios');
let chai = require('chai');
let should = chai.should();


const { API_URL, createUser } = require("./test_utils");

before(async () => {
    newuser = await createUser();
});

describe("Get User Info", function () {

    it("Get All User Lists", async () => {
        const response = await axios.get(API_URL + "/getuserinfo");
        expect(response.status).to.be.equal(200);
        expect(response.data).to.be.an("array");
    });

    // it("get Singler User",async()=>{

    //     const response = await axios.get(API_URL + "/singleuser/"+ "638d26ecdf22a5a2d72f1461");

    //     console.log(response.data);
    // })

    it("get Singler User", async () => {
        // console.log(newuser);
        const response = await axios.get(API_URL + "/singleuser/" + newuser._id);
        expect(response.status).to.be.equal(200);
        expect(response.data).to.be.an("object");
    });

    it("Should have all the property for each user", async () => {
        const response = await axios.get(API_URL + "/singleuser/" + newuser._id);
        // console.log(response.data);

        expect(response.data.name).to.be.equal("nuevo");

        response.data.should.have.property("name");
        response.data.should.have.property("email");
        response.data.should.have.property("age");

        expect(response.status).to.be.equal(200);
        expect(response.data).to.be.an("object");

    });



});


// describe("Check two number",function(){

//     it("Match two number",()=>{

//         let name = 10;
//         let second = 10;

//         expect(first).to.be.equal(second);

//     });




// })