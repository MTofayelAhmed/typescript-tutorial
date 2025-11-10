// function , arrow function, normal function

function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(2, 2);

const addArrow = (num1: number, num2: number): number => num1 + num2;
addArrow(3, 4);
// method in object
const poorUser = {
  name: "mezba",
  balance: 0,
  addBalance(value: number): number {
    const totalBalance = this.balance + value;
    return totalBalance;
  },
};
poorUser.addBalance(100);

const arr: number[] = [1, 2, 3, 4];

const sqrArray = arr.map((element: number): number => element * element);
