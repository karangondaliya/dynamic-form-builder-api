const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  formName: String,
  fields: [
    {
      fieldType: String,
      label: String,
      options: [String],
      required: Boolean,
    },
  ],
});

const responseSchema = new mongoose.Schema({
  formId: mongoose.Schema.Types.ObjectId,
  responses: [
    {
      fieldName: String,
      value: mongoose.Schema.Types.Mixed,
    },
  ],
});

const Form = mongoose.model("Form", formSchema);
const FormResponse = mongoose.model("FormResponse", responseSchema);

module.exports = { Form, FormResponse };