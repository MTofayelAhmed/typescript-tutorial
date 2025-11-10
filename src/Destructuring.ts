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

const { favouriteColor: myfavouriteColor, name: {middleName} } = user;
console.log(myfavouriteColor);
