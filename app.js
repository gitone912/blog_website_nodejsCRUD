import express from 'express';
import connectDb from './db/connectDb.js';
// import './models/student.js'
// import {getAllDoc,updateDoc,deleteDoc} from './models/student.js';
import {web} from "./routes/web.js"


const app = express();
const port = 8000;
const DATABASE_URL = "mongodb://localhost:27017";



connectDb(DATABASE_URL);

app.use(express.static('public'));


app.set('view engine', 'ejs');
app.use("/",web)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    }
);
