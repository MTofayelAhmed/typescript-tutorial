//  array , object

let  shoppingList: string[] = ["eggs", "milk"]

let shoppingListWithNumber:(string | number)[]=  ["egg", 12, "apple", 5]

//  in array , there is a special type which we called tuple .  


//  tuple example 


const nameAge:[string, number]= ["ahmed", 25]

// object , readonly , hard-coated string as a type ( noprimitive or reference type discussion)


const user : {
    organization: "Programming Hero";
//   readonly  organization: string;     
//   //or we can put it as readonly property where it can only read the value not change the value 
    firstName: string;
    middleName?: string;
    lastName: string;
}= {
    organization: "Programming Hero",
    firstName: "Md",
    middleName: "Tofayel",
    lastName: "Ahmed"
}