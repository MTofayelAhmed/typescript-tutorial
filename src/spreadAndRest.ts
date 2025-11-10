// spread operator example

const number: number[] = [1, 2, 3, 4];

const number2: number[] = [5, 6, 7, 8];

const newNumber = [...number, ...number2];

// Now Object

const user = {
  name: "shahjalal",
  phoneNo: "01684163259",
};

const otherInfo = {
  hobby: "outing",
  favouriteColor: "Black",
};

const allInfo = { ...user, otherInfo };

// rest operator example

const sentInvite = (...friends: string[]) => {
  friends.forEach((friend) => console.log(`send Friends ${friend}`));
};

sentInvite("aman", "Rahman", "korim", "atik", "musafir");
