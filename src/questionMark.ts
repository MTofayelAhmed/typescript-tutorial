// ternary operator // nullish coalescing operator/ optional chanining

// ternary operator
const age = 21;

const biyerJonnoEligible = (age: number) => {
  const ageLimit = age > 21 ? "you are eligible" : "you are not eligible";
  return ageLimit;
};

console.log(biyerJonnoEligible(23));


// nullish coalescing operator 


const themeColor = undefined ;
const mainThemeColor = themeColor ?? "this color is selected"