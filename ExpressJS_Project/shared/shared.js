module.exports = (msg) => {
  console.log(msg);
};


module.exports = (firstName, lastName) => {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = () => {
    return this.firstName + ' ' + this.lastName;
  };
};