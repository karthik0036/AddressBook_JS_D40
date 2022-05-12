// importing another class file to this class file
const ContactDetails = require("./ContactDetails.js");
const prompt = require('prompt-sync')();

// ability to add details to ContactDetails class
var contactInfo = new ContactDetails("Jon","Snow","North","Mysre","Karnataka","511232","9123456789"
                  ,"jon@gmail.com");

console.log(contactInfo.toString());

contactInfo.firstName = "Ned";
contactInfo.lastName = "Stark";
contactInfo.address = "South";
contactInfo.city = "Mandya";
contactInfo.state = "Karnataka";
contactInfo.zip = "534343";
contactInfo.phoneNumber = "1234556789";
contactInfo.email = "nedstark@gmail.com";
console.log(contactInfo.toString());

//Ability to add user-defined values to the PersonInfoData
contactInfo.firstName = prompt("Enter First Name : "); 
contactInfo.lastName = prompt("Enter Last Name : "); 
contactInfo.address = prompt("Enter Address : "); 
contactInfo.city = prompt("Enter City : "); 
contactInfo.state = prompt("Enter State : "); 
contactInfo.zip = prompt("Enter Zip : "); 
contactInfo.phoneNumber = prompt("Enter Phone Number : "); 
contactInfo.email = prompt("Enter Email : "); 
console.log(contactInfo.toString());