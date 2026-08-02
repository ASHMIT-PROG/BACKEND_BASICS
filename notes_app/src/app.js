// creation of server
const express = require('express')
const app  = express();

module.exports = app // exported the server instance 


/**
 * note = {
 * title : "my first note "
 * description : "this is my first note"
 * }
 * 
 * creation of notes in an array 
 * 
 * const notes = [
 * {
 * title:"my second note",
 * description: "this is second note"
 * },
 * {
 * title:"my third note",
 * description: "this is third note"
 * }
 * ]
 */

// user have to give title and description from frontend
// post method at /notes
const notes = []


app.use(express.json())
/**
 * Client
  |
  | JSON data bhejta hai
  ↓
express.json() middleware
  |
  | JSON ko JavaScript object me convert karta hai
  ↓
Route handler
  |
  ↓
req.body (yaha pe store hota hai json data)
 */
// ---------------------------------
// CREATION OF NOTES 
// frontrend se data server pe jaa raha hai
app.post("/notes",(req,res)=>{
    console.log(req.body);// Ye client ke bheje hue data ko print karega stored in req.body 
    // Client (frontend/user) ne jo data request ke andar bheja hai, woh data req.body me store hota hai.
        notes.push(req.body)
        // notes arry me push ho gaya
        res.status(201).json({
            message:"notes created successfully"
        }) // Server client ko kya bhejega.
        // status code : 201 , when a new resource is created in the backend
        // json format me message bhenge notes created successfully 
    })
// ------------------------------------------------
//I WANT TO SEE ALL THE NOTES THAT CREATED 
// get method => server data ko frontend pe dikhana
app.get("/notes",(req,res)=>{
    res.status(200).json({
        // 200 -> Request successfully complete ho gayi 
        message:"notes fetched successfully",
        notes:notes
    })
    
})
//------------------------------------------------
//  I WANT TO DELETE NOTES
// delete method => frontend me mai bolunga ki mujhe koi specific note delete karna hai
// server pe data hai aur usko mereko delete karna hai

/* delete/notes/3 */
app.delete("/notes/:index", (req, res) => {

    // :index is a dynamic route parameter
    // Example: DELETE /notes/2
    // req.params.index will contain "2"

    const index = Number(req.params.index);

    // Convert index from string to number
    // req.params always gives values as strings


    if(index >= notes.length){

        // Check if the given index exists in notes array
        // If index is greater than array size, note is not available

        return res.status(404).json({
            message:"Note not found"
        });

        // Send 404 response and stop execution
    }


    notes.splice(index,1);// array.splice(startIndex, deleteCount)

    // Remove 1 note from the given index
    // splice(startIndex, numberOfElementsToRemove)
    //
    // Example:
    // notes.splice(2,1) removes note at index 2


    res.status(200).json({

        // Send successful response with status code 200

        message:`Note deleted successfully at index ${index}`

        // Template literal inserts index value dynamically
    });

});
//------------------------------------------------
/**
 * NOW I HAVE TO UPDATE A PARTICULAR NOTE 
 * patch -> server pe already present data ko update karna hai
 * 
 */
app.patch("/notes/:index", (req, res) => {

    // Getting index from URL parameter
    // Example request:
    // PATCH /notes/1
    //
    // req.params.index will give:
    // "1" (string)
    //
    // We convert it into number because array indexes are numbers

    const index = Number(req.params.index);


    // Getting updated data from request body
    //
    // Example body:
    // {
    //    "title":"Express",
    //    "description":"Learn API"
    // }
    //
    // req.body.title will give updated title
    // req.body.description will give updated description

    const description = req.body.description;
    const update_title = req.body.title;


    // Checking whether the note exists or not
    //
    // Example:
    // notes length = 3
    //
    // Valid indexes:
    // 0, 1, 2
    //
    // If user sends:
    // PATCH /notes/5
    //
    // index = 5
    // Note does not exist

    if(index < 0 || index >= notes.length){

        // Sending 404 status code
        // 404 means resource not found

        return res.status(404).json({
            message:"Note not found"
        });

        // return stops the function execution
        // so further update code will not run
    }


    // Updating only the fields which user has provided
    //
    // PATCH means partial update
    // User can update only title or only description
    //
    // Example:
    // {
    //    "title":"Node.js"
    // }
    //
    // Only title will be updated


    if(update_title){

        // If title is provided in request body,
        // update the title of that note

        notes[index].title = update_title;
    }


    if(description){

        // If description is provided in request body,
        // update the description of that note

        notes[index].description = description;
    }


    // Sending successful response
    //
    // 200 means request completed successfully

    res.status(200).json({

        message:"Notes updated successfully",

        // Sending the updated note back to client

        note: notes[index]
    });

});