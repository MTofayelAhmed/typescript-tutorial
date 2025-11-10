const user = {
  id: 1,
  name: {
    firstName: "Mezbaul",
    middleName: "Abedin",
    LastName: "Persian",
  },
  gender: "male",
  favouriteColor: "black",
};

const { favouriteColor: myfavouriteColor } = user;
console.log(myfavouriteColor);
