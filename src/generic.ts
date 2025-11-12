type GenericArray<T> = Array<T>;

const friends: GenericArray<string> = ["A", "B", "C"];

const rollNumber: GenericArray<number> = [1, 2, 3, 4];

const isEligible: GenericArray<boolean> = [true, false, true];

type Coordinates<T, Y> = [T, Y];

const coordinates1: Coordinates<string, string> = ["20", "30"];
const coordinates2: Coordinates<number, number> = [20, 30];

// generic in array of object

const userList: GenericArray<{
  name: string;
  age: string;
}>= [
    {name: "Ahmed", age: "35"}
];
