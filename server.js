import express from 'express'
import {TO_DOS} from "./mock/todo-mock.js";
const app = express();


app.get('/to_dos', (req, res) => {
    res.json(TO_DOS);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log('Available endpoints: GET: http://localhost:3000/to_dos')
});