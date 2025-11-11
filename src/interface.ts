// interface discussion
type User = {
  name: string;
  id: number;
};

const user1: User = {
  name: "ahmed",
  id: 2345,
};

type Role = {
  role: "admin" | "user";
};


interface IUser {
    name: string;
    age: number 
}


interface UserWithRole extends IUser{
    role: "admin",
}

type userWithRole = User & Role;

// function and array interface discussion 


type Add = (num1:number, num2: number)=>   number

interface IAdd {
    (num1: number, num2: number): number
}

type friends = string[]


interface IFriend{
    [index:number]: string
}

const friends : IFriend =["A", "B", "C"]