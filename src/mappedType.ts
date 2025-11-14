// mapped types

// map

const arrayOfNum: number[] = [1, 4, 6];

const arrayOfstring: string[] = ["1", "4", "6"];

const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());

console.log(arrayOfStringUsingMap);

const user = {
  id: 222,
};

type AreaOfNum = {
  height: number;
  width: number;
};

type height = AreaOfNum["height"];

// type AreaOfString = {
//  height: string;
//   width: string;
// };



// type areaOfString = {
//     [key in "height" | "Width"]: string


// }

type areaOfString = {
    [key in keyof AreaOfNum]: string
}

// Now , we want to generalize it so that using it we can use it to convert different 

type area <T>= {
    [key in keyof T]: T[key]
}

const area1: area<{ height: string; width: boolean }> = {
  height: "50",
  width: false,
};




// type Area<T> = {
//   [key in keyof T]: T[key];

  // key >> height >> string
  // key >> width >> number


/*

T >>>   { height: string; width: number }
  
{  height: string; width: number }['height']: number

*/

//"height" |"width"

