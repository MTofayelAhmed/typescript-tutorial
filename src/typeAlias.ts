// type alias in object / function and other activities

type User = {
  id: number;

  name: {
    firstName: string;
    LastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 123,
  name: {
    firstName: "Mx",
    LastName: "Y",
  },
  gender: "male",
  contactNo: "0122344",
  address: {
    division: "ctg",
    city: "ctg",
  },
};
