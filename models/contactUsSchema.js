import mongoose from "mongoose";
const { Schema, model } = mongoose;

const subscriptionSchema = new Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  emailAddress: {
    required: true,
    type: String,
  },
  mobileNumber:{
    required: false,
    type: Number
  },
  subject: {
    required: true,
    type: String,
  },
  category: {
    required: true,
    type: String,
  },
  message: {
    required: true,
    type: String,
  },
});

const ContactUs = model("ContactUs", subscriptionSchema);
export default ContactUs;


