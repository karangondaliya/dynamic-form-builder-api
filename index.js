const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const {Form, FormResponse} = require('./models/model');
dotenv.config();

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI);

//To Create a Form
app.post('/forms', async (req, res) => {
    //const { formName, fields } = req.body;
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(201).json({ message: 'Form created successfully', formId: newForm._id });
});

// Get Form by ID
app.get('/forms/:id', async (req, res) => {
    const form = await Form.findById(req.params.id);
    if (!form) return res.status(404).json({ message: 'Form not found' });
    res.json(form);
  });

// Submit Form Response
app.post('/forms/:id/responses', async (req, res) => {
    const { responses } = req.body;
    const form = await Form.findById(req.params.id);
    if (!form) return res.status(404).json({ message: 'Form not found' });
  
    const newResponse = new FormResponse({ formId: req.params.id, responses });
    await newResponse.save();
    res.status(201).json({ message: 'Response submitted successfully' });
  });

// Get Responses for a Form
app.get('/forms/:id/responses', async (req, res) => {
    const responses = await FormResponse.find({ formId: req.params.id });
    res.json(responses);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
});