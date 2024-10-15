"#dynamic-form-builder-api" 

dotenv
MONGO_URI = your mongodb url
PORT = 3000

Step 1: npm i
Step 2: node index.js

step 3: in postman you can test by following data

for create form

POST - http://localhost:3000/forms
{
  "formName": "Registration Form",
  "fields": [
    { "fieldType": "text", "label": "Name", "required": true },
    { "fieldType": "dropdown", "label": "Country", "options": ["USA", "Canada"], "required": true },
    { "fieldType": "checkbox", "label": "Interests", "options": ["Coding", "Music"], "required": false }
  ]
}

GET - http://localhost:3000/forms/:id

for submit form
POST - http://localhost:3000/forms/:id/responses
{
    "responses": [
        { "fieldName": "Name", "value": "Karan Gondaliya" },
        { "fieldName": "Country", "value": "USA" },
        { "fieldName": "Interests", "value": ["Coding"] }
    ]
}

GET - http://localhost:3000/forms/:id/responses
