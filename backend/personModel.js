const mg = require("mongoose");
const v = require("validator");

const personSchema = new mg.Schema({
  fname: {
    type: String,
    required: true,
  },
  mname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  mobilenumber: {
    type: String,
    required: true,
    validate: {
      validator: function (val) {
        // Regular expression to validate a 10-digit mobile number
        const mobileNumberPattern = /^\d{10}$/;
        return mobileNumberPattern.test(val);
      },
      message: "Mobile number must be a 10-digit number.",
    },
  },
  
  email: {
    type: String,
    validate(val) {
      if (!v.isEmail(val)) {
        throw new Error("Enter valid email_id");
      }
    }
  },
  password:{
    type:String,
    required :true
  },
  dob:{
    type:Date,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  nri:{
    type:String,
    required:true
  },
  height:{
    type:String,
    required:true
  },
  cast:{
    type:String,
    required:true
  },
  maritialstatus:{
    type:String,
    required:true
  },
  fathername:
  {
    type:String,
    required:true
  },
  mothername:{
    type:String,
    required:true
  },
  eductaion:{
    type:String,
  },
  occupation:{
    type:String,
    required:true
  },
  income:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  hobbies:{
    type:String,
    required:true
  },
  physicaldisability:{
    type:String,
    required:true
  },
  image:Buffer,

  wishlist: [
    {
      type: mg.Schema.Types.ObjectId,
      ref: "person", // Reference the 'person' model
    },
  ],
});

const person = mg.model("person", personSchema);
module.exports = person;
