type RichPeopleVehicle = {
    car: string ;
    bike: string;
    cng: string

}

type MyVehicle2 = "bike" | "car" | "cng"

type MyVehicle1 = keyof RichPeopleVehicle

const myVehicle : MyVehicle1 = "cng"



type User= {
id: number,
name: string,
address: string
}
const user = {
    id: 1222,
    name: "Ahmed",
    address: "ctg"
}


const getPropertyFromObj =<T> (obj: T, key: keyof T)=>{
    return obj[key] 
}
const result = getPropertyFromObj(user, "id")

const product = {
    brand: "HP"
}

const result2 = getPropertyFromObj(product, "brand")

const student = {
    id: 123,
    class: 4
}
const result3 = getPropertyFromObj(student, 'class')