const app = require('express')(); 
const routes = require('./routes');
const cors = require('cors'); 

app.use(cors()); 
app.use('/',routes); 

app.listen(8000,()=>{
    console.log('Example App Listening on port 8000'); 
}); 

