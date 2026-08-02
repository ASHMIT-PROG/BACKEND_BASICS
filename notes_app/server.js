// server ko start karna 
const app = require("./src/app") // imported the server instance from app.js
// saved in app


// starting the server
app.listen(3000,()=>{
    console.log("app is listening on port 3000");
    
})
