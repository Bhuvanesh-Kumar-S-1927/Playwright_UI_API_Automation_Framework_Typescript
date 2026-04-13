import { expect, test } from '../../fixtures/hooks-fixture'
import apiPathData from '../../data/api-data/api-path-data.json'
import restfulapiData from '../../data/api-data/restful-booker-api-module-data.json'

// test("API testing", async({request})=>{
//     const response = await request.get("booking");
//     console.log(await response.json());

// })

// test("API testing 2", async({request})=>{
//     const responses = await request.get("booking/2");
//     console.log(await responses.json());
// })

// test("Verify that the user is able to fetch all the booking IDs using GET API and receive valid response", {tag:['@SMOKE','@HIGH LEVEL', '@REGRESSION'], annotation:{type: 'test case', description:'test description'}}, async({request})=>{
//     const bookingIDResp = await request.get(apiPathData.booking_path);
//     const bookingjsonRespo = await bookingIDResp.json();
//     console.log(bookingjsonRespo);
//     expect(bookingIDResp.status()).toBe(200);
//     expect(bookingIDResp.statusText()).toBe('OK');
//     expect(bookingjsonRespo).not.toBeNull();
//     expect(bookingIDResp.headers()['content-type']).toBe(restfulapiData.content_type);
// })

test("GET - Verify that the user is able to fetch the specific booking ID using GET API and receive valid response", { tag: ['@SMOKE', '@HIGH LEVEL', '@REGRESSION'], annotation: { type: 'test case', description: 'test description' } }, async ({ request }) => {
    const bookingResp = await request.get(`${apiPathData.booking_path}/${restfulapiData.bookingID}`);
    //const bookingResp = await request.get("booking/2");
    console.log(bookingResp);
    console.log(apiPathData.booking_path);
    console.log(restfulapiData.bookingID);
    const bookingjsonRespo = await bookingResp.json();
    console.log(bookingjsonRespo);
    expect(bookingResp.status()).toBe(200);
    expect(bookingResp.statusText()).toBe('OK');
    expect(bookingjsonRespo).not.toBeNull();
    expect(bookingjsonRespo.firstname).toEqual(restfulapiData.firstname);
})

test("POST - Verify that the user is able to create new booking using POST API and receive valid response",
    {
        tag: ['@SMOKE', '@HIGH LEVEL', '@REGRESSION'],
        annotation: { type: 'test case', description: 'test description' }
    }, async ({ request }) => {
        const createbookingResp = await request.post(apiPathData.booking_path, {
            data: restfulapiData.createBooking
        });
        //const bookingResp = await request.get("booking/2");
        console.log(createbookingResp);
        const bookingjsonRespo = await createbookingResp.json();
        console.log(bookingjsonRespo);
        expect(createbookingResp.status()).toBe(200);
        expect(createbookingResp.statusText()).toBe('OK');
        expect(bookingjsonRespo).not.toBeNull();
        expect(bookingjsonRespo.booking).toMatchObject(restfulapiData.createBooking);
    })

test("PUT- Verify that the user is able to update a existing booking using PUT API and receive valid response",
    {
        tag: ['@SMOKE', '@HIGH LEVEL', '@REGRESSION'],
        annotation: { type: 'test case', description: 'test description' }
    }, async ({ request, commonApiUtils }) => {
        const tokenvalue = await commonApiUtils.createToken();
        console.log(tokenvalue);
        const updatebookingResp = await request.put(`${apiPathData.booking_path}/${restfulapiData.bookingID2}`, {
            headers: {
                Cookie: `token=${tokenvalue}`
            },
            data: restfulapiData.updateBooking
        });
        //const bookingResp = await request.get("booking/2");
        //console.log(updatebookingResp);
        const bookingjsonRespo = await updatebookingResp.json();
        console.log(bookingjsonRespo);
        expect(updatebookingResp.status()).toBe(200);
        expect(updatebookingResp.statusText()).toBe('OK');
        expect(bookingjsonRespo).not.toBeNull();
        expect(bookingjsonRespo).toMatchObject(restfulapiData.updateBooking);
    })

test("PATCH - Verify that the user is able to partialy update a existing booking using PATCH API and receive valid response",
    {
        tag: ['@SMOKE', '@HIGH LEVEL', '@REGRESSION'],
        annotation: { type: 'test case', description: 'test description' }
    }, async ({ request, commonApiUtils }) => {
        const tokenvalue = await commonApiUtils.createToken();
        console.log(tokenvalue);
        const partialupdatebookingResp = await request.patch(`${apiPathData.booking_path}/${restfulapiData.bookingID2}`, {
            headers: {
                Cookie: `token=${tokenvalue}`
            },
            data: restfulapiData.partialUpdateBooking
        });
        //const bookingResp = await request.get("booking/2");
        //console.log(updatebookingResp);
        const partialbookingUpdatejsonRespo = await partialupdatebookingResp.json();
        console.log(partialbookingUpdatejsonRespo);
        expect(partialupdatebookingResp.status()).toBe(200);
        expect(partialupdatebookingResp.statusText()).toBe('OK');
        expect(partialbookingUpdatejsonRespo).not.toBeNull();
        expect(partialbookingUpdatejsonRespo.firstname).toMatch(restfulapiData.partialUpdateBooking.firstname);
        expect(partialbookingUpdatejsonRespo.lastname).toMatch(restfulapiData.partialUpdateBooking.lastname);
    })    

test("DELETE - Verify that the user is able to delete a existing booking using Delete API and receive valid response",
    {
        tag: ['@SMOKE', '@HIGH LEVEL', '@REGRESSION'],
        annotation: { type: 'test case', description: 'test description' }
    }, async ({ request, commonApiUtils }) => {
        const tokenvalue = await commonApiUtils.createToken();
        console.log(tokenvalue);
        const deletebookingResp = await request.delete(`${apiPathData.booking_path}/${restfulapiData.bookingID3}`, {
            headers: {
                Cookie: `token=${tokenvalue}`
            },
            data: restfulapiData.partialUpdateBooking
        });
        console.log(deletebookingResp);
        expect(deletebookingResp.status()).toBe(201);
        expect(deletebookingResp.statusText()).toBe('Created');
        
        const getbookingResp = await request.get(`${apiPathData.booking_path}/${restfulapiData.bookingID3}`)
        expect(getbookingResp.status()).toBe(404);
        expect(getbookingResp.statusText()).toBe('Not Found');
    })   