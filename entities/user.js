class User {
    constructor(user) {
      if(user === null) user = {}

      this.id = user.id;
      this.name = user.name;
      this.phone = user.phone;
      this.obs = user.obs;
    }
  }
  
  module.exports = User;
  