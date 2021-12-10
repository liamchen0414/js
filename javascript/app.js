const dict = [
  {
    name: "Tom",
    password: 123
  },
  {
    name: "Liam",
    password: 345
  }
]

user =   {
  name: "Liam",
  password: 345
}

const auth = {
  name: "",
  login(someone) {
    const users = [...dict];
    let found = users.find(user => someone.name === user.name && someone.password === user.password);
    if(found){
      console.log(`Welcome ${someone.name} !`);
      this.name = someone.name;
    } else {
      console.log("Error: check your username or password");
    }
  },
  logout() {
    console.log(`Goodbye ${this.name}`);
  }
}