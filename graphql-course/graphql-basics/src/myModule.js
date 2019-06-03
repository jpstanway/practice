// Named export - Has a name. Has as many as needed
// Default export - Has no name. Can only have one

const message = "Some message from myModule.js";
const name = "Jordan";
const location = "Calgary";

const getGreeting = name => {
  return `Welcome to the course ${name}`;
};

export { message, name, getGreeting, location as default };
